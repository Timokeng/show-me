<template>
    <div class="detail">
        <div class="main">
            <div class="title">本项目细节介绍</div>
            <div class="article">
                <div class="box">
                    <div class="title_1">Vue</div>
                    <div class="content">
                        <div>通过 vue-cli + router + webpack 搭建的项目基础框架。</div>
                        <div>相对来说基础的框架实现较为普通，但较为稳定且高效，并且能保证高效开发。</div>
                    </div>
                </div>
                <div class="box">
                    <div class="title_1">Vue</div>
                    <div class="content">
                        <div>通过 vue-cli + router + webpack 搭建的项目基础框架。</div>
                        <div>相对来说基础的框架实现较为普通，但较为稳定且高效，并且能保证高效开发。</div>
                    </div>
                </div>
                <div class="box">
                    <div class="title_1">Vue</div>
                    <div class="content">
                        <div>通过 vue-cli + router + webpack 搭建的项目基础框架。</div>
                        <div>相对来说基础的框架实现较为普通，但较为稳定且高效，并且能保证高效开发。</div>
                    </div>
                </div>
                <div class="box">
                    <div class="title_1">Vue</div>
                    <div class="content">
                        <div>通过 vue-cli + router + webpack 搭建的项目基础框架。</div>
                        <div>相对来说基础的框架实现较为普通，但较为稳定且高效，并且能保证高效开发。</div>
                    </div>
                </div>
                <div class="box">
                    <div class="title_1">Vue</div>
                    <div class="content">
                        <div>通过 vue-cli + router + webpack 搭建的项目基础框架。</div>
                        <div>相对来说基础的框架实现较为普通，但较为稳定且高效，并且能保证高效开发。</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="scss">
.detail{
    display: flex;
    justify-content: center;
}

.main{
    min-width: 600px;
    width: 55%;
    height: 100vh;
    margin: 30px;
    padding: 10px;

    .title{
        text-align: center;
        font-size: 28px;
        margin-bottom: 40px;
    }

    .article{
        .box{
            margin-bottom: 1rem;
            padding: 1rem 1rem 2rem 1rem;
            border-bottom: solid 1px #534d4d;

            &:last-child{
                margin-bottom: 0;
                border: 0;
            }

            .title_1{
                font-size: 1.5rem;
                margin-bottom: 0.5rem;
            }

            .content{
                font-size: 1.1rem;

                div{
                    margin-bottom: 0.3rem;
                    padding-left: 1rem;

                    &:last-child{
                        margin-bottom: 0;
                    }
                }
            }
        }
    }
}
</style>
