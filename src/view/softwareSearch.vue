<template xmlns:el-col="http://www.w3.org/1999/html">
    <div class="bg">
        <div>
            <el-row>
                <img src="../assets/title.png" class=title>
                <div class="intro">For the software, you can input a virus sequence to obtain its possible gRNAs along
                    with their efficiency scores.
                </div>
            </el-row>
        </div>

        <div>
            <div class="box1">
                <div class="box_tag">
                    <svg t="1695490845049" class="icon" viewBox="0 0 1024 1024" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" p-id="4042" width="20" height="20">
                        <path d="M85.312 164.8v604.8h853.376v-604.8H85.312zM682.688 870.4V960H341.312v-89.6H0V64h1024v806.4h-341.312zM499.2 533.76L708.288 320l59.712 61.12-268.8 274.88L320 472.704l59.712-61.056L499.2 533.76z"
                              fill="#ffffff" p-id="4043"></path>
                    </svg>
                    <span class="tag_title">input of fasta</span>
                </div>
                <div class="hint1">
                    Input your sequence.（Please provide the sequence or file in FASTA format.）
                </div>
                <el-row>
                    <el-col :span="4">
                        <span class="filename">filename :</span>
                    </el-col>
                    <el-col :span="13">
                        <div class="file_name_box"> {{this.filename}}</div>
                    </el-col>
                    <el-col :span="3">
                        <el-upload style="position: relative;top: -10px;"
                                   class="upload-demo"
                                   action="#"
                                   :show-file-list="false"
                                   :auto-upload="false"
                                   :on-change="uploadFile">

                            <svg t="1695816922053" class="icon" viewBox="0 0 1024 1024" version="1.1"
                                 xmlns="http://www.w3.org/2000/svg" p-id="7133" width="20" height="20">
                                <path d="M554.688 500.352v256H469.312v-256h-128L512 314.24l170.688 186.24h-128zM1024 640.192C1024 782.912 919.872 896 787.648 896h-512C123.904 896 0 761.6 0 597.504 0 451.968 94.656 331.52 226.432 302.976 284.16 195.456 391.808 128 512 128c152.32 0 282.112 108.416 323.392 261.12C941.888 413.44 1024 519.04 1024 640.192z m-259.2-205.312c-24.448-129.024-128.896-222.72-252.8-222.72-97.28 0-183.04 57.344-224.64 147.456l-9.28 20.224-20.928 2.944c-103.36 14.4-178.368 104.32-178.368 214.72 0 117.952 88.832 214.4 196.928 214.4h512c88.32 0 157.504-75.136 157.504-171.712 0-88.064-65.92-164.928-144.96-171.776l-29.504-2.56-5.888-30.976z"
                                      fill="#384FB9" p-id="7134"></path>
                            </svg>
                            <span class="upload-but"
                                  style="color: #384FB9;font-weight: bold;margin-left: 8px;position: relative;top: 3px;">upload</span>
                        </el-upload>
                    </el-col>
                    <el-col :span="3">
                        <button class="clear" @click="clear">clear</button>
                    </el-col>
                </el-row>
                <div class="show_box">
                    <div class="file_content">{{this.file_content}}</div>
