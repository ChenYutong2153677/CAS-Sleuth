<template>
  hi
</template>

<script>
export default {
  name: 'databaseResult',
  data() {
    return {
      input: '',
    }
  },
  created() {
    this.input = this.$route.query.input;
    console.log("new page:"+this.input);
  }
}
</script>

