document.addEventListener('DOMContentLoaded', () => {
    const source = location.search.split('url=')[1];
    const video = document.querySelector('video');
    //new 

    const player = new Plyr(video, {
        captions: {active: false, update: true, language: 'en'},
        fullscreen: {enabled: true, fallback: true, iosNative: true, container: null}
        });

    if (Hls.isSupported()) {
        var hls = new Hls();
        hls.loadSource(source);
        hls.attachMedia(video);
        window.hls = hls;
        hls.on(Hls.Events.MANIFEST_PARSED,function() {
        video.play();
        });
    } 
    
    //plyr.setup(video);
    //window.player = player;

    //end new
});
