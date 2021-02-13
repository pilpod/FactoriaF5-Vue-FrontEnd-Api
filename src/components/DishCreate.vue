/* eslint-disable */

<template>
    <div id="dish-create" class="">
        <h2>Add Dish</h2>
        <label for="title">Dish Name</label>
        <input type="text" class="form-control" name="name" required />
        <label for="ingredients">Ingredients</label>
        <input type="text" class="form-control" name="ingredients" required />
        <label for="img">Image</label>
        <input type="text" class="form-control" name="img" required />
        <label for="price">Price</label>
        <input type="text" class="form-control" name="price" required />
        <button @click="AddDish()">Add</button>
    </div>
</template>

<script>
import { ApiService } from '../api/data.js'
export default {
    name: 'DishCreate',
    data() {
        return {
            newDish: {
                name: String,
                ingredients: String,
                img: String,
                price: Number,
            },
        }
    },
    methods: {
        AddDish() {
            const inputs = document.querySelectorAll('input')
            inputs.forEach(input => {
                if (input.name == 'name') this.newDish.name = input.value
                if (input.name == 'ingredients')
                    this.newDish.ingredients = input.value
                if (input.name == 'img') this.newDish.img = input.value
                if (input.name == 'price') this.newDish.price = input.value
                input.value = ''
            })

            const apiService = new ApiService()
            apiService.CreateDish(this.newDish)
            this.$emit('newDish', this.newDish)
        },
    },
}
</script>

<style scoped></style>
