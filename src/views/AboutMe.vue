<template>
    <div class="about-me">
        <div class="tab">
            <el-row :gutter="20">
                <el-col :span="6">
                    <div class="photo box">
                        <el-image 
                            style="width: 100%; height: 100%" 
                            :src="require('../assets/photo.jpg')" 
                            fit="contain">
                        </el-image>
                    </div>
                </el-col>
                <el-col :span="18">
                    <div class="basics box"></div>
                </el-col>
            </el-row>
            <el-row>
                <div class="skill box"></div>
            </el-row>
            <el-row>
                <div class="work box"></div>
            </el-row>
            <el-row>
                <div class="project box"></div>
            </el-row>
        </div>
        <el-backtop target=".about-me">
            <i class="el-icon-caret-top"></i>
        </el-backtop>
    </div>
</template>

<script>
export default {

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
        border: solid 1px black;
    }

    .photo{
        height: 200px;
    }

    .basics{
        height: 200px;
    }

    .skill{
        min-height: 200px;
    }

    .work{
        min-height: 200px;
    }

    .project{
        min-height: 200px;
    }
}
</style>
