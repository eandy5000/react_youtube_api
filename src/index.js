import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';


//components
import SearchBar from '../components/search_bar';
import VideoList from '../components/video_list';


const API_KEY = "AIzaSyAGVmHLVNgrQ4MoQKpf8RggfawNZz-NEbQ";



class App extends Component {
    
    constructor(props) {
        super(props);

        this.state = {videos: [] };

        YTSearch({key: API_KEY, term: 'surfboard'}, (videos) => {
            //alternate es6 syntax used in many examples this.setState({videos})
            this.setState({videos : videos});
        });
    }

    render() {
        return (
            <div>
                <SearchBar />
                <VideoList videos={this.state.videos} />
            </div>
        );
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));