import React, {useState} from 'react'
import video from "../data/video.js";
import VideoBlock from "./VideoBlock.js";
import TopSection from "./TopSection.js";
import CommentsSection from './CommentsSection.js';

function App() {

  const [hide, setHide] = useState(false)

  function hider() {
    setHide(hide => !hide)
  }

  return (
    <div className="App">
      <VideoBlock videoInfo={video}/>
      <TopSection videoInfo={video} hider={hider} hide={hide}/>
      <hr></hr>
      {hide ? <CommentsSection comments={video.comments}/> : null}
    </div>
  );
}

export default App;
