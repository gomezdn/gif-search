import React from "react"
import SearchBar from "./SearchBar"
import PageSelector from "./PageSelector"
import GifsDisplay from "./GifsDisplay"


function App() {

    const [currentPage, setCurrentPage] = React.useState(null)
    const [searchTerm, updateSearchTerm] = React.useState("")
    const [selectedPage, updateSelectedPage] = React.useState(null) 

    function selectPage(page) {
        page.className = "pageSelected"
        updateSelectedPage(page)
    }

    function deselectLastPage() {
        if (selectedPage) {selectedPage.className = "page"}
    }

    function clearCurrentPage() {
        setCurrentPage([])
    }
   
    return (
        <div id="app">
            <SearchBar clearCurrentPage={clearCurrentPage}
                       setCurrentPage={setCurrentPage}
                       deselectLastPage={deselectLastPage}
                       selectPage={selectPage}
                       updateSearchTerm={updateSearchTerm}/>
            
            {currentPage ? <PageSelector searchTerm={searchTerm}
                                         clearCurrentPage={clearCurrentPage}
                                         selectedPage={selectedPage}
                                         selectPage={selectPage}
                                         deselectLastPage={deselectLastPage}
                                         setCurrentPage={setCurrentPage}/> : ""}
            
            <GifsDisplay currentPage={currentPage}/>

        </div>
    )
}


export default App