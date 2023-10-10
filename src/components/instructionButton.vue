<template>
    <div>
        <el-dialog class="dialog" title="Instruction" v-model="dialogVisible" width="30%" >
            <img class="Pic" src="../assets/pictures/intro.png" fit="fill">
            <template #footer>
                <span class="dialog-footer">
                    <el-button class="dialog-button" @click="dialogVisible = false">Close</el-button>
                </span>
            </template>
        </el-dialog>
        <button class="btn" @click="Instruction"><i class="animation"></i>Instruction<i class="animation"></i>
        </button>
    </div>
</template>

<script>

export default {
    name: 'instructionButton',
    components: {},
    data() {
        return {
            dialogVisible: false,
        }
    },
    methods: {
        Instruction() {
            this.dialogVisible = true;
        }
    },
}
</script>


<style scoped>
.Pic{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 100%;
}
:deep(.el-dialog){
    margin-top: 5%;
    width: 80%;
    border-radius: 10px;
    background-color: rgb(224,248,238);
}
:deep(.el-dialog__headerbtn) {
    background: url("../assets/pictures/close.jpg");
    background-size: cover;
    height: 35px;
    width: 35px;
    margin-right: 10px;
    margin-top: 5px;
}
:deep(.el-dialog__headerbtn i){
    display: none;
}
:deep(.el-dialog__header){
    border-radius: 10px 10px 0 0;
    background-color: rgb(85, 199, 187);
    margin: 0 0 0 0;
    box-shadow: 0px 4px 4px 0px #00000040;
    padding: 15px 20px 10px;
    height: 30px;
}
:deep(.el-dialog__title){
    color: white;
    font-weight: bold;
}
.dialog-button {
    background-color: RGB(0, 192, 175);
    border: none;
    border-radius: 10px;
    color: white;
    text-align: center;
    font-weight: bold;
    font-size: medium;
    margin-left: 15px;
    height: 30px;
    width: 70px;
    box-shadow: 0px 4px 4px 0px #00000040;
}
.dialog-button:hover {
    cursor: pointer;
    background-color: rgb(111, 171, 206);
    border: 1px white solid;
}
.dialog{
    width: 80%;
}
.btn {
    outline: 0;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    background: #19B3C6;

    min-width: 100px;
    border: 0;
    border-radius: 26px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, .1);
    box-sizing: border-box;
    padding: 16px 20px;
    color: #fff;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 1.2px;
    text-transform: uppercase;
    overflow: hidden;
    cursor: pointer;
}

.btn:hover {
    opacity: .85;
    font-size: 12.5px;
}

.btn .animation {
    border-radius: 100%;
    animation: ripple 0.6s linear infinite;
}

@keyframes ripple {
    0% {
        box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.1), 0 0 0 20px rgba(255, 255, 255, 0.1), 0 0 0 40px rgba(255, 255, 255, 0.1), 0 0 0 60px rgba(255, 255, 255, 0.1);
    }

    100% {
        box-shadow: 0 0 0 20px rgba(255, 255, 255, 0.1), 0 0 0 40px rgba(255, 255, 255, 0.1), 0 0 0 60px rgba(255, 255, 255, 0.1), 0 0 0 80px rgba(255, 255, 255, 0);
    }
}
</style>