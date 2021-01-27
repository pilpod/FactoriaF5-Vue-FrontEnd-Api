<template>
    <div class="dish">
        <h1>Productos</h1>
        <div class="product-img">
            <img v-bind:src="product.img" alt="" />
        </div>
        <h1>{{ product.name }}</h1>
        <p>{{ product.ingredients }}</p>
    </div>
</template>

<script>
export default {
    name: 'dish',
    props: {
        img: String,
        name: String,
        ingrededients: String,
    },
    data() {
        return {
            product: {
                img: 'http://placeimg.com/640/480/any/grayscale',
                name: 'Caracoles en salsa',
                ingredients: 'lo que más guste',
            },
        }
    },
}
</script>

<style scoped>
.product-img > img {
    width: 200px;
    height: 200px;
    border: 2px solid blueviolet;
    border-radius: 100px;
    object-fit: cover;
    object-position: 50% 50%;
}
</style>
