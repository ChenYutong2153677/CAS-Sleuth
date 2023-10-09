<template>
    <link href="https://fonts.googleapis.com/css2?family=Orbitron&display=swap" rel="stylesheet">

<div>

    <img src="../assets/pictures/bg-1.jpg" class="bg-1" style="z-index: 1;">
    <img src="../assets/pictures/bg-2.jpg" class="bg-2" style="z-index: 1;">
    <img src="../assets/pictures/caSleuth.jpg" class="cas" style="z-index: 2;">
    <div class="text" style="z-index: 2; font-family: 'Orbitron', sans-serif;margin-top:10px;">Thank you for using our services. </div> 
    <div class="text" style="z-index: 2; font-family: 'Orbitron', sans-serif;margin-top:35px;">We hope that our database and software will offer you convenience.</div>
    <div style=" z-index: 3; height: 70px;width: 100%;">
    <!-- <el-row :gutter="19" style="z-index: 3;position: fixed;right: 20%;bottom: 15%;">
        <el-col :span="16">
            <el-button class="database">
            </el-button>
        </el-col>
        <el-col :span="3">
            <el-button class="software">
            </el-button>
        </el-col>
    </el-row> -->
        <instructionButton class="instruction" @click="goInstruction"></instructionButton>
    <el-button class="database" style="z-index: 2;" @click="goDBSearch">
            </el-button>
    <el-button class="software" style="z-index: 2;" @click="goSoftwareSearch">
            </el-button>

    <div style="z-index: 1;">
        <img src="../assets/pictures/bg-1.jpg" style="position: absolute; height:800px;width:400px;position: relative;margin-top: -100px;margin-left: -1400px;">
    </div>
</div>
</div>
</template>

<script setup>
import instructionButton from "@/components/instructionButton.vue";
    import { useRouter } from 'vue-router';
    // // const route = useRoute();
    const router = useRouter();

    const goDBSearch=()=>{
        router.push('/databaseSearch');
    }
    const goSoftwareSearch = () => {
        router.push('/software');
    }
</script>

<style scoped>
.icon-home{
    background-image: url('../assets/pictures/icon_home.jpg');
    background-size: cover;
    height: 40px;
    width: 40px;
    position:relative;
    border: none;
}
:hover {
    height: 50px;
    background-position: center;
    background-size: cover;
  }
:active{
    height: 50px;
    background-position: center;
    background-size: cover;
}

.icon-star{
    background-image: url('../assets/pictures/icon_star.jpg');
    background-size: cover;
    background-position: center;
    height: 40px;
    width: 40px;
    border: none;
}
:hover {
    height: 50px;
    background-position: center;
    background-size: cover;
  }
:active{
    height: 50px;
    background-position: center;
    background-size: cover;
}

.icon-profile{
    background-image: url('../assets/pictures/icon_profile.jpg');
    background-size: cover;
    height: 40px;
    width: 40px;
    border: none;
}
:hover {
    height: 50px;
    background-position: center;
    background-size: cover;
  }
:active{
    height: 50px;
    background-position: center;
    background-size: cover;
}

.icon-chat{
    background-image: url('../assets/pictures/icon_chat.jpg');
    background-size: cover;
    height: 40px;
    width: 40px;
    border: none;
}
:hover {
    height: 50px;
    background-position: center;
    background-size: cover;
  }
:active{
    height: 50px;
    background-position: center;
    background-size: cover;
}

.icon-project{
    background-image: url('../assets/pictures/project_icon.jpg');
    background-size: cover;
    height: 40px;
    width: 80px;
    border: none;
}

.bg-1{
    position: fixed;
    width: 550px;
    height: 100%;
    top:0px;
    left:0px;
    z-index: 3;
    background-repeat:no-repeat;
}

.bg-2{
    position: fixed;
    width: 550px;
    height: 100%;
    top:0px;
    right:0px;
    z-index: 1;
    background-repeat:no-repeat;
}

.cas{
    position: absolute;
    width: 500px;
    height: 75px;
    top: 40%;
    left: 15%;

}
.text{
    position: absolute;
    font-family: Orbitron;
    font-size: 20px;
    left: 15%;
    top:50%;
}
.instruction{
    position: absolute;
    z-index: 99;
    top: 5%;
    right:4%;
}
.database{
    background-image: url('../assets/pictures/database.jpg');
    border: none;
    background-size: cover;
    position: fixed;
    height: 20px;
    width: 130px;
    bottom: 20%;
    right:34%;
}
.database:hover{
    height: 23px;
    width: 145px;
}

.software{
    background-image: url('../assets/pictures/software.jpg');
    border: none;
    background-size: cover;
    position: fixed;
    height: 20px;
    width: 130px;
    bottom: 20%;
    right:20%;
}
.software:hover{
    height: 23px;
    width: 145px;
}
</style>