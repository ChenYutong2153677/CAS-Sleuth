<template>
    <el-row>
        <el-col :span="16">
            <input class="input custom-input"  v-model="input">
        </el-col>
        <el-col :span="3" class="bott">
            <button @click="submit">
                <span class="transition"></span>
                <span class="gradient"></span>
                <span class="label">set</span>
            </button>
        </el-col>
        <el-col :span="3" class="bott">
            <button style="background-color: RGB(92,210,200)" @click="clear">
                <span class="transition"></span>
                <span class="gradient"></span>
                <span class="label">Clear</span>
            </button>
        </el-col>
    </el-row>
</template>
<script>
export default {
    data() {
        return {
            input: '',
        }
    },
    name: 'SearchBox',
    methods: {
        clear() {
            console.log("before" + this.input);
            this.input = '';
            console.log(this.input);
        },
        submit() {
            //跳转到查询结果页面，且将input传给查询结果页面
            //用emit
            this.$emit('new_input', this.input);

        }
    }
}
</script>
<style scoped>
.icon {
    margin-top: 12%;
    margin-left: 17%;
    color: #000000;
}

.input {
    margin-top: 2.5%;
    width: 95%;
    height: 45%;
    border-radius: 26px;
    border: 1.5px solid white;
    opacity: 70%;
    text-indent: 10px;
    font-size: 17px;
    background: linear-gradient(0deg, #C4F4E1, #C4F4E1),
    linear-gradient(0deg, #FFFFFF, #FFFFFF);
}

.custom-input::placeholder {
    color: black; /* 设置占位符的字体颜色为红色 */
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

button:hover .transition {
    width: 14em;
    height: 14em;
}

button:active {
    transform: scale(0.97);
    border: 0.8px solid white;
    font-size: 19px;
}

.bott {
    margin-top: 1.5%;
}
</style>