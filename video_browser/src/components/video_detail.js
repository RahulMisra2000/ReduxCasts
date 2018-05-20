import React from "react";

// let/const {age} = {name:’john’, age:45};
// What this does is, it creates a variable or constant  called age that will contain the value of the age property so, 
// it will contain 45
// Use Case: This is especially useful as formal parameters in function declaration because we can pick and choose a 
// part of the larger actual parameter object of the function invocation.
// In the example below 'props' is shoved by the system as the parameter to the arrow function.... but we are 
// only interested in props.video   ...hence ... that is why we are doing { video }


// This is a function based COMPONENT. And function based components return what needs to be rendered in their return value
// Class based components have a render() method that they define and that is what is rendered when the component is rendered
const VideoDetail = ({ video }) => {
   
  if (!video) {
    return <div>Loading...</div>;
  }

  const videoId = video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoId}`;

  return (
    <div className="video-detail col-md-8">
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url} />
      </div>
      <div className="details">
        <div>{video.snippet.title}</div>
        <div>{video.snippet.description}</div>
      </div>
    </div>
  );
};

export default VideoDetail;
