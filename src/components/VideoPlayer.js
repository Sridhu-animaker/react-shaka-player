import React from 'react';
import ShakaPlayer from 'shaka-player-react';

const STREAMS = [
    {
        name: 'Angel One MPEG-DASH',
        src: 'https://dash.akamaized.net/dash264/TestCasesUHD/2b/11/MultiRate.mpd'
    },
    {
        name: 'Big Buck Bunny HLS',
        src:
            'https://storage.googleapis.com/shaka-demo-assets/bbb-dark-truths-hls/hls.m3u8'
    }
];

export const VideoPlayer = () => {

    const [src, setSrc] = React.useState(STREAMS[0].src);

    function onSelectSrc(event) {
        setSrc(event.target.value);
    }

    return (
        <div style={{ width: '50%', marginLeft: '0' }}>
            <div style={{ marginBottom: '20px' }}>
                <strong>Select the Video format :</strong>
                <select value={src} onChange={onSelectSrc}>
                    {STREAMS.map(stream => (
                        <option value={stream.src}>{stream.name}</option>
                    ))}
                </select>
            </div>

            <ShakaPlayer autoPlay src={src} />

        </div>
    );
}
