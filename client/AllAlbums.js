
import React from 'react'
import SingleAlbum from './SingleAlbum'

const AllAlbums = (props) => {
    const albums = props.albums
    const pickAlbum = props.pickAlbum
    return (
        <div className='container'>
            <div id='albums' className='row wrap'>
                {
                    albums.map(album => {
                        return (
                            <SingleAlbum album={album} key={album.id} pickAlbum={pickAlbum}/>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default AllAlbums

