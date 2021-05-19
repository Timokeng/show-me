<template>
    <div class="skill">
        <div class="main">
            <div class="carousel box">
                <el-carousel trigger="click" :interval="0" height="300px" @change="onCarChange" ref="carousel">
                    <el-carousel-item v-for="(item, index) in contents" :key="index" :name="String(index)">
                        <div>{{item.title}}</div>
                    </el-carousel-item>
                </el-carousel>
            </div>
            <div class="article box">
                <el-collapse v-model="nativeName" accordion @change="onCollChange">
                    <el-collapse-item
                        v-for="(item, index) in contents"
                        :key="index"
                        :name="String(index)">
                        <template slot="title">
                            <div class="title">{{item.title}}</div>
                        </template>
                        <div class="content">{{item.content}}</div>
                    </el-collapse-item>
                </el-collapse>
            </div>
        </div>
    </div>
</template>

<script>
import api from '@/lib/api.js'

export default {
    created(){
        this.getSkill();
    },
    data: ()=>{
        return{
            nativeName: '0',
            contents: []
        }
    },
    methods: {
        onCarChange: function(newVal, oldVal){
            this.nativeName = String(newVal);
        },
        onCollChange: function(str){
            this.$refs.carousel.setActiveItem(str);
        },
        getSkill: async function(){
            let res = await api.getSkill();
            let data = undefined;
            if(res.data && res.data.code == '000'){
                data = res.data.data;
            }
            this.contents = data.contents? data.contents: [];
        }
    }
}
</script>

<style scoped lang="scss">
.skill{
    display: flex;
    justify-content: center;
    height: 100vh;
}

.main{
    min-width: 600px;
    width: 70%;
    height: 100%;
    margin: 20px;
}

.box{
    margin: 20px;
}

.carousel{
    margin-bottom: 5em;
}

.article{
    padding: 20px;

    .el-collapse{
        .title{
            font-size: 22px;
            margin: 10px 0;
        }
        .content{
            font-size: 18px;
        }
    }
}

.el-carousel__item div {
    text-align: center;
    color: #475669;
    font-size: 28px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
}
  
.el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
}
  
.el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
}
</style>