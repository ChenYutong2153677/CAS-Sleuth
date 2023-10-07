<template>
    <el-dialog custom-class="dialog" v-model="centerDialogVisible" title="Warning" width="40%" height="30%" style="background-color: rgb(224,248,238);
">
        <img src="../assets/close.png" class="close_icon" style="width: 6%;height: 15%;"/>
        <span class="form-title">
      没有该种蛋白对应结果！
    </span>

        <template #footer>
      <span class="dialog-footer">
          <button class="dialog-button" @click="centerDialogVisible = false">确认</button>
      </span>
        </template>
    </el-dialog>
</template>
<script>

export default {
    props: {
        virus_id_list: Array,
        virus_name: String
    },
    data() {
        return {
            centerDialogVisible: false,
            radio: 'selected',
            jsonFile: []
        };
    },
    methods: {
        openDialog() {
            this.centerDialogVisible = true;
        },
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