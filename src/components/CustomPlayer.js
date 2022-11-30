import React, { useEffect } from 'react';
import ShakaPlayer from 'shaka-player-react';
// const shaka = require("shaka-player/dist/shaka-player.ui.js");


function CustomPlayer() {

    useEffect(() => {
        const video = document.getElementById('video');
        console.log(video)
        const ui = video['ui']
        console.log('ui', ui)
        // Go through the below link for more configuration
        // https://shaka-player-demo.appspot.com/docs/api/tutorial-config.html
        const config = {
            'controlPanelElements': ['rewind', 'play_pause', 'fast_forward', 'time_and_duration', 'spacer', 'mute', 'volume', 'quality', 'picture_in_picture', 'fullscreen', 'overflow_menu'],
            'enableTooltips': true,
            'overflowMenuButtons': ['cast', 'Statistics']
        }
        ui.configure(config);
    }, [])


    return (
        <div style={{ width: '50%', marginLeft: '50%' }}>
            <div style={{ marginBottom: '20px' }}>
                <h4>Customized Shaka player</h4>
            </div>
            <ShakaPlayer
                autoPlay
                id='video'
                // loop
                // muted
                volume={20} //Not working
                // src="https://dl8.webmfiles.org/big-buck-bunny_trailer.webm"
                // src="https://dash.akamaized.net/dash264/TestCasesUHD/2b/11/MultiRate.mpd"
                // src="https://storage.googleapis.com/shaka-demo-assets/bbb-dark-truths-hls/hls.m3u8"
                src="https://dash.akamaized.net/dash264/TestCases/2c/qualcomm/1/MultiResMPEG2.mpd"
            />
        </div>)
}

export default CustomPlayer