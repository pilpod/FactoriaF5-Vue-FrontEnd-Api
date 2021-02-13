<template>
    <div>
        <div class="card m-3" style="width: 15rem;">
            <div class="card-body">
                <h5 class="card-title" v-text="thecardtitle"></h5>

                <p class="card-text">I'm a <b>sister</b>.</p>

                <button @click="messageBrother" class="btn btn-warning">
                    Message Brother
                </button>

                <div
                    v-if="messagedaughter"
                    class="mt-3 alert alert-secondary"
                    v-html="messagedaughter"
                ></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['messagedaughter'],

    data() {
        return {
            thecardtitle: 'Child Component!',
        }
    },

    methods: {
        messageBrother() {
            this.$emit('sistersaid', 'Mom said do your homework!')
        },
    },
}
</script>

<style scoped>
div.card {
    color: #856404;

    border: 4px solid #ffeeba;
}
</style>
