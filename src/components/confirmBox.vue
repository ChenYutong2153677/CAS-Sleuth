<template>
  <link
    href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;700&display=swap"
    rel="stylesheet"
  />
  <el-dialog
    custom-class="dialog"
    v-model="centerDialogVisible"
    title="Warning"
    width="40%"
    height="30%"
    style="background-color: rgb(194, 203, 234); border-radius: 10px"
  >
    <img class="warning-icon" src="../assets/ConfirmBox.png" alt="Warning">
    <br>
    <span class="form-title">
      There is <b>NO CORRESPONDING RESULT</b> for this protein!
    </span>

    <template #footer>
      <span class="dialog-footer">
        <button class="dialog-button" @click="centerDialogVisible = false">
          got it
        </button>
      </span>
    </template>
  </el-dialog>
</template>


<script>
export default {
  props: {
    virus_id_list: Array,
    virus_name: String,
  },
  data() {
    return {
      centerDialogVisible: false,
      radio: "selected",
      jsonFile: [],
    };
  },
  methods: {
    openDialog() {
      this.centerDialogVisible = true;
    },
  },
};
</script>

<style lang="scss" scoped>
.close_icon {
  position: absolute;
  top: 15px;
  right: 10px;
}

.dialog .el-dialog__header {
  background-color: rgb(56, 79, 185);
  margin: 0;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  padding: 15px 20px;
}

.dialog .el-dialog__title {
  color: white;
  font-weight: 700;
  font-family: "Roboto", sans-serif;
  letter-spacing: 0.5px;
}

.dialog .el-dialog__body {
  display: flex; // 设置为flex布局
  align-items: center; // 垂直居中子元素
  padding: 30px 25px 0;
}

.warning-icon {
  margin-right: 20px; // 在图片和文本之间添加间距
  height: 100px; // 或您想要的其他尺寸
  width: 200px; // 或您想要的其他尺寸
}


.dialog-button {
  background-color: rgb(56, 79, 185);
  border: none;
  border-radius: 10px;
  color: white;
  text-align: center;
  font-weight: 500;
  font-family: "Roboto", sans-serif;
  font-size: 1.1rem;
  margin-left: 15px;
  height: 35px;
  width: 110px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  transition: background-color 0.3s ease;
}

.form-title {
  font-family: "Roboto", sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
  text-align: left;
  color: #333;
  margin-bottom: 15px;
}

button:hover {
  cursor: pointer;
  background-color: rgb(37, 52, 121);
  border: 1px solid white;
}

img:hover {
  cursor: pointer;
}
</style>
