
import React from 'react'
import SingleAlbum from './SingleAlbum'

const AllAlbums = (props) => {
    const albums = props.albums
    return (
        <div className='container'>
            <div id='albums' className='row wrap'>
                <div id='albums' className='row wrap'>
                <div className='album'>
                <a>
                    <img src='default-album.jpg' />
                    <p>ALBUM 1</p>
                    <small>Artist Name</small>
                </a>
                </div>
                <div className='album'>
                <a>
                    <img src='default-album.jpg' />
                    <p>ALBUM 2</p>
                    <small>Artist Name</small>
                </a>
                </div>
            </div>
                {/* {
                    albums.map(album => album.artworkUrl)
                } */}
            </div>
        </div>
    )
}

export default AllAlbums