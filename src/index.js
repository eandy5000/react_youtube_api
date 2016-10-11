import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';


//components
import SearchBar from '../components/search_bar';
import VideoList from '../components/video_list';
import VideoDetail from '../components/video_detail';

const API_KEY = "AIzaSyAGVmHLVNgrQ4MoQKpf8RggfawNZz-NEbQ";



class App extends Component {
    
    constructor(props) {
        super(props);

        this.state = {videos: [] };

        YTSearch({key: API_KEY, term: 'surfboards'}, (videos) => {
            //alternate es6 syntax used in many examples this.setState({videos})
            this.setState({videos : videos});
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.videos[0]}/>
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));