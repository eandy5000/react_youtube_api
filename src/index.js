import React from 'react';
import ReactDOM from 'react-dom';

//components
import SearchBar from '../components/search_bar';


const API_KEY = "AIzaSyAGVmHLVNgrQ4MoQKpf8RggfawNZz-NEbQ";

const App = () => {
    return (<div>
        <SearchBar />
    </div>);
}

ReactDOM.render(<App />, document.querySelector('.container'));