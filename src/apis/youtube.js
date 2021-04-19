import axios from 'axios';
const KEY ='AIzaSyDEwAOngVYzzbgb6jubW9EHkB4FDswQis8';
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5,
        key: KEY
    }
})