<!--                    <el-input-->
<!--                        v-model="this.file_content"-->
<!--                        :rows="6"-->
<!--                        type="textarea"-->
<!--                    />-->
                </div>

            </div>
        </div>

        <div>
            <div class="box2">
                <div class="box_tag2">
                    <svg t="1695491431059" class="icon" viewBox="0 0 1024 1024" version="1.1"
                         xmlns="http://www.w3.org/2000/svg" p-id="5136" width="20" height="20">
                        <path d="M499 3.4c-3.2 1.8-14.6 10.8-25.2 20-10.6 9-20.4 16.6-21.6 16.6-1.4 0-13.4-4.6-26.8-10.2-40.8-17-46.8-15-69.6 22.2-17.4 28.6-10.8 25.8-53.8 23.2-23-1.4-25.4-1.2-31.4 2.6-11.2 7-12 9.2-25.6 65.6-0.8 3.8-4.6 5.2-28 10.6-30 7.2-38.2 11.4-43.8 22.8-3.4 7-3.6 9.6-1.4 33.8 1.2 14.6 2.2 28 2.2 29.8 0 2-9.2 9-25.2 18.8-38.2 23.4-39.8 28.4-21.8 71l11 26.2-19 21.8c-30 34.6-30 40-0.2 74.8 15.2 17.8 18.4 22.6 17.2 26-0.8 2.2-5.8 14.4-11 27-8 19.4-9.2 24.2-8.6 32.4 1.4 12.8 6.2 17.6 34.2 34.8 12.4 7.4 22.8 13.6 23 14 0.4 0.2-0.2 13.2-1.6 28.8-1.2 15.6-1.6 31-1 34.2 0.8 3.4 4.4 9 8 12.8 6 5.8 9.8 7.4 34.4 13 15.2 3.6 28.6 7.6 29.8 9.2 1.2 1.4 4.6 13.6 7.6 27.2 6.8 29.2 10.8 36.8 22.6 42 8 3.4 10.6 3.6 31.2 1.8 38.6-3.8 34.6-5.2 48.2 18.2 13.8 23.4 19.4 30.6 27.4 34.6 9.4 5 18.2 3.4 45.8-8l26.6-10.8 5.4 4.4c3 2.4 13.4 11 22.8 19.2 18.2 15.6 26.2 19 38 16.2 7.4-1.6 9-2.8 35.6-25.6l17-14.4 26.6 11c43 17.8 47.8 16.2 73-26.6 13.8-23.4 10-22 48-18.4 25.4 2.6 35.8 0 43.2-10.2 2.2-3.2 7-18 10.8-33 3.6-14.8 7.2-27.6 7.8-28.2 0.6-0.8 13.4-4.4 28.4-8 29.8-7.2 36.6-10.8 41.8-21.8 3.2-6.6 3.2-10 1-37.2-1.2-16.4-2-30.2-1.6-30.4 0.2-0.2 10.6-6.6 22.8-14 28-16.8 33-22 34.4-34.8 0.6-8.2-0.6-13-8.6-32.4-5.2-12.6-10.2-24.8-11-27-1.2-3.4 2-8.2 17.2-26 29.8-34.8 29.8-40.2-0.2-74.8l-19-21.8 11-26.2c18-42.6 16.4-47.8-21.8-71.2-15.8-9.6-25.2-16.6-25.2-18.6s1-15.2 2.2-29.8c2.2-24.2 2-26.8-1.4-33.8-5.6-11.4-14-15.8-43.8-22.8-23.4-5.4-27.2-7-28-10.6-13.6-56.4-14.4-58.6-25.6-65.6-6-3.8-8.4-4-31.4-2.6-43 2.6-36.4 5.4-53.8-23.2-22.8-37.2-29-39.2-69.2-22.2-13.2 5.6-25.2 10.2-26.8 10.2-1.4 0-11.4-7.6-22.2-17-10.8-9.4-22-18.4-25.2-20-7.4-3.8-18.2-3.6-25.8 0.4z m158.4 229.6c7.6 3.2 86 79.2 100.8 97.6 6.8 8.4 7.8 11.2 7.8 19.6 0 5.6-1.2 12.4-2.8 15.4-1.6 3-62.6 65-135.6 137.8-117.2 116.8-133.4 132.4-140.2 133.6-18.4 3.4-14.6 6.4-115-93.6-51-50.8-94-94.8-95.6-97.8-3.6-7-3.6-20.2 0-27.2 1.6-3 25.4-27.8 52.8-55 67.8-67.6 61.8-67 114.8-14l35.6 35.6 75.6-75.4c41.4-41.6 77.6-76.4 80.4-77.4 7.2-2.8 13.2-2.6 21.4 0.8z"
                              p-id="5137" fill="#ffffff"></path>
                        <path d="M572 377.2c-40.2 40.2-75.4 74.4-78.4 76-6.4 3.4-20.2 3.6-26.2 0.6-2.4-1.2-20-17.6-39-36.4L394 383l-24.4 24.6-24.6 24.4 67 67 67 67 107.4-107.4 107.6-107.6-23.4-23.4c-13-13-24-23.6-24.6-23.6-0.6 0-33.8 33-74 73.2zM61.6 737.4c-30.4 30.6-56.6 58.4-58.4 62-6 12.2-2.2 29.2 8.4 36.2 2.8 1.8 33.4 13 68 24.6l63.2 21 21 63.2c11.6 34.6 22.8 65.2 24.6 68 7 10.6 24 14.4 36.2 8.4 5.8-3 151.4-146.2 151.4-149 0-0.6-3.8-2.4-8.4-3.8-21.8-6.4-37.4-18.2-50.6-38.2l-9.4-14-13.4 1.4c-43.2 4.2-83.2-23.4-95-65.4-5-18-5-18-18.4-21.8-24.6-6.6-44.4-20.4-56.2-39-3-5-6-9-6.6-9-0.6 0-26 25-56.4 55.4zM901 688.4c-11.2 19-31.4 34-54.8 40.8-8.2 2.4-15.8 5.6-16.4 7-0.8 1.6-3 8.6-5 15.6-11.8 42-51.8 69.6-95 65.4l-13.4-1.4-9.4 14c-13.2 20-28.8 31.8-50.4 38.2-4.8 1.4-8.6 3.2-8.6 3.8 0 2.8 145.6 146 151.4 149 12.2 6 29.2 2.2 36.2-8.4 1.8-2.8 13-33.4 24.6-68l21-63.2 63.2-21c34.6-11.6 65.2-22.8 68-24.6 10.6-7 14.4-24 8.4-36.2-3-5.8-112.2-117.4-114.8-117.4-0.6 0-2.8 3-5 6.4z"
                              p-id="5138" fill="#ffffff"></path>
                    </svg>
                    <span class="tag_title">input of cas</span>
                </div>
                <div class="hint2">
                    Choose cas protein according your virus type.
                </div>

                <el-radio-group v-model="radio" style="width: 100%;position: relative;top: -10%;z-index: 99;">
                    <div class="option-box cas9">
                        <el-radio label="cas9" class="radio">cas 9</el-radio>
                        <div class="tag tag1">DNA virus</div>
                    </div>
                    <div class="option-box cas12">
                        <el-radio label="cas12" class="radio">cas 12</el-radio>
                        <div class=" tag tag2">Retroviral RNA virus</div>
                    </div>
                    <div class="option-box cas13">
                        <el-radio label="cas13" class="radio">cas 13a</el-radio>
                        <div class="tag tag1">RNA virus</div>
                    </div>
                </el-radio-group>
            </div>
        </div>
        <button class="Go" @click="Go">GO</button>
    </div>
