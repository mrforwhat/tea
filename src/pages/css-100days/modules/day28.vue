<template>
    <div class="frame">
        <div class="hand">🙏</div>
        <svg class="wave wave-1">
            <path d="M 30,10 C 30,10 0,50 30,90"></path>
        </svg>
        <svg class="wave wave-2">
            <path d="M 30,10 C 30,10 0,50 30,90"></path>
        </svg>
        <svg class="wave wave-3">
            <path d="M 30,10 C 30,10 0,50 30,90"></path>
        </svg>
        <svg class="wave right wave-4">
            <path d="M 30,10 C 30,10 0,50 30,90"></path>
        </svg>
        <svg class="wave right wave-5">
            <path d="M 30,10 C 30,10 0,50 30,90"></path>
        </svg>
        <svg class="wave right wave-6">
            <path d="M 30,10 C 30,10 0,50 30,90"></path>
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
    background: linear-gradient(to top right, #FDA231 0%, #FDCA31 100%);
    color: #333;
    font-family: 'Open Sans', Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.hand{
    width: 100px;
    height: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    text-align: center;
    line-height: 100px;
    font-size: 32px;
    animation: pray 2s infinite alternate;
}
.wave{
    width: 100px;
    height: 100px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-60%,-50%);
    stroke: #fff;
    stroke-width: 2px;
    fill: none;
    opacity: 0;
    &.right{
        transform: translate(-40%,-50%) rotate(180deg);  
    }
    &-1{
        animation: wave1 2s ease-out infinite both;
    }
    &-2{
        animation: wave2 2s ease-out  infinite both;
    }
    &-3{
        animation: wave3 2s ease-out  infinite both;
    }
    &-4{
        animation: wave4 2s ease-out infinite both;
    }
    &-5{
        animation: wave5 2s ease-out  infinite both;
    }
    &-6{
        animation: wave6 2s ease-out infinite both;
    }
}
@keyframes wave1 {
    70%{
        transform: translate(-60%,-50%);
        opacity: 1;
    }
    100%{
        transform: translate(-120%,-50%) scale(1.5);
        opacity: 0;
    }
}
@keyframes wave2 {
    0%,29%{
        opacity: 0;
    }
    30%{
        transform: translate(-60%,-50%);
        opacity: 1;
    }
    100%{
        transform: translate(-120%,-50%) scale(1.5);
        opacity: 0;
    }
}
@keyframes wave3 {
    0%,49%{
        opacity: 0;
    }
    50%{
        transform: translate(-60%,-50%);
        opacity: 1;
    }
    100%{
        transform: translate(-120%,-50%) scale(1.5);
        opacity: 0;
    }
}
@keyframes wave4 {
    70%{
        transform: translate(-40%,-50%) rotate(180deg);
        opacity: 1;
    }
    100%{
        transform: translate(20%,-50%) scale(1.5) rotate(180deg);
        opacity: 0;
    }
}
@keyframes wave5 {
    0%,29%{
        opacity: 0;
    }
    30%{
        transform: translate(-40%,-50%) rotate(180deg);
        opacity: 1;
    }
    100%{
        transform: translate(20%,-50%) scale(1.5) rotate(180deg);
        opacity: 0;
    }
}
@keyframes wave6 {
    0%,49%{
        opacity: 0;
    }
    50%{
        transform: translate(-40%,-50%)  rotate(180deg);
        opacity: 1;
    }
    100%{
        transform: translate(20%,-50%) scale(1.5)  rotate(180deg);
        opacity: 0;
    }
}
@keyframes pray {
    0%{
        transform: translate(-50%,-40%);
    } 
    100%{
        transform: translate(-50%,-60%) scale(1.2);
    }
}
</style>