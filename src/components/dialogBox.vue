<template>
    <el-dialog custom-class="dialog" v-model="centerDialogVisible" title="Download" width="40%" height="30%" style="background-color: rgb(224,248,238);
">
        <img src="../assets/close.png" class="close_icon" style="width: 6%;height: 15%;"/>
        <span class="form-title">
      File Form：
    </span>
        <div class="mb-2 flex items-center text-sm">
            <el-radio-group v-model="radio" class="ml-4">
                <el-radio label="excel" size="large">excel</el-radio>
                <el-radio label="txt" size="large">txt</el-radio>
            </el-radio-group>
        </div>

        <template #footer>
      <span class="dialog-footer">
        <button class="dialog-button" @click="centerDialogVisible = false; outputFile()">yes</button>
          <button class="dialog-button" @click="centerDialogVisible = false">no</button>
      </span>
        </template>
    </el-dialog>
</template>
<script>
import {ElMessage} from "element-plus";
import axios from "axios";

export default {
    props: {
        virus_id_list: Array
    },
    data() {
        return {
            centerDialogVisible: false,
            radio: 'excel',
            jsonFile: []
        };
    },
    methods: {
        openDialog() {
            this.centerDialogVisible = true;
        },
        outputFile() {
            console.log("内部：")
            console.log(this.virus_id_list);
            console.log(this.radio);
            if (this.radio === 'excel') {
                //输出文件
                axios.get('/api/virusList-to-excel?virus_ids=' + this.virus_id_list,
                    {responseType: 'blob'}
                ).then((res) => {
                    // 将文件下载到本地
                    const blob = new Blob([res.data], {type: 'application/vnd.ms-excel;charset=utf-8'});
                    const downloadElement = document.createElement('a');
                    const href = window.URL.createObjectURL(blob); //创建下载的链接
                    downloadElement.href = href;
                    downloadElement.download = 'virusList.xlsx'; //下载后文件名
                    document.body.appendChild(downloadElement);
                    downloadElement.click(); //点击下载
                    document.body.removeChild(downloadElement); //下载完成移除元素
                    window.URL.revokeObjectURL(href); //释放掉blob对象
                    ElMessage({message: 'Download successfully', type: 'success'});
                    return;
                }).catch(err => {
                    console.log(err);
                    ElMessage({message: 'Download failed', type: 'error'});
                });
            }
            if (this.radio === 'txt') {
                //输出文件
                axios.get('/api/virusList-to-txt?virus_ids=' + this.virus_id_list,
                    {responseType: 'blob'}
                ).then((res) => {
                    // 将文件下载到本地
                    const blob = new Blob([res.data], {type: 'text/plain;charset=utf-8'});
                    const downloadElement = document.createElement('a');
                    const href = window.URL.createObjectURL(blob); //创建下载的链接
                    downloadElement.href = href;
                    downloadElement.download = 'virusList.txt'; //下载后文件名
                    document.body.appendChild(downloadElement);
                    downloadElement.click(); //点击下载
                    document.body.removeChild(downloadElement); //下载完成移除元素
                    window.URL.revokeObjectURL(href); //释放掉blob对象
                    ElMessage({message: 'Download successfully', type: 'success'});
                    return;
                }).catch(err => {
                    console.log(err);
                    ElMessage({message: 'Download failed', type: 'error'});
                });
            }
        }
    },

};
</script>

<style lang="scss">
.close_icon {
  position: absolute;
  top: 15px;
  right: 10px;
}

.dialog .el-dialog__header {
  background-color: rgb(85, 199, 187);
  margin: 0 0 0 0;
  box-shadow: 0px 4px 4px 0px #00000040;
  padding: 15px 20px 10px
}

.dialog .el-dialog__title {
  color: white;
  font-weight: bold;
}

.dialog .el-dialog__body {
  padding: 30px 25px 0px 25px;
}

.dialog-button {
  background-color: RGB(0, 192, 175);
  border: none;
  border-radius: 10px;
  color: white;
  text-align: center;
  font-weight: bold;
  font-size: large;
  margin-left: 15px;
  height: 30px;
  width: 100px;
  box-shadow: 0px 4px 4px 0px #00000040;
}

.form-title {
  font-family: Arial;
  font-size: 16px;
  font-weight: 400;
  text-align: left;
  color: black;
}
</style>

<style scoped>
button:hover {
    cursor: pointer;
    background-color: rgb(111, 171, 206);
    border: 1px white solid;
}

img:hover {
    cursor: pointer;
}
</style>