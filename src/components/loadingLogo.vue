<template>
    <div class="all">
        <img class="load1" src="../assets/loading.png">
        <img class="load2" src="../assets/loading2.png">
    </div>
</template>
<style scoped>
.all{
    position: absolute;
    top: 40%;
    left: 37%;
}
.load1{
    /*width: 186px;*/
    /*height: 95px;*/
    width: 30%;
    height: 30%;
}
.load2{
    width: 40%;
    height: 40%;
    margin-left: 25px;
    margin-bottom: 10px;
}
</style>
<script>
export default {
    name: 'loadingLogo',
    data() {
        return {}
    },
    methods: {}
}
</script>