const axios = require('axios')

export class ApiService {
    url = 'http://127.0.0.1:8000/api/dishes'

    async GetDishes() {
        try {
            const response = await axios.get(this.url)
            return response
        } catch (error) {
            console.error(error)
        }
    }

    async DeleteDish(id) {
        try {
            const response = await axios.delete(`${this.url}/${id}`)
            return response
        } catch (error) {
            console.error(error)
        }
    }

    async CreateDish(data) {
        const dish = JSON.stringify({
            img: data.img,
            name: data.name,
            ingredients: data.ingredients,
            price: data.price,
        })

        var config = {
            method: 'post',
            url: this.url,
            headers: {
                'Content-Type': 'application/json',
            },
            data: dish,
        }

        await axios(config)
            .then(function(response) {
                console.log(response.data)
            })
            .catch(function(error) {
                console.log(error)
            })
    }
}
