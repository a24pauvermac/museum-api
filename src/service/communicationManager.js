import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://www.theaudiodb.com/api/v1/json/2/',
    headers: {
        'Content-Type': 'application/json',
    },
});

export function searchArtist(query) {
    return apiClient.get("search.php", {
        params: { s: query }
    });
}
export function musicCharts(query) {
    return apiClient.get("track-top10.php", {
        params: { s: query }
    });
}