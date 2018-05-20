import _ from "lodash";
import React, { Component } from "react";
import ReactDOM from "react-dom";
import YTSearch from "youtube-api-search";
import SearchBar from "./components/search_bar";
import VideoList from "./components/video_list";
import VideoDetail from "./components/video_detail";
const API_KEY = "AIzaSyAuQCVeNfKhtRk9KlChQPT1nO27DPO_5Ss";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch("surfboards");
  }

  videoSearch(term) {
    YTSearch({ key: API_KEY, term: term }, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce(term => {
      this.videoSearch(term);
    }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
      
  // *** We are passing 2 things to the VideoList component. It will receive it in the props property.
  // The 2 things are onVideoSelect, which is a function... so we are sending a function
  //              and videos, which is just data 
      
  // The onVideoSelct is interesting ..we are sending a function to a component and that component can send it down to its 
  // component and eventually it can execute it and because the body of the function is setting the state ..so
  // basically what is happening is, that a CHILD component is able to change the state of a parent component...
  // In angular we did this by way of @output and events .... but the event handler was still in the parent .....
  // here kinda the code is being sent down to the child, who can execute it ...
      <VideoList
          onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
          videos={this.state.videos}
        />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector(".container"));
