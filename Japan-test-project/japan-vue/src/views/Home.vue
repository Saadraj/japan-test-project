<template>
    <Loading/>
</template>

<script>
import Loading from "../components/utils/Loading.vue";
export default {
    components:{
        Loading
    },
    beforeCreate() {
        window.location.href = "/modeltype";
    },
};
</script>

<style>
</style>
