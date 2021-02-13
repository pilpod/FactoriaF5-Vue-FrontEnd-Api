/* eslint-disable */

<template>
    <div class="dish">
        <dish-create @newDish="AddDish"></dish-create>
        <h1>Productos</h1>
        <div v-for="dish in dishes" :key="dish.id" class="product">
            <div class="product-img">
                <img v-bind:src="dish.img" alt="" />
            </div>
            <div>
                <h1>{{ dish.name }}</h1>
                <span>{{ dish.ingredients }}</span>
                <button v-on:click="DeleteDish(dish.id)">Delete</button>
            </div>
        </div>
    </div>
</template>

<script>
import { ApiService } from '../api/data.js'
import DishCreate from './DishCreate.vue'

export default {
    name: 'dish',
    components: {
        DishCreate,
    },
    props: {
        img: String,
        name: String,
        ingrededients: String,
        id: Number,
    },
    data() {
        return {
            products: [
                {
                    id: 1,
                    img: 'http://placeimg.com/640/480/any/grayscale',
                    name: 'Caracoles en salsa',
                    ingredients: 'lo que más guste',
                },
                {
                    id: 2,
                    img: 'http://placeimg.com/640/480/any/grayscale',
                    name: 'Ternera en salsa',
                    ingredients: 'lo que más guste',
                },
            ],
            dishes: [],
            newDish: Object,
        }
    },
    mounted() {
        this.GetAllDishes()
    },
    methods: {
        GetAllDishes() {
            const apiRepo = new ApiService()
            const response = apiRepo.GetDishes()
            response.then(data => this.PrintDishes(data))
        },
        PrintDishes(dishes) {
            this.dishes = dishes.data
        },
        DeleteDish(id) {
            const apiRepo = new ApiService()
            apiRepo.DeleteDish(id)
            let index
            this.dishes.forEach(dish => {
                if (dish.id == id) {
                    index = this.dishes.indexOf(dish)
                }
            })
            this.dishes.splice(index, 1)
        },
        AddDish(data) {
            this.dishes.push(data)
        },
    },
}
</script>

<style scoped>
.product {
    border: solid 1px gray;
    border-radius: 15px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;
    padding: 10px;
}

.product h1 {
    margin: 0;
    padding: 0;
}

.product-img > img {
    width: 80px;
    height: 80px;
    border: 2px solid blueviolet;
    border-radius: 100px;
    object-fit: cover;
    object-position: 50% 50%;
    margin: 0 20px 0 0;
}
</style>
