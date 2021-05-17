<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" class="logo"/>
    <div class="article">
      <div @click="go('/about-me')" @mouseover="open(0)" class="click">我希望通过这个项目介绍自己并展示一定的编程能力</div>
      <div @click="go('/skill')" @mouseover="open(1)" class="click">这是一个简单的前端项目，其内容不算很丰富，但技术栈的使用还算全面</div>
      <div @click="go('/detail')" @mouseover="open(2)" class="click">我使用了 Vue全家桶+ElenmentUI 的组合来完成本项目</div>
      <div>相关详细信息可以到各个具体页面了解</div>
    </div>
  </div>
</template>

<script>
export default {
  data: ()=>{
    return {
      ifOpen: [false, false, false]
    }
  },
  methods: {
    go: function(str){
      this.$router.push(str)
    },
    open: function(index){
      if(this.ifOpen[index]){
        return
      }

      let that = this;
      let mes;
      if(index == 0){
        mes = '点击可了解我的个人信息' 
      }else if(index == 1){
        mes = '点击可了解我的技术栈'
      }else{
        mes = '点击可了解本项目的具体细节'
      }
      this.$notify.info({
        title: '提示',
        message: mes,
      });
      this.ifOpen[index] = true;
      setTimeout(function(){
         that.ifOpen[index] = false;
      }, 4500)
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
}

.logo{
  margin: 20px 20px 60px 20px;
}

.article{
  font-size: 24px;

  div{
    padding: 10px;
    margin-bottom: 14px;
    cursor: default;

    &:last-child{
      margin: 0;
    }
  }

  .click{
    cursor: pointer;

    &:hover{
      color: #ffd04b;
      background-color: #545c64;
      border-radius: 8px;
    }
  }
}
</style>
