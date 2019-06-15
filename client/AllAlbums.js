
import React from 'react'
import SingleAlbum from './SingleAlbum'

const AllAlbums = (props) => {
    const albums = props.albums
    return (
        <div className='container'>
            <div id='albums' className='row wrap'>
                    {
                        albums.map(album => {
                            return (
                                <div className='album' key={album.id}>
                                    <img src={album.artworkUrl}/>
                                    <p>{album.name}</p>
                                    <small>{album.artist.name}</small>
                                </div>
                            )
                        })
                    }
            </div>
        </div>
    )
}

export default AllAlbums

