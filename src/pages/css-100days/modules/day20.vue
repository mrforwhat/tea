<template>
    <div class="frame">
        <input type="checkbox" id="action">
        <label for="action" class="action send">send</label>
        <label for="action" class="action reset">reset</label>
        <div class="circle"></div>
        <div class="circle-ring"></div>
        <svg class="icon mail">
            <polyline points="119,1 119,69 1,69 1,1"></polyline>
            <polyline points="1,1 119,1 60,35 1,1"></polyline>
        </svg>
        <svg class="icon plane">
            <polyline points="119,1 100,90 1,70 119,1"></polyline>
            <polyline points="119,1 40,80 43,119 75,85"></polyline>
        </svg>
    </div>
</template>
<script setup lang="ts">

</script>
<style lang="scss" scoped>
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
    background: #393939;
    color: #333;
    font-family: 'Open Sans', Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}


.circle {
    position: absolute;
    width: 200px;
    height: 200px;
    background: #5f5f66;
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}
.circle-ring{
    @extend .circle;
    background: transparent;
    border: 5px solid #5f5f66;
}
.icon{
    position: absolute;
    z-index: 2;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    fill: none;
    stroke: #fff;
    stroke-width: 2px;
    &.mail{
        width: 120px;
        height: 70px;
        stroke-dasharray: 255;
        stroke-dashoffset: 0;
    }
    &.plane{
        width: 120px;
        height: 120px;
        stroke-dasharray: 329;
        stroke-dashoffset: 329;
    }
}
.action{
    position: absolute;
    bottom: 10px;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px 50px;
    background: #fff;
    border-radius: 20px;
    transition: all ease 0.5s;
    cursor: pointer;
    &:hover{
        background: orange;
        color: #fff;
    }
    &.send{
     
    }
    &.reset{
       opacity: 0;
       z-index: 10;
    }
}
input{
    display: none;
    &:checked ~ .send{
        animation: actionOut 1s ease-in-out forwards;
    }
    &:checked ~ .reset{
        animation: actionIn 0.5s 1s ease-in-out forwards;
    }
    &:checked ~ .circle{
        animation: fadeOut 1s ease-in-out forwards;
    }
    &:checked ~ .circle-ring{
        animation: fadeOut 0.8s 0.3s ease-in-out forwards;
    }
    &:checked ~ .mail{
        animation: mailDisappear 1s 0.3s ease-in-out forwards;
    }
    &:checked ~ .plane{
        animation: planeAppear 1.2s 1.3s ease-in-out forwards;
    }
}
@keyframes fadeOut {
    0%{
        transform: translate(-50%, -50%) scale(1.2);
    }
    100%{
        transform: translate(-50%, -50%) scale(0);
    }
}
@keyframes mailDisappear {
    0%{
        stroke-dashoffset: 0;
    }
    100%{
        stroke-dashoffset: 255;
    }
}
@keyframes planeAppear {
    0%{
        stroke-dashoffset: 329;
    }
    50%{
        stroke-dashoffset: 0;
    }
    100%{
        stroke-dashoffset: 0;
        transform: translate(100px,-100px);
        opacity: 0;
    }
}
@keyframes actionOut {
    0%{
        padding: 10px 50px;
    }
    50%{
        padding: 10px;
    }
    60%{
        padding: 10px;
        transform: translateX(-50%) scale(1.1);
    }
    70%{
        padding: 10px;
        transform: translateX(-50%) scale(1.2);
    }
    100%{
        padding: 10px;
        color: transparent;
        transform: translateX(-50%) scale(0);
    }
}
@keyframes actionIn{
    0%{
       opacity: 0;
    }
    100%{
        opacity: 1;
    }
}
</style>