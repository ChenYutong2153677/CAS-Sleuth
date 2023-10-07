<template>
    <div class="bg">
        <div class="title">
            <el-row>
                <span class="title1">search in </span>
                <span class="title2">VIRUSCUFFS</span>
            </el-row>
        </div>
        <div class="intro">
            <span>For the database,you can search for various types of viruses and access their information, such as organism details,</span>
            <span> accession  numbers, and more. The database also includes gRNAs predicted by our software. </span>
        </div>

        <div class="search-bg">
            <el-row>
                <el-col :span="2">
                    <svg t="1694879776347" class="icon" viewBox="0 0 1024 1024" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" p-id="4013" width="50" height="50">
                        <path d="M640 456h-118.4V320a32 32 0 0 0-64 0v136H320a32 32 0 0 0 0 64h137.6V640a32 32 0 1 0 64 0v-120H640a32 32 0 1 0 0-64z"
                              p-id="4014" fill="#ffffff"></path>
                        <path d="M919.264 905.984l-138.912-138.912C851.808 692.32 896 591.328 896 480c0-229.376-186.624-416-416-416S64 250.624 64 480s186.624 416 416 416c95.008 0 182.432-32.384 252.544-86.208l141.44 141.44a31.904 31.904 0 0 0 45.248 0 32 32 0 0 0 0.032-45.248zM128 480C128 285.92 285.92 128 480 128s352 157.92 352 352-157.92 352-352 352S128 674.08 128 480z"
                              p-id="4015" fill="#ffffff"></path>
                    </svg>
                </el-col>
                <el-col :span="16">
                    <input class="input" @keyup.enter="submit" placeholder="e.g.Genomoviridae sp. " v-model="input">
                </el-col>
                <el-col :span="3" class="bott">
                    <button @click="submit">
                        <span class="transition"></span>
                        <span class="gradient"></span>
                        <span class="label">Go</span>
                    </button>
                </el-col>
                <el-col :span="3" class="bott">
                    <button style="background-color: RGB(92,210,200)" @click="clear">
                        <span class="transition"></span>
                        <span class="gradient"></span>
                        <span class="label" >Clear</span>
                    </button>
                </el-col>
            </el-row>
        </div>

    </div>

</template>

<script>
export default {
    data() {
        return {
            input: '',
        }
    },
    name: 'databaseSearch',
    methods: {
        clear() {
            this.input=this.input.trim();
            if(this.input==''||this.input==null||this.input.length===0){
                this.$message({
                    message: 'Please enter the name of the virus',
                    type: 'warning'
                });
                return;
            }
            console.log("before"+this.input);
            this.input= '';
            console.log(this.input);
        },
        submit(){
            this.input=this.input.trim();
            if(this.input==''||this.input==null||this.input.length===0){
                this.$message({
                    message: 'Please enter the name of the virus',
                    type: 'warning'
                });
                return;
            }
            //跳转到查询结果页面，且将input传给查询结果页面
            this.$router.push({
                path: "/database",
                query: {
                    input: this.input,
                },
            });
        }
    }
}
</script>

<style scoped>
.bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-image: url('../assets/bg1.jpg');
    background-size: cover;
}

.title {
    margin-top: 20%;
    margin-left: 39%;
    color: #000000;
    font-family: Sansation;
    text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.title1 {
    font-weight: 400;
    line-height: 72px;
    letter-spacing: 0em;
    text-align: left;
    font-size: 44px;
    padding-top: 18px;
    margin-right: 8px;
}

.title2 {
    font-weight: 400;
    font-size: 66px;
}

.intro {
    margin-top: 1%;
    margin-left: 17%;
    margin-right: 17%;
    font-family: Arial;
    font-size: 18px;
    font-weight: 400;
    line-height: 30px;
    letter-spacing: 0em;
    text-align: right;
    color: #000000;

}

.search-bg {
    margin-top: 3.5%;
    margin-left: 15%;
    background: linear-gradient(0deg, rgba(0, 192, 175, 0.43), rgba(0, 192, 175, 0.43)),
    linear-gradient(0deg, #FFFFFF, #FFFFFF);
    border: 1px solid #FFFFFF;
    width: 68%;
    height: 10%;
    border-radius: 18px;
    box-shadow: 0px 4px 4px 0px #00000040;
}

.icon {
    margin-top: 17%;
    margin-left: 17%;
    color: #000000;
}

.input {
    margin-top: 3.1%;
    width: 95%;
    height: 45%;
    border-radius: 26px;
    border: 2px solid white;
    opacity: 70%;
    text-indent: 10px;
    font-size: 17px;
}
input:focus {
    outline: none;
}
button {
    width: 82%;
    box-shadow: 0px 4px 4px 0px #00000040;
    font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    font-size: 20px;
    padding: 0.3em 1em;
    font-weight: bold;
    background: #59CBDDB2;
    color: white;
    border: none;
    border-radius: 30px;
    position: relative;
    overflow: hidden;

}

.gradient {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    border-radius: 0.6em;
    margin-top: -0.25em;
}

.label {
    position: relative;
    top: -1px;
}

.transition {
    transition-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transition-duration: 500ms;
    background: linear-gradient(0deg, #6FABCE, #6FABCE),
    linear-gradient(0deg, #FFFFFF, #FFFFFF);
    border-radius: 9999px;
    width: 0;
    height: 0;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
}
button:hover{
    cursor: pointer;
}
button:hover .transition {
    width: 14em;
    height: 14em;
}

button:active {
    transform: scale(0.97);
    border:0.8px solid white;
    font-size: 19px;
}
.bott{
    margin-top: 2%;
}
</style>