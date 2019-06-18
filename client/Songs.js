
import React from 'react'

const Songs = (props) => {
    const songs = props.songs
    const playAudio = props.playAudio
    return (
    <table id='songs'>
        <tbody>
            <tr className='gray'>
                <td />
                <td>#</td>
                <td>Name</td>
                <td>Artist</td>
                <td>Genre</td>
            </tr>
            {
                songs.map(song => {
                    return ( 
                        <tr key={song.id}>
                            <td><i className='fa fa-play-circle' onClick={() => playAudio(song.audioUrl)}/></td>
                            <td>{song.id}</td>
                            <td>{song.name}</td>
                            <td>{song.artist}</td>
                            <td>{song.genre}</td>
                        </tr>
                    )
                })
            }
        </tbody>
    </table>
    )
}

export default Songs