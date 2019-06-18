
import React from 'react'
import Album from './Album'
import Songs from './Songs'

const SingleAlbum = (props) => {
    // const pickAlbum = props.pickAlbum
    const album = props.album //selectedAlbum from Main component
    return (
        <div id='single-album'>
            <Album album={album}/>
            <Songs songs={album.songs}/>
        </div>
    )
}

export default SingleAlbum