import React, { Component } from 'react'
import _ from 'lodash'
import ReactDOM from 'react-dom'
import SECRET from '../secrets/secret'
import SearchBar from '../components/search_bar'
import VideoList from '../components/video_list'
import VideoDetail from '../components/video_detail'
import YTSearch from 'youtube-api-search'


class App extends Component {
    constructor(props){
        super(props)

        this.state = {
            videos: [],
            selectedVideo: null
        }
        this.videoSearch('surfboards')
    }

    videoSearch(term) {
            YTSearch({
        key: SECRET,
        term: term
    }, data => {
        this.setState(
            {
                videos: data,
                selectedVideo: data[0]
            })
        })  
    }


    render(){
        const videoSearch = _.debounce(term => {
            return this.videoSearch(term)
        }, 300)

        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList 
                    onVideoSelect={selectedVideo => this.setState({ selectedVideo })}
                    videos={this.state.videos} />
            </div>
        )
    }
}



ReactDOM.render(<App />, document.querySelector('.container'))
