import React from 'react';
import dynamic from 'next/dynamic';

const VideoPlayer = ({ url }) => {
    // lazy load react player to avoid hydration
    const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

    return (
        <ReactPlayer
            url={url}
            // height='70vh'
            width='100%'
            controls={true}
        />
    )
}

export default VideoPlayer;