<template>
  <div class="user">
    <div class="userinfo" @click='login'>
      <img :src="userinfo.avatar" alt="用户头像">
      <p>{{userinfo.nickName}}</p>
    </div>
    <p>1234567890</p>
  </div>
</template>
<script>
  export default {
    data () {
      return {
        userinfo: {
          avatar: '../../../static/img/unlogin.png',
          nickName: 'sup'
        }
      }
    },
    methods: {
      login () {
        console.log('去登陆')
      }
    },
    created () {},
    mounted () {
    }
  }
</script>
<style scoped lang='scss'>
.user {
  .userinfo {
    text-align: center;
    img {
      width: 200rpx;
      height: 200rpx;
      border-radius: 100%;
    }
  }
}
</style>