const axios = require('axios')

export class Dishes {
    async GetDishes() {
        try {
            const response = await axios.get('http://127.0.0.1:8000/api/dishes')
            return response
        } catch (error) {
            console.error(error)
        }
    }
}
