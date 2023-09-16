<template>
    <nav>
        <el-row>
            <el-col :span="23">
                <router-link to="/" class="logo"><img src="./assets/logo1.png"/></router-link>
            </el-col>
            <el-col :span="1" style="margin-top: 1%">
                <el-row>
                <router-link to="/database">database</router-link></el-row>
                <el-row>
                <router-link to="/software">software</router-link></el-row>
            </el-col>
        </el-row>
    </nav>
    <img class="logo2" src="./assets/logo2.png"/>
    <router-view/>
</template>

<script>

</script>

<style scoped>
.logo {
    /*width: 175px;*/
    /*height: 82.48px;*/
    width: 11%;
    height: 11%;
    top: 2%;
    left: 1%;
}
.logo2{
    z-index: 98;
    width: 11%;
    height: 11%;
    position: absolute;
    top: 2%;
    left: 77%;
}
nav {
    width: 90%;
    z-index: 99;
    align-items: center;
    position: absolute;
    left: 3%;
    top: 2%;
}

nav a {
    font-family: Orbitron;
    text-decoration: none;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 0.18em;
    text-align: left;
    color: RGB(120,120,120);
}

nav a.router-link-exact-active {
    font-weight: bold;
    color: #00C0AF;
    font-family: Orbitron;
    font-size: 22px;
    line-height: 40px;
    letter-spacing: 0.18em;
    text-align: left;
}
</style>
