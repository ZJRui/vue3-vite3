<template>
    <div>home</div>
</template>
<script>
import User from '@/api/user';

export default {
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async login() {
      const res = await User.login(this.username, this.password);
      console.log(res);
    },
  },
};
</script>
<style lang="less" scoped>
</style>