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
                <input 
                    value={this.state.term}
                    onChange={event => this.onInputChange(event.target.value)} />
            </div>    
        );
    }

    onInputChange(term) {
       this.setState({term});
       this.props.onSearchTermChange(term)
    }


}


export default SearchBar;