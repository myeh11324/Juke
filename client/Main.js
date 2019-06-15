import React from 'react'
import Sidebar from './Sidebar'
import Player from './Player'
import AllAlbums from './AllAlbums'
import SingleAlbum from './SingleAlbum'

export default class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      albums: [
        {
          "id": 1,
          "name": "No Dummy",
          "artworkUrl": "default-album.jpg",
          "artistId": 1,
          "artist": {
            "id": 1,
            "name": "The Crash Test Dummies"
          }
        },
        {
          "id": 2,
          "name": "I React to State",
          "artworkUrl": "default-album.jpg",
          "artistId": 1,
          "artist": {
            "id": 1,
            "name": "The Crash Test Dummies"
          }
        }
      ],
      singleAlbum: {}
    }
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
