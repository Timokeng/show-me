<template>
    <div class="about-me">
        <div class="tab">
            <el-row :gutter="20">
                <el-col :span="6">
                    <div class="photo box">
                        <el-image 
                            style="width: 100%; height: 95%" 
                            :src="require('../assets/photo.jpg')" 
                            fit="contain">
                        </el-image>
                    </div>
                </el-col>
                <el-col :span="18">
                    <div class="basics box">
                        <el-row>
                            <el-col :span="12"><div class="content">姓名: {{basics.name}}</div></el-col>
                            <el-col :span="12"><div class="content">年龄: {{basics.age}}</div></el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="12"><div class="content">毕业学校: {{basics.school}}</div></el-col>
                            <el-col :span="12"><div class="content">所学专业: {{basics.major}}</div></el-col>
                        </el-row>
                        <el-row>
                            <el-col :span="12"><div class="content">毕业时间: {{basics.goTime}}</div></el-col>
                            <el-col :span="12"><div class="content">求职岗位: {{basics.job}}</div></el-col>
                        </el-row>
                    </div>
                </el-col>
            </el-row>
            <el-row v-for="(main,index) in mains" :key='index'>
                <div class="box">
                    <div class="title">
                        <i class="el-icon-s-cooperation"></i>
                        <span>{{main.title}}</span>
                    </div>
                    <div class="article">
                        <el-collapse v-model="activeNames">
                            <el-collapse-item
                                v-for="(item, index) in main.contents"
                                :key="index"
                                :title="item.title"
                                :name="String(index)">
                                <div>{{item.content}}</div>
                            </el-collapse-item>
                        </el-collapse>
                    </div>
                </div>
            </el-row>
        </div>
        <el-backtop target=".about-me">
            <i class="el-icon-caret-top"></i>
        </el-backtop>
    </div>
</template>

<script>
export default {
    created(){

    },
    data: ()=>{
        return {
            basics: {
                name: '李梓豪',
                age: '23',
                school: '昆明理工大学',
                major: '计算机科学与技术',
                goTime: '2019-7-1',
                job: '前端开发'
            },
            activeNames: [],
            mains: [
                {
                    title: '工作经历',
                    contents: [
                        {
                            title: '公司及岗位',
                            content: '工作内容'
                        },
                        {
                            title: '公司及岗位',
                            content: '工作内容'
                        },
                        {
                            title: '公司及岗位',
                            content: '工作内容'
                        },
                    ]
                },
                {
                    title: '技术水平',
                    contents: [
                        {
                            title: '技术名称',
                            content: '详细内容'
                        },
                        {
                            title: '技术名称',
                            content: '详细内容'
                        },
                        {
                            title: '技术名称',
                            content: '详细内容'
                        },
                    ]
                },
                {
                    title: '项目经验',
                    contents: [
                        {
                            title: '名称',
                            content: '内容'
                        },
                        {
                            title: '名称',
                            content: '内容'
                        },
                        {
                            title: '名称',
                            content: '内容'
                        },
                    ]
                },
            ]
        }
    }
}
</script>

<style scoped lang="scss">
.about-me{
    text-align: center;
    display: flex;
    justify-content: center;
}

.tab{
    width: 700px;
    min-height: 500px;
    border: 1px black solid;
    margin: 20px;
    padding: 20px;
}

.el-row{
    margin-bottom: 20px;

    &:last-child{
        margin-bottom: 0;
    }

    .box{
        .title{
            text-align: left;
            padding: 10px;
            font-size: 1.1em;

            span{
                margin-left: 5px;
            }
        }
        .article{
            text-align: left;
            padding: 10px;
        }
    }

    .photo{
        height: 200px;
    }

    .basics{
        height: 200px;
        text-align: left;

        .content{
            padding: 5px 10px;
        }

        .el-row{
            margin-bottom: 25px;

            &:last-child{
                margin-bottom: 0;
            }
            &:first-child{
                margin-top: 25px;
            }
        }
    }
}
</style>
