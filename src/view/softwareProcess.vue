<template>
  <!-- <div class="background">
    <loadingLogo v-if="isLoading"></loadingLogo>
        <div class="top-div">
            <el-row>
                <el-col :span="4">
                    <div class="result_title">search results</div>
                </el-col>
                <el-col :span="20">
                    <SearchBox @new_input="handle_new_input"></SearchBox>
                </el-col>
            </el-row>
        </div>
        <div class="result_num">
            for “<span class="green">{{ this.input }}</span>” we have <span class="green">{{ this.virus_num }}</span>
            results for you.
        </div>
</div> -->
  <!-- <el-row :gutter="10" style="position: relative;top:20px;left:1% ;z-index: 3;width: 100%;">
        <el-col :span="2">
            <el-button class="icon-project">
            </el-button>
        </el-col>
        <el-col :span="1">
            <el-button class="icon-home" @click="home_click">
            </el-button>
        </el-col >
        <el-col :span="1">
            <el-button class="icon-star">
            </el-button>
        </el-col>
        <el-col :span="1">
            <el-button class="icon-profile">
            </el-button>
        </el-col>
        <el-col :span="1">
            <el-button class="icon-chat">
            </el-button>
        </el-col>
        <el-col :span="4">
            <el-button class="viruscuffs">
            </el-button>
        </el-col>
        <el-col :span="4">
            <el-row>
                <el-button class="database-2">
                </el-button>
            </el-row>
            <el-row>
                <el-button class="software-2">
                </el-button>
            </el-row>
        </el-col>
    </el-row>
    <div class="search-blank">
        <el-text style="position: absolute; top:30%;left:5%;font-size: 25px;">search results</el-text>
        <el-button class="icon-zoom" >
        <div class="rounded-input">
            <el-input v-model="virus_name" placeholder="Please input" />
        </div>
        <el-button @click="GotoResult" style="position: absolute;left:700px;border-radius: 25px;color:white;box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);" color="#6AD3DC">Go</el-button>
        <el-button style="position: absolute;left:750px;border-radius: 25px;color:white;box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);" color="#6AD3DC">Clear</el-button>
        </el-button>
    </div> -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
    <confirmBox ref="confirmBoxRef"></confirmBox>
