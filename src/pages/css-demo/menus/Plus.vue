<template>
<div class="page" flex="main-cross:center">
    <div class="plus" :class="{'active': active}" @click="active=!active">
        <div class="plus-h "></div>
        <div class="plus-v menu" flex="main:around cross:center">
            <div class="menu-item">
                <img src="@/assets/svg/menus/UiwWeixin.svg" alt="" >
            </div>
            <div class="menu-item">
                <img src="@/assets/svg/menus/UiwQq.svg" alt="" >
            </div>
            <div class="menu-item">
                <img src="@/assets/svg/menus/UiwWeibo.svg" alt="" >
            </div>
            <div class="menu-item">
                <img src="@/assets/svg/menus/UiwGithub.svg" alt="" >
            </div>
        </div>
    </div>
</div>
</template>
<script setup lang="ts">
    const active = ref(false)
</script>
<style lang="scss" scoped>
    .page{
        width: 100%;
        height: 100vh;
        background: linear-gradient(to top, #ffafbd, #ffc3a0);
    }
    .plus{
        width: 80px;
        height: 80px;
        border-radius: 50%;
        background-color: #FF3399;
        position: relative;
        box-shadow: 0 0 10px 0 rgba(0,0,0,0.48);
        transition: all ease-in-out 0.3s;
        &.active{
            border-radius: 30px;
            height: 30px;
            .plus-v{
               width: 300px; 
               height: 60px;   
               border-radius: 30px;
               padding: 0 20px;
               transform: translate(-50%,-200%);
               box-shadow: 0 0 5px 0 rgba(0,0,0,.3);
            }
            .menu-item{
                transform: scale(1);
                opacity: 1;
            }
        }
        &-h{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            width: 60%;
            height: 6px;
            border-radius: 5px;
            background: #fff;
        }
        &-v{
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
            width: 6px;
            height: 60%;
            border-radius: 5px;
            background: #fff;
            transition: all ease-in-out 0.3s 0.3s;
            overflow: hidden;
            z-index: 1;
        }
    }
    .menu{
        &-item{
            width: 40px;
            height: 40px;
            flex: 0 0 40px;
            transform: scale(0.1);
            opacity: 0;
            transition: all ease-in 0.3s;
        }
        img{
           width: 100%;
        }
    }
</style>