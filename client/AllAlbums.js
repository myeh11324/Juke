
import React from 'react'
import Album from './Album'

const AllAlbums = (props) => {
    const albums = props.albums
    const pickAlbum = props.pickAlbum
    return (
        <div className='container'>
            <div id='albums' className='row wrap'>
                {
                    albums.map(album => {
                        return (
                            <Album album={album} key={album.id} pickAlbum={pickAlbum}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AllAlbums

