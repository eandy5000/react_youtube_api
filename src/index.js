import React, { Component } from 'react'
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
            videos: []
        }

    YTSearch({
        key: SECRET,
        term: 'surfboards'
    }, data => {
        this.setState({videos: data})
    })

        
    }

    render(){
        return (
            <div>
                <SearchBar />
                <VideoDetail video={this.state.videos[0]} />
                <VideoList videos={this.state.videos} />
            </div>
        )
    }
}



ReactDOM.render(<App />, document.querySelector('.container'))
