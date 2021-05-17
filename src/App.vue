<template>
  <div id="app">
    <el-row class="main">
      <el-col :span="4" class="left">
        <el-menu
          :default-active='path'
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
        <el-scrollbar wrap-style="overflow-x:hidden;">
          <router-view/>
        </el-scrollbar>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data: ()=>{
    return {
      path: '/'
    }
  },
  methods:{
    handleOpen: function(key, keyPath){
      console.log(key, keyPath)
    },
    handleClose: function(key, keyPath){
      console.log(key,keyPath)
    },
    onRouteChange: function(){
      this.path = this.$route.path
    }
  },
  watch: {
    '$route': 'onRouteChange'
  }
}
</script>


<style scoped lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100vh;
}

.el-menu-vertical{
  text-align: left;
  padding: 20px 5px 0 5px;
  border: 0;
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
    padding: 10px;
  }
}

.el-scrollbar{
  height: 100%;
}
</style>
