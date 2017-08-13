import React, { PropTypes } from 'react'
import GifList from './GifList'
import GifSearch  from './GifSearch'

const URL = 'http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q='

class GifListContainer extends React.Component {
  constructor(){
    super()
    this.state = {
      gifs: [],
      query: ''
    }
  }

  onQuerychange(query) {
    this.setState({query},
    this.getGifs(this.state.query))

  }

  render () {
      return (
        <div>
          <p> I am a gif list container </p>
          <GifSearch onQuerychange={this.onQuerychange.bind(this)}/>
          <GifList gifs={this.state.gifs} />
       </div>
      )
  }



  getGifs(query) {
    let url = URL + query
    fetch(url)
    .then(response=> response.json())
    .then(json => {
      this.setState({
        gifs: json.data
      })
    })
  }

  componentDidMount() {
    this.getGifs("dogs")
  }
}

export default GifListContainer;
