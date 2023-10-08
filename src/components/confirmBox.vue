<template>
  <el-dialog custom-class="dialog" v-model="centerDialogVisible" title="Warning" width="40%" height="30%" style="background-color: #E0F8EE;">
      <img src="../assets/close.png" class="close_icon" style="width: 6%; height: 15%;"/>
      <span class="form-title">
        There is <b>NO CORRESPONDING RESULT</b> for this protein!
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
background-color: #55C7BB;
margin: 0;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
padding: 15px 20px;
}

.dialog .el-dialog__title {
color: white;
font-weight: bold;
}

.dialog .el-dialog__body {
padding: 30px 25px 0;
}

.dialog-button {
background-color: #00C0AF;
border: none;
border-radius: 10px;
color: white;
text-align: center;
font-weight: bold;
font-size: 1rem;
margin-left: 15px;
height: 30px;
width: 100px;
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}

.form-title {
font-family: 'Arial', sans-serif;
font-size: 1rem;
font-weight: normal;
text-align: left;
color: #333;
}
</style>

<style scoped>
button:hover {
  cursor: pointer;
  background-color: #6FABCE;
  border: 1px solid white;
}

img:hover {
  cursor: pointer;
}
</style>
