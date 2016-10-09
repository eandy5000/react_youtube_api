import React from 'react';


//We are going to turn this into a class based component
// const SearchBar = () => {
//     return <input />;
// }

//class based component
class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {term: ''};
    }
//you have to bind 'this' to an external function      
    render() {
        return (
            <div>
                <input onChange={this.onInputChange.bind(this)} />
                the Value: {this.state.term}
            </div>    
        );
    }

    onInputChange(event) {
       this.setState({term: event.target.value});
    }


}


export default SearchBar;