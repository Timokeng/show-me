<template>
  <div class="home">
    <div class="main">
      <img alt="Vue logo" src="../assets/logo.png" class="logo"/>
      <div class="article">
        <div @click="go('/about-me')" @mouseover="setTime(0)" @mouseout="clearTime(0)" class="click">我希望通过这个项目介绍自己并展示一定的编程能力</div>
        <div @click="go('/skill')" @mouseover="setTime(1)" @mouseout="clearTime(1)" class="click">这是一个简单的前端项目，其内容不算很丰富，但技术栈的使用还算全面</div>
        <div @click="go('/detail')" @mouseover="setTime(2)" @mouseout="clearTime(2)" class="click">我使用了 Vue全家桶+ElenmentUI 的组合来完成本项目</div>
        <div class="bottom">相关详细信息可以到各个具体页面了解</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: ()=>{
    return {
      ifOpen: [true, true, true],
      hoverTime:[]
    }
  },
  methods: {
    go: function(str){
      this.$router.push(str)
    },
    setTime(index){
      let that = this;
      this.hoverTime[index] = setTimeout(function(){
        that.hoverTime[index] = null;
        that.open(index);
      },1500);
    },
    clearTime(index){
      if(this.hoverTime[index]){
        clearTimeout(this.hoverTime[index]);
        this.hoverTime[index] = null;
      }
    },
    open: function(index){
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
    }
  }
}
</script>

<style scoped lang="scss">
.home{
  display: flex;
  justify-content: center;
}

.main{
  width: 80%;
  min-width: 600px;
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

  .bottom{
    text-decoration: underline;
  }
}
</style>
