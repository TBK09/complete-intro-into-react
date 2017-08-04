// This is an example of an ES6-component
import React from 'react';
import { connect } from 'react-redux'
import { Link } from 'react-router';
import { setSearchTerm } from './actionCreators'

class Header extends React.Component {
    constructor (props) {
        super(props);
        this.handleSearchTermChange = this.handleSearchTermChange.bind(this);
    }

    handleSearchTermChange (event) {
        this.props.dispatch(setSearchTerm(event.target.value))
    }
    render () {
        let utilspace;

        if (this.props.showSearch) {
            utilspace = <input
                onChange={this.handleSearchTermChange}
                type="text"
                value = {this.props.searchTerm}
                placeholder='Search'
            />
        } else {
            utilspace = <h2><Link to="/search">Back</Link></h2>
        }

        return (
            <header>
                <h1>
                    <Link to="/">
                        svideo
                    </Link>
                </h1>
                {utilspace}
            </header>
        )
    }
}

const {func, bool, string} = React.PropTypes;
Header.propTypes = {
    handleSearchTermChange : func,
    showSearch: bool,
    searchTerm: string
};

const mapStateToProps = (state) => {
    return {
        searchTerm: state.searchTerm
    }
};

export default connect(mapStateToProps)(Header);