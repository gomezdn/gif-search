import React from "react"

function GifsDisplay(props) {

    function urlsToImgs(urls) {
        return urls.map(url => <img src={url}></img>)
    }

    return (
        <div id="gifsDisplay">
            {props.currentPage ? urlsToImgs(props.currentPage): ""}
        </div>
    )

}

export default GifsDisplay
