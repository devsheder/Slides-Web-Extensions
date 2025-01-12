import { actions, store } from './store';

declare global {
    const browser: any;
    const chrome: any;
}

if (typeof window != "undefined") {
    var browserObject = (window as any).browser !== undefined ? browser : chrome;
} else {
    var browserObject = chrome;
}

export function listenForBackgroundScriptMessages() {
    console.log('devtool panel', 'start listening');
    browserObject.runtime.onMessage.addListener((event: any) => {
        console.log('devtool panel',event);
        if (event?.type == "demo-logs.new-log") {
            console.log('devtool panel', 'accepted', event);
            store.dispatch(actions.addLogs({ logs: event.logs ?? [] }));
        }
        return false; // will not respond to message
    });
}