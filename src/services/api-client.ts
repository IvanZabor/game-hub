import axios from "axios"

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '00858c8433c8426ca30b64a68c7cd145'
    }
})