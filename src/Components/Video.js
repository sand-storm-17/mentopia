
import React from 'react';
import ReactPlayer from "react-player";

function Video(props) {
  return (
    <div className="Video" style={{margin: '0px auto'}}>
      <ReactPlayer
        url={props.url}
      />
    </div>
  );
}

export default Video;