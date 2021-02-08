<template>
    <div class="dish">
        <h1>Productos</h1>
        <div v-for="dish in products" :key="dish.id" class="product">
            <div class="product-img">
                <img v-bind:src="dish.img" alt="" />
            </div>
            <div>
                <h1>{{ dish.name }}</h1>
                <span>{{ dish.ingredients }}</span>
            </div>
        </div>
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
        }
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
