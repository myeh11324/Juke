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
      selectedAlbum: {}
    }
    this.pickAlbum = this.pickAlbum.bind(this)
    this.deselectAlbum = this.deselectAlbum.bind(this)
  }

  async componentDidMount() {
    const result = await axios.get('/api/albums')
    const albums = result.data
    this.setState({albums: albums})
  }

 pickAlbum(albumId) {
    return async () => {
      const result = await axios.get(`/api/albums/${albumId}`)
      const album = result.data
      this.setState({selectedAlbum: album})
    }
  }

deselectAlbum() {
  //to switch back to all albums view
  this.setState({ selectedAlbum: {} })
}

  render () {
    return (
      <div id='main'>
        <Sidebar deselectAlbum={this.deselectAlbum}/>
        <Player />
        <div className='container'>
        {
          this.state.selectedAlbum.id ? 
            <SingleAlbum album={this.state.selectedAlbum} />
            : <AllAlbums albums={this.state.albums} pickAlbum={this.pickAlbum}/>
        }
        </div>
      </div>
    )
  }
}