</template>

<style scoped>
.file_name_box {
    /*margin-top: 2.5%;*/
    position: relative;
    top: -15%;
    width: 80%;
    height: 65%;
    border-radius: 26px;
    border: 1.5px solid white;
    opacity: 70%;
    text-indent: 10px;
    font-size: 17px;
    background: linear-gradient(0deg, #C4F4E1, #C4F4E1),
    linear-gradient(0deg, #FFFFFF, #FFFFFF);
}

.file_content {
    margin-left: 50px;
    padding-top: 10px;
    width: 90%;
    height: 90%;
    overflow-y:auto;
    font-size: 13px;
}

.tag {
    font-size: 12px;
}

.tag1 {
    margin-left: 180px;
    position: relative;
    top: -45%;
}

.tag2 {
    margin-left: 130px;
    position: relative;
    top: -45%;
}

.cas9 {
    margin-left: 6%;
}

.cas12 {
    margin-left: 3%;
}

.cas13 {
    margin-left: 3%;
}

.option-box {
    background: #C4F4E1;
    box-shadow: 0px 4px 4px 0px #00000040;
    width: 251px;
    height: 50px;
    border-radius: 18px;
}

.Go {
    border: none;
    width: 200px;
    height: 35px;
    position: relative;
    left: 45%;
    top: 2.5%;
    background: #6AD3DC;
    box-shadow: 0px 4px 4px 0px #00000040;
    color: white;
    border-radius: 30px;
    font-size: 18px;
    font-weight: bold;
    line-height: 28px;
    letter-spacing: 0.49em;
    text-align: center;
}

.Go:hover {
    background: rgb(174, 183, 226);
    font-size: 20px;
    cursor: pointer;
}

.clear {
    position: relative;
    top: -7px;
    left: 23%;
    width: 75px;
    padding-left: 19px;
    font-family: Arial Rounded MT Bold;
    font-size: 16px;
    line-height: 28px;
    letter-spacing: 0em;
    text-align: left;
    color: white;
    background: #5CD2C7;
    box-shadow: 0px 4px 4px 0px #00000040;
    border-radius: 30px;
    border: none;
}

.clear:hover {
    background: rgb(131, 177, 213);
    font-size: 16.5px;
    border: 0.5px solid #FFFFFF;
    box-shadow: 0px 4px 4px 0px #00000040;
    cursor: pointer;
}

.clear:active {
    background: rgb(131, 177, 213);
    font-size: 15px;
    border: 0.5px solid #FFFFFF;
    box-shadow: 0px 4px 4px 0px #00000040;
    cursor: pointer;
}

.hint1 {
    position: relative;
    top: -25%;
    left: 50%;
    font-size: 10px;
    width: 600px;
}

.hint2 {
    position: relative;
    top: -50%;
    left: 70%;
    font-size: 10px;
    width: 300px;
}

.icon {
    margin-left: 15px;
    margin-top: 10px;
}

.tag_title {
    position: relative;
    top: -5px;
    left: 8px;
    font-size: 14px;
}

.box_tag {
    position: relative;
    background: rgb(0, 172, 198);
    width: 16.5%;
    height: 17%;
    top: -8%;
    border-radius: 25px;
    color: white;
}

.box_tag2 {
    position: relative;
    background: rgb(0, 172, 198);
    width: 16.5%;
    height: 35%;
    top: -8%;
    border-radius: 25px;
    color: white;
}

.box1 {
    margin-top: 4%;
    background: #91E4DCB2;
    box-shadow: 0px 4px 4px 0px #00000040;
    width: 67%;
    margin-left: 17%;
    height: 250px;
    border-radius: 10px;
}

.box2 {
    margin-top: 2.5%;
    background: #91E4DCB2;
    box-shadow: 0px 4px 4px 0px #00000040;
    width: 67%;
    margin-left: 17%;
    height: 120px;
    border-radius: 10px;
}

.bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-image: url('../assets/bg3.jpg');
    background-size: cover;
}

.title {
    width: 23%;
    height: 23%;
    margin-left: 18%;
    margin-top: 11.5%;
}

.intro {
    margin-top: 11.5%;
    width: 45%;
    margin-left: 2%;
}

.show_box {
    background: #FFFFFF;
    margin-left: 5%;
    /*margin-top: 1%;*/
    width: 90%;
    height: 130px;
    border-radius: 26px;
}

input:focus {
    outline: none;
}

.filename {
    margin-left: 35%;
    position: relative;
    top: -5%;
}

.upload-but:hover {
    font-size: 17px;

}

.radio {
    margin-left: 5%;
    margin-top: 3%;
    color: black;
    font-weight: bold;
    line-height: 27.6px;
}

/*:deep(.el-radio__label) {*/
/*    color: rgb(0,172,198);*/
/*}*/
/*//修改选中label文字*/
:deep(.el-radio__input.is-checked + .el-radio__label) {
    color: rgb(1, 184, 211) !important;
}

/*//修改选中radio背景色、边框*/
:deep(.el-radio__input.is-checked .el-radio__inner) {
    background: rgb(1, 184, 211) !important;
    border-color: rgb(1, 184, 211) !important;
}

</style>

<script>
import axios from 'axios'
import {ElMessage} from 'element-plus'

export default {
    name: 'softwareSearch',
    data() {
        return {
            radio: 'cas9',
            file_content: '',
            filename: '',
        }
    },
    methods: {
        clear() {
            this.file_content = ''
            this.filename = ''
        },
        Go() {
            if(this.file_content === ''||this.file_content === undefined||this.file_content === null){
                ElMessage.error('Please upload fasta file')
                return
            }else {
                this.$router.push(
                    {
                        name: 'softwareProcess', query: {content: this.file_content, type: this.radio}
                    })
            }
        },
        uploadFile(item) {
            console.log(item);
            this.filename = item.name;
//将item变为可上传的formdata形式

            let formData = new FormData();
            formData.append('file', item.raw, item.name);

            axios({
                    url: 'https://tongji-software-igem2023.com/api/software/upload',
                    method: 'post',
                    data: formData,
                    headers: {
                        'Content-Type': 'multipart/form-data; boundary=--------------------------868167832119460521212429',
                    },
                }
            ).then(res => {
                console.log(res);
                if (res.data.status === true) {
                    ElMessage.success('success');
                    this.file_content = res.data.content;
                } else {
                    ElMessage.error('Please upload fasta file!');
                }
            }).catch(err => {
                console.log(err);
                ElMessage.error("connect error");
            })
        }
    }
}
</script>