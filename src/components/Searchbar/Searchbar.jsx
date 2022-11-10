import PropTypes from 'prop-types';
import { Component } from 'react';
import '../../styles.css';
import { ImSearch } from 'react-icons/im';

export default class Searchbar extends Component {
  state = {
    searchName: '',
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  handleNameChange = e => {
    this.setState({ searchName: e.currentTarget.value });
  };

  handleSubmit = e => {
    const searchName = this.state.searchName;
    e.preventDefault();
    if (searchName.trim() === '') {
      alert('Please enter a search query!');
      return;
    }
    this.props.onSubmit(searchName);
    this.setState({ searchName: '' });
  };

  render() {
    return (
      <>
        <header className="Searchbar">
          <form className="SearchForm" onSubmit={this.handleSubmit}>
            <button type="submit" className="SearchForm-button">
              <ImSearch className="Search-svg"/>
              <span className="SearchForm-button-label">Search</span>
            </button>

            <input
              className="SearchForm-input"
              type="text"
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
              value={this.state.searchName}
              onChange={this.handleNameChange}
            />
          </form>
        </header>
      </>
    );
  }
}
