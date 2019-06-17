
import React from 'react'

const Sidebar = (props) => {
    const deselect = props.deselectAlbum
    return (
        <div id='sidebar' onClick={deselect}>
            <img src='juke.svg' id='logo' />
            <section>
                <h4>
                <a>ALBUMS</a>
                </h4>
            </section>
        </div>
    )
}

export default Sidebar