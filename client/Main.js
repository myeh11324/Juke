import React from 'react'
import axios from 'axios'
import Sidebar from './Sidebar'
import Player from './Player'
import AllAlbums from './AllAlbums'
import SingleAlbum from './SingleAlbum'

export default class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      albums: [],
      singleAlbum: {}
    }
  }

  async componentDidMount() {
    const result = await axios.get('/api/albums')
    const albums = result.data
    this.setState({albums: albums})
  }

  render () {
    return (
      <div id='main'>
        <Sidebar />
        <Player />
        <AllAlbums albums={this.state.albums} />
        <SingleAlbum />
      </div>
    )
  }
}
