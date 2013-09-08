# iOS Overflow ScrollToTop
Using `-webkit-overflow-scrolling:touch` provides native-like scrolling on iOS web apps. However, when using it on any element other than `document.body`, it will break the native *scroll-to-top* behavior when tapping the status bar. This tiny script provides a replacement that even works when the scrollarea is currently bouncing or in momentum / inertia.

## Usage
    headerEl.addEventListener('click', function() {
      window.scrollToTop(contentEl);
    });
`contentElement` can be a DOM element or a CSS-like selector.

## Compatibility
The demo has been tested on:

- iPhone 5 (iOS 6)
- iPod Touch (4th gen, iOS 6)
- iPhone Simulator (iOS 5-7)
- both on Mobile Safari and within UIWebview (e.g. PhoneGap or Trigger.io)
