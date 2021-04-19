import React, { Component } from 'react'

 class SearchBar extends Component {
     state={term: ""};
     onInputChange=(event)=>{
        this.setState({term: event.target.value});
     }
     onFormSubmit=(e)=>{
       e.preventDefault();
       this.props.onFormSubmit(this.state.term);
     }
    render() {
        return (
            <div className="search-bar ui segment">
               <form onSubmit={this.onFormSubmit} className="ui form">
                 <div className="form-group">
                  <label>Video Search</label>
                  <input type="text" class="form-control" value={this.state.term} onChange={this.onInputChange} /> 
                 </div>
               </form>
            </div>
        )
    }
}

export default SearchBar;