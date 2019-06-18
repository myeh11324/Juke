
import React from 'react'
import Album from './Album'
import Songs from './Songs'

const SingleAlbum = (props) => {
    const album = props.album //selectedAlbum from Main component
    const playAudio = props.playAudio 
    return (
        <div id='single-album'>
            <Album album={album}/>
            <Songs songs={album.songs} playAudio={props.playAudio}/>
        </div>
    )
}

export default SingleAlbum