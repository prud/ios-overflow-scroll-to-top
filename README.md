# iOS Overflow ScrollToTop
Using `-webkit-overflow-scrolling:touch` provides native-like scrolling on iOS web apps. However, when using it on any element other than `document.body`, it will break the native *scroll-to-top* behavior when tapping the status bar. This tiny script provides a replacement that even works when the scrollarea is currently bouncing or in momentum / inertia.

Check the [demo](http://prud.github.io/ios-overflow-scroll-to-top/demo/) on your iOS device (short: [goo.gl/6HJ9oG](goo.gl/6HJ9oG)). Scroll down and tap the header to scroll up.

## Usage
    headerEl.addEventListener('click', function() {
      window.scrollToTop(contentEl);
    });
`contentElement` can be a DOM element or a CSS-like selector.

## Compatibility
The script should work on all iOS 5+ devices (both browser and UIWebView). The [demo](http://prud.github.io/ios-overflow-scroll-to-top/demo/) has been tested on:

- iPhone 5 (iOS 6)
- iPod Touch (4th gen, iOS 6)
- iPhone Simulator (iOS 5-7)
- both on Mobile Safari and within UIWebview (e.g. [PhoneGap](http://phonegap.com) or [Trigger.io](http://trigger.io))

## Known issues
#### Why won't it scroll to top when I tap the status bar?
If you're building a web app for Mobile Safari it is not possible to listen for events on the status bar. However, if you're working with a UIWebView, you can actually achieve this with some native code. Read this StackOverflow question on how to [detect status bar touches](http://stackoverflow.com/questions/3753097/how-to-detect-touches-in-status-bar/16787113)
