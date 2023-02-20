import axios from 'axios'

const baseUrl = "https://api.unsplash.com/search/photos?";

const clientId = "CmuH5tckSje2g5rFzvyZfF2YxEA2qRBcoWBudNGEYVI"

const fetchImages = (query, page) => {
    return new Promise((resolve) => {
        const url = baseUrl + `&page=${page}&per_page=12&query=${query}&client_id=${clientId}`
        axios.get(url)
            .then((response) => {
                resolve(response.data)
            })
    })
}

export default fetchImages