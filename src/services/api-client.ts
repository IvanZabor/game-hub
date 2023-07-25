import axios from "axios"

export default axios.create({
    baseURL: 'https://api.rawg.io/api',
    params: {
        key: '24756b3dce284db995609c6e7c812835'
    }
})