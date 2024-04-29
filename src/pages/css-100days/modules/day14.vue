<template>
  <div class="frame">
    <div class="scene">
        <div class="front">
            <img src="https://100dayscss.com/codepen/bycicle.svg" alt="" class="bycicle">
            <div class="route">
                <div class="route-item"></div>
                <div class="route-item"></div>
                <div class="route-item"></div>
                <div class="route-item"></div>
                <div class="route-item"></div>
                <div class="route-item"></div>
            </div>
        </div>
        <div class="back">
            I go to work by bike usually.
        </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
<style lang="scss" scoped>
@use "sass:math";
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
  background: #9e9e9e;
  color: #333;
  font-family: "Open Sans", Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.scene{
    position: relative;
    width: 80%;
    height: 200px;
    margin: 100px auto;
    &:hover{
        .front{
            transform: rotateY(180deg);
        }
        .back{
            transform: rotateY(0);
        }
    }
}
.front,.back{
    position: absolute;
    width: 100%;
    height: 200px;
    background: #ff7d00;
    border-radius: 5px;
    box-shadow: 0 3px 5px 0 rgba(0,0,0,0.6);
    padding-top: 50px;
    text-align: center;
    backface-visibility: hidden;
    transition: all 0.5s linear;
}
.back{
    transform: rotateY(180deg);
    color: #fff;
    font-size: 24px;
}
.bycicle{
    animation: ride 0.5s ease-in-out infinite alternate;
}
.route{
    width: 200px;
    margin: 20px auto;
    position: relative;
    &-item{
        height: 2px;
        background: #333;
        display: inline-block;
        position: absolute;
        right: -15px;
        top: 0;
        @for $i from 1 through 6{
            &:nth-child(#{$i}){
                width: 2+$i*2+px;
                animation: roadMove linear 1s math.div(random(6),6)+s infinite;
            }
        }
    }
}
.helicopter{
    font-size: 24px;
    letter-spacing: 2px;
}
@keyframes ride {
    0%{
        transform: scaleY(1);
    }
    100%{
        transform: scaleY(1.08);
    }
}
@keyframes roadMove {
    0%{
        right: -15px;
    }
    100%{
        right: 215px;
    }
}
</style>
