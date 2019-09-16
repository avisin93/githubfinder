import React, { Component } from 'react'

export class Search extends Component {
    state = {
        text: ''
    }
    search = (e) => this.setState({ [e.target.name]: e.target.value });
    submitSearch = (e) => {
        e.preventDefault();
        console.log(this.state.text);
    }
    render() {
        return (
            <div>
                <form className='form' onSubmit={this.submitSearch}>
                    <input type='text' onChange={this.search} value={this.state.text} name='text' placeholder='Search Users' />
                    <input type='submit' value='Search' className='btn btn-dark btn-block' />
                </form>
            </div>
        )
    }
}

export default Search
