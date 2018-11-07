import {
    Component,
    ChangeDetectorRef,
    EventEmitter,
    Output,
    OnInit,
    OnDestroy
} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav, MatSnackBar } from '@angular/material';
import { IosInstallComponent } from './ios-install/ios-install.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
    title = 'PWA';
    mobileQuery: MediaQueryList;
    nav = [
        {
            'title': 'Home',
            'path': '/'
        },
        {
            'title': 'My Account',
            'path': '/auth'
        }
    ];
    private mobileQueryListener: () => void;
    @Output() toggleSideNav = new EventEmitter();

    constructor(
        changeDetectorRef: ChangeDetectorRef,
        media: MediaMatcher,
        private toast: MatSnackBar) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this.mobileQueryListener = () => changeDetectorRef.detectChanges();
    }

    ngOnInit() {
        this.mobileQuery.addListener(this.mobileQueryListener);

        // Detects if device is on iOS 
        const isIos = () => {
            const userAgent = window.navigator.userAgent.toLowerCase();
            return /iphone|ipad|ipod/.test(userAgent);
        }
        // Detects if device is in standalone mode
        const isInStandaloneMode = () => ('standalone' in (window as any).navigator) && ((window as any).navigator.standalone);

        // Checks if should display install popup notification:
        if (isIos() && !isInStandaloneMode()) {
            this.toast.openFromComponent(IosInstallComponent, {
                duration: 8000,
                horizontalPosition: 'start',
                panelClass: ['mat-elevation-z3']
            });
        }
    }

    ngOnDestroy() {
        this.mobileQuery.removeListener(this.mobileQueryListener);
    }

    toggleMobileNav(nav: MatSidenav) {
        if (this.mobileQuery.matches) {
            nav.toggle();
        }
    }
}

// import {
//     BreakpointObserver,
//     Breakpoints,
//     BreakpointState
//   } from '@angular/cdk/layout';
// constructor(public breakpointObserver: BreakpointObserver) {}
// ngOnInit() {
//     this.breakpointObserver
//       .observe([Breakpoints.Small, Breakpoints.HandsetPortrait])
//       .subscribe((state: BreakpointState) => {
//         if (state.matches) {
//           console.log(
//             'Matches small viewport or handset in portrait mode'
//           );
//         }
//       });
//   }