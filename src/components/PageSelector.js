import React from "react"
import getGifs from "../api/getGifs"

function PageSelector(props) {


    function handleClick(event) {
        const pageNum = event.target.attributes.num.value
        props.deselectLastPage()
        props.selectPage(event.target)
        props.clearCurrentPage()
        getGifs(props.searchTerm, position(pageNum)).then(res => props.setCurrentPage(res))
    }


    function position(page) {
        switch (page) {
            case "1":
                return 0
            case "2":
                return 16
            case "3":
                return 31
            case "4":
                return 46
            case "5":
                return 61
            case "6":
                return 76
            case "7":
                return 91
            case "8":
                return 106
            case "8":
                return 121
            case "10":
                return 136
        }
    }

    return (
        <div id="pageSelector">
            <span onClick={handleClick} num="1"  id="1"  className="page">1</span>
            <span onClick={handleClick} num="2"  id="2"  className="page">2</span>
            <span onClick={handleClick} num="3"  id="3"  className="page">3</span>
            <span onClick={handleClick} num="4"  id="4"  className="page">4</span>
            <span onClick={handleClick} num="5"  id="5"  className="page">5</span>
            <span onClick={handleClick} num="6"  id="6"  className="page">6</span>
            <span onClick={handleClick} num="7"  id="7"  className="page">7</span>
            <span onClick={handleClick} num="8"  id="8"  className="page">8</span>
            <span onClick={handleClick} num="9"  id="9"  className="page">9</span>
            <span onClick={handleClick} num="10" id="10" className="page">10</span>

        </div>
    )
}


export default PageSelector