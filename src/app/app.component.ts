import {
    Component,
    ChangeDetectorRef,
    EventEmitter,
    Output
} from '@angular/core';
import { MediaMatcher } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent {
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

    constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
        this.mobileQuery = media.matchMedia('(max-width: 600px)');
        this.mobileQueryListener = () => changeDetectorRef.detectChanges();
        this.mobileQuery.addListener(this.mobileQueryListener);
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