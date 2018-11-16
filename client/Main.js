import React from 'react'
import ReactDOM from 'react-dom'
import index from './index'

const albums = [
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
]



export default class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      albums: albums
    }
  }
  render () {
    return (
      <div id='main' className='row container'>
        <div id='sidebar'>
          <img src='juke.svg' id='logo' />
          <section>
            <h4>{
              <a>albums.map(album => {
                return (<{this.state.albums}/>) 
              }) 
              console.log(albums) }</a>
            </h4>
          </section>
        </div>

        <div class='container'>

          <div id='albums' class='row wrap'>
            <div class='album'>
              <a>
                <img src='default-album.jpg' />
                {albums.map(album => {
                  return ({this.state})
                })}
              </a>
            </div>
            <div class='album'>
              <a>
                <img src='default-album.jpg' />
                <p>ALBUM 2</p>
                <small>Artist Name</small>
              </a>
            </div>
          </div>
        </div>

        <div id='player-container'>
          <div id='player-controls'>
            <div class='row center'>
              <i class='fa fa-step-backward'></i>
              <i class='fa fa-pause-circle'></i>
              <i class='fa fa-step-forward'></i>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
