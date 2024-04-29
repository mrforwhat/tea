<template>
  <div class="frame">
    <div class="box">
        <div class="box-item">
            <img src="https://100dayscss.com/codepen/13-1.jpg" alt="" >
            <div class="plus" @click="openProfile"></div>
        </div>
        <div class="box-item">
            <img src="https://100dayscss.com/codepen/13-2.jpg" alt="" >
            <div class="plus" @click="openProfile"></div>
        </div>
        <div class="box-item">
            <img src="https://100dayscss.com/codepen/13-3.jpg" alt="" >
            <div class="plus" @click="openProfile"></div>
        </div>
        <div class="box-item">
            <img src="https://100dayscss.com/codepen/13-4.jpg" alt="" >
            <div class="plus" @click="openProfile"></div>
        </div>
    </div>
    <div class="profile" :class="{'active': active}">
        <div class="close" @click="active=false"></div>
        <img src="https://100dayscss.com/codepen/13-1-header.jpg" alt="" class="profile-header">
        <img src="https://100dayscss.com/codepen/13-1.jpg" alt="avatar loading" class="avatar">
        <div class="profile-footer">
            <div class="profile-name">Julia Toth</div>
            <div class="action">
                <div class="action-item heart"></div>
                <div class="action-item phone"></div>
                <div class="action-item message"></div>
            </div>
        </div>
    </div>
  </div>
</template>
<script setup lang="ts">
    const active = ref(false)
    const openProfile = ()=>{
        active.value = true
    }
</script>
<style lang="scss" scoped>
@import url(https://fonts.googleapis.com/css?family=Open+Sans:600);
.frame {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  height: 400px;
  margin-top: -200px;
  margin-left: -200px;
  border-radius: 2px;
  box-shadow: 4px 8px 16px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;
  background: #fff;
  color: #333;
  font-family: "Open Sans", Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.box{
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    &-item{
        position: relative;
        width: 194px;
        height: 194px;
        flex: 0 0 194px;
        margin: 4px 0 0 4px;
        transition: filter ease-in-out 0.3s;
        cursor: pointer;
        img{
            width: 100%;
            height: 100%;
        }
        &:hover{
            img{
                filter: brightness(0.7) blur(2px);
            }
            .plus{
                opacity: 1;
                transform: translate(-50%,-50%) scale(1);
            }
        }

    }
}
.plus{
    width: 50px;
    height: 50px;
    background: #f35730;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%) scale(1.5);
    transition: all ease-in-out 0.3s;
    opacity: 0;
    &::before{
        content: '';
        width: 30px;
        height: 3px;
        background: #fff;
        border-radius: 5px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
    &::after{
        content: '';
        width: 3px;
        height: 30px;
        background: #fff;
        border-radius: 5px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%);
    }
}
.profile{
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 100;
    font-size: 0;
    pointer-events: none;
    &.active{
        pointer-events: all;
        .close{
            top: 20px;
        }
        .profile-footer{
            transform: translateY(0);
        }
        .profile-header{
            transform: translateY(0);
        }
        .avatar{
            transform: translate(-50%,-50%);
        }
    }
    &-header{
        width: 100%;
        height: 180px;
        transform: translateY(-180px);
        transition: all ease-in-out 0.3s;
    }
    &-footer{
        background: #f35730;
        height: 220px;
        text-align: center;
        padding-top: 80px;
        transform: translateY(220px);
        transition: all 0.3s ease-in-out;
    }
    &-name{
        font-size: 20px;
        color: #fff;
    }
}
.avatar{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 3px solid #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-300%);
    transition:  all ease-in-out 0.5s;
    z-index: 1
}
.action{
    margin: 20px auto;
    &-item{
        position: relative;
        display: inline-block;
        width: 40px;
        height: 40px;
        margin: 0 15px;
        color: #fff;
        border: 1px solid #fff;
        border-radius: 50%;
        &::before{
            font-size: 24px;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%,-50%);
        }
        &.heart{
            &::before{
                content: '❤';
            }
        }
        &.phone{
            &::before{
                content: '\260E';
            }
        }
        &.message{
            &::before{
                content: '\2709';
            }
        }
    }
}

.close{
    width: 50px;
    height: 50px;
    background: #f35730;
    border-radius: 50%;
    position: absolute;
    top: -50px;
    right: 20px;
    transition: all ease-in-out 0.3s;
    z-index: 1;
    &:hover{
        background: #fff;
        &::before,&::after{
            background: #f35730;
        }
    }
    
    &::before{
        content: '';
        width: 20px;
        height: 3px;
        background: #fff;
        border-radius: 2px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%) rotate(-45deg);
    }
    &::after{
        content: '';
        width: 3px;
        height: 20px;
        background: #fff;
        border-radius: 2px;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%,-50%) rotate(135deg);
    }
}
</style>





