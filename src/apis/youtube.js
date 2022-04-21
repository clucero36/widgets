import axios from 'axios';

const KEY = 'AIzaSyBcD-HzdsqdIxIpXS6Ynd54pBcesx3FVeU'

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxValues: 5,
        key: KEY
    }
})