<div>
  <loadingLogo v-if="isLoading" style="z-index: 999"></loadingLogo>
  <el-card class="card-head">
    <button class="custom-button" @click="downloadClicked" :class="{ clicked: isClicked }">
      <span class="material-icons">download</span><span>Download</span>
    </button>
    <div style="position: absolute; left: 20%; top: 37%;">
      <div class="custom-radio">
        <input type="radio" id="radio1" name="radioGroup" value="1"  v-model="selectedValue" @click="chooseAll">
        <label for="radio1">all</label>
      </div>
      <div class="custom-radio">
        <input type="radio" id="radio2" name="radioGroup" value="2"  v-model="selectedValue" @click="chooseSelected" checked>
        <label for="radio2">selected</label>
      </div>
    </div>

    
  </el-card>
  <!--使用isChecked1与isChecked2分别表示两个变量-->
  <div style="z-index: 9; position: absolute; height: 70%">
    <div class="custom-checkbox" style="position: absolute; top: 40%; left: 13vw">
      <input type="checkbox" id="checkbox1" v-model="isChecked1" />
      <label for="checkbox1" style="line-height: 50px; text-align: center">original</label>
    </div>
    <div class="custom-checkbox" style="position: absolute; top:110%; left: 13vw">
      <input type="checkbox" id="checkbox2" v-model="isChecked3" />
      <label for="checkbox2" style="line-height: 50px; text-align: center">&nbsp;&nbsp;&nbsp;&nbsp; name</label>
    </div>
    <div class="custom-checkbox" style="position: absolute; top: 150%; left: 13vw">
      <input type="checkbox" id="checkbox2" v-model="isChecked2" />
      <label for="checkbox2" style="line-height: 50px; text-align: center">&nbsp;&nbsp;&nbsp;&nbsp;grna_info</label>
    </div>
    
  </div>

  <el-card class="card-content-bg">
    <el-card style="
        position: absolute;
        left: 5%;
        background-color: white;
        width: 90%;
        height: 500px;
        opacity: 1;
      ">
      <div style="
              border: 2px solid black;
              position: absolute;
              top: 33%;
              width: 90%;
              left: 5%;
              height: 50%;
              border-radius: 20px;
            ">
      <div class="scroller-origin">
              <el-text class="scroller-text">
                {{ content }}
              </el-text>
            </div>
          </div>
    </el-card>
    <button class="button-cas9" :style="{ 'z-index': cas9, 'background-color': cas9_color }" @click="cas_9_click">
      cas 9
    </button>
    <button class="button-cas12" :style="{ 'z-index': cas12, 'background-color': cas12_color }" @click="cas_12_click">
      cas 12
    </button>
    <button class="button-cas13" :style="{ 'z-index': cas13, 'background-color': cas13_color }" @click="cas_13_click">
      cas 13
    </button>
    <el-card style="
        position: absolute;
        left: 5%;
        top: 18%;
        background-color: white;
        width: 90%;
        height: 5%;
        opacity: 1;
        z-index: 8;
      ">
      <el-text style="position: absolute; top:45%; left: 15%;font-family: 'Arial';font-size: 24px;font-weight: bold;">
        {{ name }}
      </el-text>
    </el-card>
    <el-card style="
        position: absolute;
        left: 5%;
        top: 26%;
        background-color: white;
        width: 90%;
        height: 80%;
        opacity: 1;
        z-index: 8;
      ">
      <el-text style="position: absolute; top: 2%; left: 10%">
        description of the green one in the chart description of the green oen
        one in the chart
      </el-text>

      <div style="
          position: absolute;
          background: linear-gradient(#eeeeee, #ededed00);
          top: 5%;
          left: 10%;
          width: 80%;
          height: 80%;
          border-radius: 60px;
          z-index: 8;
        ">
        <div style="
            position: absolute;
            background-color: #5ec7d8;
            width: 50%;
            height: 50px;
            border-radius: 20px;
            top: 5%;
            left: 23%;
            z-index: 15;
          ">
          <el-text style="
              position: absolute;
              top: 30%;
              left: 42%;
              font-family: 'Arial';
              color: white;
              font-size: large;
            ">sequence</el-text>
        </div>
        <div style="
            position: absolute;
            background: linear-gradient(#ffffff, #ededed00);
            top: 6%;
            left: 5%;
            width: 90%;
            height: 70%;
            border-radius: 30px;
          ">
          <el-text style="
              position: absolute;
              width: 90%;
              top: 6%;
              left: 5%;
              font-family: Arial;
              word-wrap: break-word;
            ">
            The colors here represent the scores of these gRNAs. The deeper
            the color, the higher the score of the gRNA. And each gRNA's index
            is indicated on the display bar. Clicking on an index will take
            you to the corresponding position in the sequence.
          </el-text>
          <br />
          <div style="
              position: absolute;
              top: 20%;
              left: 5%;
              border-top: 5px solid #5cd2c7;
              width: 90%;
              height: 5px;
            ">
            <div v-for="(v, index) in cas_result_order_by_percentage" :key="v.index"
              :style="{ left: v.percentage * 700 + 'px' }" class="spacer-div">
              <div v-if="index % 2 == 0">
                <el-button style="
                    background-color: #6fd7ce;
                    border-radius: 20px;
                    color: black;
                    position: absolute;
                    top: -65px;
                    left: -17px;
                    height: 20px;
                    width: 40px;
                    font-size: 5px;
                  " @click="go_to_below(v.index)" :id="'button' + v.index">{{ v.index }}</el-button>
                <img src="../assets/pictures/Polygon.png" style="
                    position: absolute;
                    top: -60px;
                    left: -8px;
                    height: 50px;
                    width: 20px;
                  " />
              </div>
              <div v-else>
                <el-button style="
                    background-color: #6fd7ce;
                    border-radius: 20px;
                    color: black;
                    position: absolute;
                    top: 65px;
                    left: -17px;
                    height: 20px;
                    width: 40px;
                    font-size: 5px;
                  " @click="go_to_below(v.index)" :id="'button' + v.index">{{ v.index }}</el-button>
                <img src="../assets/pictures/Polygon2.png" style="
                    position: absolute;
                    top: 30px;
                    left: -8px;
                    height: 50px;
                    width: 20px;
                  " />
              </div>
            </div>
          </div>
          <div style="
              border: 2px solid black;
              position: absolute;
              top: 33%;
              width: 90%;
              left: 5%;
              height: 10%;
              border-radius: 20px;
            ">
            <div class="scroller">
              <el-text class="scroller-text">
                <span v-for="v in cas_result_order_by_percentage" :key="v.index">
                  <span style="color: rgba(136, 136, 136, 1)">{{
                    v.before_seq
                  }}</span>
                  <span style="color: rgba(56, 79, 185, 1); font-weight: bold">{{ v.show_seq }}</span>
                  <span style="color: rgba(136, 136, 136, 1)">{{
                    v.after_seq
                  }}</span>
                </span>
              </el-text>
            </div>
          </div>
        </div>
        <div style="
            position: absolute;
            background-color: #5ec7d8;
            width: 50%;
            height: 50px;
            border-radius: 20px;
            top: 41%;
            left: 23%;
            z-index: 15;
          ">
          <el-text style="
              position: absolute;
              top: 30%;
              left: 42%;
              font-family: 'Arial';
              color: white;
              font-size: large;
            ">grna_info</el-text>
        </div>
        <div style="
            position: absolute;
            background: linear-gradient(#ffffff, #ededed00);
            top: 42%;
            left: 5%;
            width: 90%;
            height: 60%;
            border-radius: 30px;
          ">
          <el-text style="
              position: absolute;
              width: 90%;
              top: 5%;
              left: 5%;
              font-family: Arial;
              word-wrap: break-word;
            ">
            The "GRNA" provided here refers to a segment that pairs
            complementarily with the viral sequence on the virus nucleic acid
            sequence, which is a section of the viral sequence itself rather
            than the actual "grna." The actual "grna" is an RNA sequence that
            complements and pairs with it.
          </el-text>
          <div style="
              position: absolute;
              width: 90%;
              height: 5%;
              background-color: rgba(94, 199, 216, 1);
              left: 5%;
              border-radius: 30px;
              z-index: 30;
              top: 10%;
            ">
            <el-text style="position: absolute; color: white; left: 5%; top: 40%">GRNA_Number</el-text>
            <el-text style="position: absolute; color: white; left: 25%; top: 40%">Score</el-text>
            <el-text style="position: absolute; color: white; left: 40%; top: 40%">GRNA_sequence</el-text>
            <el-text style="position: absolute; color: white; left: 85%; top: 40%">Index</el-text>
          </div>

          <div v-for="v in cas_result_order" :key="v.index" class="sequence" :style="{ opacity: 1.2 - v.order / 10 }"
            :id="v.index">
            <el-text style="position: absolute; color: black; left: 5%; top: 40%;font-weight: bold;">{{ v.order }}</el-text>
            <el-text style="position: absolute; color: black; left: 25%; top: 40%;font-weight: bold;">{{ v.score }}</el-text>
            <el-text style="position: absolute; color: black; left: 40%; top: 40%;font-weight: bold;">{{ v.show_seq }}</el-text>
            <el-text style="position: absolute; color: black; left: 85%; top: 40%;font-weight: bold;">{{ v.index }}</el-text>
          </div>
        </div>
      </div>
    </el-card>
  </el-card>
</div>

</template>

<script setup>
//import SearchBox from "@/components/SearchBox.vue";
import { onMounted, ref } from "vue";
//import { ArrowDown } from '@element-plus/icons-vue'
//const virus_name = ref('')
import { useRoute } from "vue-router";
import loadingLogo from "@/components/loadingLogo.vue";
import confirmBox from "@/components/confirmBox.vue";
const confirmBoxRef=ref()
//    const router=useRouter()
const route = useRoute();

import axios from "axios";
// const radio1 = ref(["1"]);
const sequence=ref('')
const name=ref('')
const cas9 = ref(8);
const cas9_color = ref("rgba(196, 196, 196, 1)");
const cas12_color = ref("rgba(196, 196, 196, 1)");
const cas13_color = ref("rgba(196, 196, 196, 1)");
const cas12 = ref(7);
const cas13 = ref(7);
const type = ref("");
const  selectedValue=ref("2");
const cas_result = ref([]);
const cas_result_order_by_percentage = ref([]);
const cas_result_order = ref([]);
const isClicked = ref(false);
const isChecked1=ref(false);
const isChecked2=ref(false);
const isChecked3=ref(false)
const isLoading=ref(false)
// const ischecked = ref(false);
const content=ref('')

const chooseAll=()=>{
  isChecked1.value=true;
  isChecked2.value=true;
  isChecked3.value=true;
}
const chooseSelected=()=>{
  isChecked1.value=false;
  isChecked2.value=false;
  isChecked3.value=false;
}
const downloadClicked = async () => {
  try {
        // 发送POST请求并获取文件数据
        const response = await fetch('http://43.133.192.56:5555/api/software-to-excel', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json', // 根据你的需求设置适当的Content-Type
          },
          body: JSON.stringify({
            cas_result: cas_result.value,
            name: name.value,
            type:type.value
            // 添加其他要发送的数据
          }),
        });

        if (!response.ok) {
          throw new Error('请求失败'); // 处理请求失败的情况
        }

        // 获取文件数据
        const blob = await response.blob();

        // 创建Blob URL
        const blobUrl = URL.createObjectURL(blob);

        // 创建一个隐藏的<a>元素，设置href属性为Blob URL
        const link = document.createElement('a');
        link.href = blobUrl;
         // 下载的文件名

        // 模拟点击<a>元素以触发下载
        link.style.display = 'none';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);

        // 释放Blob URL
        URL.revokeObjectURL(blobUrl);
      } catch (error) {
        console.error('发生错误：', error);
      }
};
onMounted(async () => {
  content.value=route.query.content
  type.value=route.query.type
  get_cas_information()
  
  if(type.value==='cas9'){
    cas9.value = 9;
    cas9_color.value = "rgba(92, 210, 199, 1)";
  }
  else if(type.value==='cas12'){
    cas12.value = 9;
    cas12_color.value = "rgba(92, 210, 199, 1)";
  }
  else if(type.value==='cas13a'){
    cas13.value = 9;
    cas13_color.value = "rgba(92, 210, 199, 1)";
  }
});

