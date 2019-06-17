
import React from 'react'

const Songs = (props) => {
    return (
    <table id='songs'>
            <tbody>
            <tr class='gray'>
                <td />
                <td>#</td>
                <td>Name</td>
                <td>Artist</td>
                <td>Genre</td>
            </tr>
            <tr>
                <td><i class='fa fa-play-circle' /></td>
                <td>1</td>
                <td>Song Name</td>
                <td>Artist Name</td>
                <td>Song Genre</td>
            </tr>
            </tbody>
        </table>
    )
}

export default Songs