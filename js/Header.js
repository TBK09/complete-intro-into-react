// This is an example of an ES6-component
import React from 'react';
import { Link } from 'react-router';

class Header extends React.Component {
    render () {
        let utilspace;

        if (this.props.showSearch) {
            utilspace = <input
                onChange={this.props.handleSearchTermChange}
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

export default Header;