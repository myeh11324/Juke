
import React from 'react'

//AllAlbums renders this component. We don't want the songs of each album to show in 
//the all albums view, so I separated into SingleAlbum and Album components. SingleAlbum
//represents the single album view, which will render both the Album and Songs components 
const Album = (props) => {
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

export default Album
    