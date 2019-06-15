
import React from 'react'

const SingleAlbum = (props) => {
    const pickAlbum = props.pickAlbum
    const album = props.album
    return (
        <div id='single-album' className='column'>
            <div className='album'>
              <a onClick={pickAlbum && pickAlbum(props.album.id)}>
                <img src={album.artworkUrl} />
                <p>{album.name}</p>
                <small>{album.artist.name}</small>
              </a>
            </div>
        </div>
    )
}

export default SingleAlbum