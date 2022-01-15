const baseUrl = "https://g.tenor.com/v1/autocomplete?key=YSYWK7CGJM0L"

function autoComplete(searchTerm) {
    const url = `${baseUrl}&q=${searchTerm}&limit=6`
    return fetch(url, {mode:"cors"})
    .then(response => response.json())
    .then(response => response.results)
}


export default autoComplete