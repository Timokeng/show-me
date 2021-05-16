<template>
  <div id="app">
    <el-row class="main">
      <el-col :span="4" class="left">
        <el-menu
          default-active='/'
          class='el-menu-vertical'
          @open='handleOpen'
          @close='handleClose'
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          router>
          <el-menu-item index="/">
            <i class="el-icon-menu"></i>
            <span slot="title">Home</span>
          </el-menu-item>
          <el-menu-item index="/about">
            <i class="el-icon-menu"></i>
            <span solt="title">About</span>
          </el-menu-item>
          <el-menu-item index="/about-me">
            <i class="el-icon-menu"></i>
            <span solt="title">AboutMe</span>
          </el-menu-item>
          <el-menu-item index="/skill">
            <i class="el-icon-menu"></i>
            <span solt="title">Skill</span>
          </el-menu-item>
          <el-menu-item index="/detail">
            <i class="el-icon-menu"></i>
            <span solt="title">Detail</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="20" class="right">
        <router-view/>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  methods:{
    handleOpen: function(key, keyPath){
      console.log(key, keyPath)
    },
    handleClose: function(key, keyPath){
      console.log(key,keyPath)
    }
  }
}
</script>


<style scoped lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100vh;
}

.el-menu-vertical{
  text-align: left;
  padding: 10px;
}

.main{
  height: 100%;
  min-height: 500px;
  min-width: 1000px;

  .left{
    background-color: #545c64;
    height: 100%;
  }

  .right{
    height: 100%;
  }
}
</style>
