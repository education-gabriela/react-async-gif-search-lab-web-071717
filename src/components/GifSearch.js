import React from "react";

class GifSearch extends React.Component {
  constructor() {
    super();
    this.state = {
      searchTerm: ""
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInputChange(event) {
    this.setState({searchTerm: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.onSubmit(this.state.searchTerm)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <p><label>Search For</label></p>
        <p><input type="text" onChange={this.handleInputChange} value={this.state.searchTerm} /></p>
        <p><button type="submit">Search</button></p>
      </form>
    );
  }
}

export default GifSearch;