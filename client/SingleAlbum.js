
import React from 'react'
import Album from './Album'

const SingleAlbum = (props) => {
    const pickAlbum = props.pickAlbum
    const album = props.album
    return (
        <div id='single-album'>
            <Album album={album}/>
        </div>
    )
}

export default SingleAlbum