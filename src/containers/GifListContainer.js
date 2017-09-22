import React from "react";
import GifList from "../components/GifList";
import GifSearch from "../components/GifSearch";

const URL = `http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=`;

class GifListContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      gifs: []
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.search = this.search.bind(this);
  }

  handleSubmit(searchTerm) {
    this.search(searchTerm);
  }

  search(searchTerm) {
    fetch(URL + searchTerm)
      .then(response => response.json())
      .then((gifJSON) => gifJSON.data.splice(0, 3))
      .then(gifs => this.setState({gifs: gifs}));
  }

  render() {
    return (
      <div className={"gif-container"}>
        <GifSearch onSubmit={this.handleSubmit} />
        <GifList gifs={this.state.gifs}/>
      </div>
    );
  }
}

export default GifListContainer;