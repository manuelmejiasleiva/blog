{
    let init = function() {
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('../../service-worker.js');
        }
        quicklink.listen();
        progressively.init();
    }

    window.addEventListener('load', init);
}