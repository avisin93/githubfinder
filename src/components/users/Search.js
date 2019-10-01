import React, { Component } from 'react';
import PropTypes from 'prop-types';
export class Search extends Component {
    state = {
        text: ''
    }

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired
    }

    search = (e) => this.setState({ [e.target.name]: e.target.value });
    submitSearch = (e) => {
        e.preventDefault();
        this.props.searchUsers(this.state.text);
        this.setState({ text: '' })
    }
    render() {
        return (
            <div>
                <form className='form' onSubmit={this.submitSearch}>
                    <input type='text' onChange={this.search} value={this.state.text} name='text' placeholder='Search Users' />
                    <input type='submit' value='Search' className='btn btn-dark btn-block' />
                </form>
                <button className="btn btn-light btn-block" onClick={this.props.clearUsers}>Clear</button>
            </div>
        )
    }
}

export default Search;
