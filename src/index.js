import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';


//components
import SearchBar from '../components/search_bar';


const API_KEY = "AIzaSyAGVmHLVNgrQ4MoQKpf8RggfawNZz-NEbQ";

YTSearch({key: API_KEY, term: 'surfboard'}, function(data){
    console.log(data);
});


const App = () => {
    return (<div>
        <SearchBar />
    </div>);
}

ReactDOM.render(<App />, document.querySelector('.container'));