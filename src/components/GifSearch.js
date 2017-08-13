import React, { PropTypes } from 'react'

class GifSearch extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      query: 'dogs'
    }
  }

  searchTermChanged(event) {

    this.setState({
      query: event.target.value
    }, () => {
      console.log("set the state"); this.props.onQuerychange(this.state.query)
    })
  }

  render () {
    return (
      <div className="gifsearch">
        <input type="text" onChange={this.searchTermChanged.bind(this)}/>
      </div>
    )
  }
}

export default GifSearch;
