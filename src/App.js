import React,{Component} from "react";
import "./styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/js/src/collapse.js";
import SearchBar from './components/SearchBar'; 
import youtube from '../src/apis/youtube';
import VideoList from './components/VideoList';
import VideoDetails from './components/VideoDetails';
export default class App extends Component {
    state={
        videos: [], selectedVideo: null
    }

componentDidMount(){
    this.onTermSubmit('building');
}

    onTermSubmit=async(term)=>{
     const response = await youtube.get('/search',{
          params:{
              q: term
          }
      })
      console.log(response);
      this.setState({videos: response.data.items, selectedVideo: response.data.items[0]})
    }
    onVideoSelect=(video)=>{
     this.setState({selectedVideo: video})
    }
  render() {
      return (
          <div className="ui container">
              <SearchBar onFormSubmit={this.onTermSubmit}/>
           
              <div className="row" style={{margin: "0"}}>
              <div className="col-lg-8 my-2">
              <VideoDetails video={this.state.selectedVideo}/>
              </div>
              <div className="col-lg-4 my-2">

              <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
              </div>
              
              </div>
          </div>
      )
  }
}
