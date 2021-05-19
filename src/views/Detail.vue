<template>
    <div class="detail">
        <div class="main">
            <div class="title">本项目细节介绍</div>
            <div class="article">
                <div class="box">
                    <div class="title_1">Html + CSS + Js</div>
                    <div class="content">
                        <div>底层技术是最为基础的Html + CSS + Js的底层内容。</div>
                        <div>其中对于H5，CSS6，Js新特性都有一定的应有。</div>
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
                    <div class="title_1">ElementUI</div>
                    <div class="content">
                        <div>ElementUI作为较为成熟的视图框架，十分有利于高效开发。</div>
                        <div>在本项目中我大量使用了其中的布局功能和很多的视图插件，从而高效实现复杂的表现效果。</div>
                    </div>
                </div>
                <div class="box">
                    <div class="title_1">Mock</div>
                    <div class="content">
                        <div>Mock可以帮助开发者在无后端的情况下模拟真实的ajax请求，从而实现前后端分离开发。</div>
                        <div>简单说就是为本项目提供API，在我提前写好代码的情况下模拟后端反应。</div>
                        <div>本项目除了本页面是直接写进去的数据，其他页面均是模拟实际都前后端交互，通过ajax获取的数据。</div>
                    </div>
                </div>
                <div class="box">
                    <div class="title_1">axios</div>
                    <div class="content">
                        <div>通过Promise来实现ajax效果的框架。</div>
                        <div>传统的ajax代码是较为繁琐且容易逻辑混乱的，axios技术则以Promise为基础将之转化成更为简明的形式。</div>
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
                    margin-bottom: 0.5rem;
                    padding-left: 0.5rem;
                    text-indent: 1.5em;

                    &:last-child{
                        margin-bottom: 0;
                    }
                }
            }
        }
    }
}
</style>
