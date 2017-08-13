import React, { PropTypes } from 'react'

class GifList extends React.Component {
  makeLis(){

    return this.props.gifs.map((gif, index) => {
      // return <li> <img src={gif.embed_url} alt={gif.slug} height="400" width="400" /></li>
      return <iframe src={gif.embed_url} width="480" height="332" frameBorder="0" className="giphy-embed" allowFullScreen key={index}></iframe>
    })
  }
  render () {
    return (
    <ul className="gifList">
      {this.makeLis()}
    </ul>
  )
  }
}

export default GifList;
