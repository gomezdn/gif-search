const baseUrl = "https://g.tenor.com/v1/search?key=YSYWK7CGJM0L"

function getGifs(searchTerm, pos) {
    const url = `${baseUrl}&q=${searchTerm}&limit=15&media_filter=minimal&pos=${pos}`

    return fetch(url, {mode:"cors"})
           .then(response => response.json())
           .then(response => response.results)
           .then(response => response.map(gif => gif.media[0].gif.url))
}

export default getGifs