const get_cas_information=async ()=>{
  isLoading.value=true
  await axios({
                    url: 'http://43.133.192.56:5555/api/software/process',
                    method: 'post',
                    data: JSON.stringify({
                      type:type.value,
                      content:content.value
            // 添加其他要发送的数据
          }),
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            )
    .then((response) => {
      // 处理成功响应
      isLoading.value=false
      console.log(response.data.cas_result);
      cas_result.value = response.data.cas_result;
      if(cas_result.value.length<1){
        confirmBoxRef.value.openDialog()
      }
      console.log(cas_result.value.length);
      cas_result_order_by_percentage.value = JSON.parse(
        JSON.stringify(cas_result.value)
      );
      cas_result_order.value = JSON.parse(JSON.stringify(cas_result.value));
      cas_result_order_by_percentage.value.sort((a, b) => a.index - b.index);
      cas_result_order.value.sort((a, b) => a.order - b.order);
      name.value=response.data.name
      sequence.value=response.data.sequence

    })
    .catch((error) => {
      // 处理错误
      isLoading.value=false
      cas_result_order_by_percentage.value = [];
      cas_result_order.value = [];
      cas_result.value = [];
      console.error(error);
    });
}

function cas_9_click() {
  cas9.value = 9;
  cas9_color.value = "rgba(92, 210, 199, 1)";
  cas12.value = 8;
  cas13.value = 8;
  cas12_color.value = "rgba(196, 196, 196, 1)";
  cas13_color.value = "rgba(196, 196, 196, 1)";
  type.value = "cas9";
  get_cas_information();
}

function cas_12_click() {
  cas12.value = 9;
  cas12_color.value = "rgba(92, 210, 199, 1)";
  cas9.value = 8;
  cas13.value = 8;
  cas9_color.value = "rgba(196, 196, 196, 1)";
  cas13_color.value = "rgba(196, 196, 196, 1)";
  type.value = "cas12";
  get_cas_information();
}

function cas_13_click() {
  cas13.value = 9;
  cas13_color.value = "rgba(92, 210, 199, 1)";
  cas9.value = 8;
  cas12.value = 8;
  cas9_color.value = "rgba(196, 196, 196, 1)";
  cas12_color.value = "rgba(196, 196, 196, 1)";
  type.value = "cas13a";
  get_cas_information();
}

function go_to_below(index) {
  // const height=document.getElementById(index).offsetTop+window.scrollY
  const height =
    document.getElementById(index).offsetTop +
    document.documentElement.clientHeight * 1.7;
  console.log(height);
  window.scrollTo({ top: height, behavior: "smooth" });
}
       
//    function handle_new_input(message) {
//             console.log("handle_new_input:" + message);
//             this.input = message;
//         }
</script>

<style scoped>
.background {
  position: absolute;
  background-image: url("../assets/pictures/searchpage.jpg");
  background-size: cover;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
}

.icon-droplist {
  background-image: url("../assets/pictures/icon_outline.jpg");
  background-size: cover;
  left: 10%;
  top: 10%;
}

.rounded-input {
  height: 35px;
  width: 600px;
  position: absolute;
  left: 80px;
}

:deep(.el-input__wrapper) {
  background-color: rgba(196, 244, 225, 1);
  border-radius: 25px;
  /* 调整圆角半径 */
  border: 0;
  box-shadow: 0 0 0 0px;
}

.card-head {
  background-color: #5ec7d8;
  border-radius: 25px;
  /* 调整圆角半径 */
  position: absolute;
  top: 17%;
  left: 10%;
  height: 15%;
  width: 80%;
  z-index: 7;
}

.card-content-bg {
  background-color: rgba(239, 239, 239, 0.6);
  position: absolute;
  top: 17%;
  left: 10%;
  width: 80%;
  height: 350%;
  z-index: 5;
}

.download {
  background-image: url("../assets/pictures/download.png");
  background-size: cover;
  position: absolute;
  height: 30px;
  width: 150px;
  left: 5%;
  top: 30%;
  border: none;
}

.download:hover {
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
}

.spacer-div {
  position: absolute;
  width: 5px;
  height: 20px;
  top: -10px;
  background: linear-gradient(#384fb9, #384fb900);
  /* 添加其他样式属性，如边框、圆角等 */
}

.scroller {
  position: absolute;
  top: 3%;
  width: 95%;
  left: 3%;
  height: 90%;
  overflow-y: auto;
}

.scroller::-webkit-scrollbar {
  width: 7px;
  height: 5px;
  left: 5%;
}

.scroller::-webkit-scrollbar-track {
  background-color: #f1f1f1;
  /* 设置滚动条轨道的背景色 */
  width: 10px;
  border-radius: 20px;
  /* 设置轨道的圆角 */
}

/* 滚动条滑块 */
.scroller::-webkit-scrollbar-thumb {
  background-color: #00c0b0;
  /* 设置滚动条滑块的背景色 */
  width: 10px;
  border-radius: 20px;
  /* 设置滑块的圆角 */
}

/* 鼠标悬停在滑块上时的样式 */
.scroller::-webkit-scrollbar-thumb:hover {
  background-color: #00c0b0;
  /* 设置滚动条滑块的背景色 */
}

.sequence {
  position: relative;
  z-index: 15;
  width: 90%;
  height: 8%;
  background-color: #00c0afe5;
  left: 5%;
  top: 17%;
  border-radius: 30px;
  margin-top: 15px;
}

.top-div {
  position: relative;
  margin-top: 8%;
  width: 100%;
  height: 70px;
  background: linear-gradient(0deg, #91e4dc, #91e4dc),
    linear-gradient(0deg, #ffffff, #ffffff);
}

.result_title {
  /*font-family: Orbitron; */
  font-family: Arial;
  /*font-size: 24px;*/
  font-size: 23px;
  line-height: 41px;
  letter-spacing: 0em;
  margin-left: 15%;
  margin-top: 7%;
}

.button-cas9 {
  position: absolute;
  left: 45%;
  top: 24%;
  width: 170px;
  height: 70px;
  border-radius: 20px;
  color: white;
  border: 0ch;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  font-size: large;
}

.button-cas9:hover {
  color: white;
}

.button-cas9:active {
  color: white;
}

.button-cas12 {
  position: absolute;
  left: 60%;
  top: 24%;
  width: 170px;
  height: 70px;
  border-radius: 20px;
  color: white;
  border: 0ch;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  font-size: large;
}

.button-cas12:hover {
  color: white;
}

.button-cas12:active {
  color: white;
}

.button-cas13 {
  position: absolute;
  left: 75%;
  top: 24%;
  width: 170px;
  height: 70px;
  border-radius: 20px;
  color: white;
  border: 0ch;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.2);
  font-size: large;
}

.button-cas13:hover {
  color: white;
}

.button-cas13:active {
  color: white;
}

.left-button {
  position: absolute;
  left: 85%;
  top: 40%;
  background-image: url("../assets/pictures/icon_leftarrow.png");
  background-size: cover;
  border: 0ch;
}

.right-button {
  position: absolute;
  left: 93%;
  top: 40%;
  background-image: url("../assets/pictures/icon_rightarrow.png");
  background-size: cover;
  border: 0ch;
}

.grna_info {
  position: absolute;
  top: 92%;
  left: 210px;
  width: 150px;
  height: 50px;
  background-color: #00acc6;
  border-radius: 30px;
  color: white;
  border: 0ch;
}

.grna_info .el-checkbox__input.is-checked+.el-checkbox__label {
  color: green;
}

/*basic与grna_info多选项*/
.custom-checkbox input[type="checkbox"] {
  display: none;
}

.custom-checkbox label {
  position: relative;
  display: inline-block;
  width: 150px;
  height: 50px;
  line-height: 50px;
  background-color: #00acc6;
  border-radius: 30px;
  color: white;
  text-align: center;
  cursor: pointer;
  box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.3);
}

.custom-checkbox label:before {
  content: "";
  position: absolute;
  left: 15px;
  top: 15px;
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid white;
  background-color: white;
  /* 初始为白色 */
}

.custom-checkbox input[type="checkbox"]:checked+label:before {
  background-color: #00acc6;
  border: 2px solid white;
}

/*download按钮样式*/
.custom-button {
  background-color: rgb(94, 199, 216);
  color: white;
  font-weight: bold;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  position: absolute;
  top: 30%;
  font-size: 20px;
}

.custom-button.clicked {
  transform: scale(0.95);
}

.material-icons {
  margin-right: 4px;
}

/* all和selected样式 */
.custom-radio input[type="radio"] {
  display: none;
}

/* 自定义单选按钮容器 */
.custom-radio {
  display: inline-block;
  margin-right: 20px;
  font-size: 20px;
  font: bold;;
}

/* 自定义单选按钮样式 */
.custom-radio label {
  position: relative;
  display: inline-block;
  padding-left: 35px;
  cursor: pointer;
  font-size: large;
  font-weight: bold;
  color: white;
}

/* 添加自定义的圆形 */
.custom-radio label:before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: white;  /* 初始为白色 */
  border: 3px solid white;
}

/* 选中状态 */
.custom-radio input[type="radio"]:checked + label:before {
  background-color: rgb(56,79,185);  /* 选中后变为蓝色 */
  border: 3px solid white;
}

.scroller-origin {
  position: absolute;
  top: 10%;
  width: 70%;
  left: 15%;
  height: 80%;
  overflow-y: auto;
}

.scroller-origin::-webkit-scrollbar {
  width: 7px;
  height: 5px;
  left: 5%;
}

.scroller-origin::-webkit-scrollbar-track {
  background-color: #f1f1f1;
  /* 设置滚动条轨道的背景色 */
  width: 10px;
  border-radius: 20px;
  /* 设置轨道的圆角 */
}

/* 滚动条滑块 */
.scroller-origin::-webkit-scrollbar-thumb {
  background-color: #00c0b0;
  /* 设置滚动条滑块的背景色 */
  width: 10px;
  border-radius: 20px;
  /* 设置滑块的圆角 */
}

/* 鼠标悬停在滑块上时的样式 */
.scroller-origin::-webkit-scrollbar-thumb:hover {
  background-color: #00c0b0;
  /* 设置滚动条滑块的背景色 */
}
</style>
