import React from "react"
import getGifs from "../api/getGifs"
import autoComplete from "../api/autoComplete"

function SearchBar(props) {

    const [suggestions, updateSuggestions] = React.useState([])

    function handleSubmit(event) {
        event.preventDefault()
        const searchTerm = event.target.search.value
        if (searchTerm !== "") {
            clearPreviousSearch()
            props.updateSearchTerm(searchTerm)
            getGifs(searchTerm, 0).then(res => {props.setCurrentPage(res)})
            props.selectPage(document.getElementById("1"))
        } else {errorForEmptySearch(event)}
    }

    function clearPreviousSearch() {
        props.clearCurrentPage()
        props.deselectLastPage()
        clearSuggestions()
    }

    function errorForEmptySearch(event) {
        event.target.search.style.color = "red"
        event.target.search.placeholder = "Please enter a valid term"
    }

    function handleOnFocus(event) {
        event.target.style.color = "black"
        event.target.placeholder = ""
        getSuggestions()
    }

    function getSuggestions() {
        const searchTerm = document.getElementById("searchBar").value
        if (searchTerm) {
            autoComplete(searchTerm).then(res => updateSuggestions(res))
        }
    }

    function handleSuggestionClick(event) {
        const searchTerm = event.target.attributes.value.value
        updateSuggestions([])
        props.updateSearchTerm(searchTerm)
        document.getElementById("searchBar").value = searchTerm
        document.getElementById("submitBtn").click()
    }

    function handleOnChange(event) {
        checkPlaceholderAndColor(event.target)
        event.target.value ? getSuggestions() : updateSuggestions([])
    }

    function checkPlaceholderAndColor(input) {
        if (input.style.color == "red") {input.style.color = "black"}
        if (input.placeholder !== "Enter your search here...") {input.placeholder = "Enter your search here..."}
    }

    function clearSuggestions() {
        updateSuggestions([])
    }
    
    function displaySuggestions() {
        return suggestions.map(suggestion => {
            return (
                    <span value={suggestion} 
                          onClick={handleSuggestionClick}
                          className="suggestion">
                        {suggestion}
                    </span>
            )}
        )
    }

    return (
        <form id="searchForm" onSubmit={handleSubmit}>
            <div id="searchDiv">
                <input type="text"  
                       autoComplete="off"
                       onChange={handleOnChange}
                       name="search"
                       id="searchBar"
                       placeholder="Enter your search here..."
                       onFocus={handleOnFocus}/>
                       
                <div id="searchSuggestions">{suggestions ? displaySuggestions() : ""}</div>
            </div>
            <button type="submit" id="submitBtn">SEARCH!</button>
        </form>
    )    
}


export default SearchBar