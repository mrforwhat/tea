<template>
    <div class="frame">
        <div class="title">YOUR DAILY</div>
        <div class="sub-title">PROGRESS</div>
        <div class="kcal">
            <div class="kcal-val">3000</div>
            <div class="kcal-label">kcal</div>
            <svg>
                <circle class="bg" cx="55" cy="55" r="50"></circle>
                <circle class="progress" cx="55" cy="55" r="50"></circle>
            </svg>
        </div>
        <div class="other">
            <div class="steps">
                <div class="kcal-val">8000</div>
                <div class="kcal-label">steps</div>
                <svg>
                    <circle class="bg" cx="55" cy="55" r="50"></circle>
                    <circle class="progress" cx="55" cy="55" r="50"></circle>
                </svg>
            </div>
            <div class="km">
                <div class="kcal-val">6.2</div>
                <div class="kcal-label">km</div>
                <svg>
                    <circle class="bg" cx="55" cy="55" r="50"></circle>
                    <circle class="progress" cx="55" cy="55" r="50"></circle>
                </svg>
            </div>

        </div>
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
    background: #596471;
    color: #333;
    font-family: 'Open Sans', Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding-top: 50px;
    text-align: center;
}

.title {
    font-size: 16px;
    color: #fff;
}

.sub-title {
    font-size: 19px;
    font-weight: bold;
    color: #fff;
}

.kcal {
    width: 110px;
    height: 110px;
    margin: 10px auto;
    position: relative;

    &-val {
        position: absolute;
        top: 30px;
        color: #fff;
        font-size: 16px;
        font-weight: bold;
        text-align: center;
        left: 0;
        right: 0;
    }

    &-label {
        position: absolute;
        top: 50px;
        color: #c7c7c7;
        text-align: center;
        left: 0;
        right: 0;
    }

    svg {
        fill: transparent;
        width: 100%;
        height: 100%;
    }
}

.bg {
    stroke: #333;
    stroke-width: 10px;
}

.progress {
    stroke: #1bc0b9;
    stroke-width: 10px;
    stroke-dasharray: 314;
    stroke-dashoffset: 314;
    transform: rotate(-90deg);
    transform-origin: center;
    stroke-linecap: round;
    animation: progress1 1s ease-in forwards;
}

.other{
    display: flex;
    margin: 10px auto;
    width: 300px;
    justify-content: space-around;
    transform: scale(0.8);
}
.steps,.km{
    width: 110px;
    height: 110px;
    position: relative;
    svg {
        fill: transparent;
        width: 100%;
        height: 100%;
    }
}
.steps{
    .progress{
        animation: progress2 1.5s ease-in forwards;
    }
}
.km{
    .progress{
        animation: progress3 0.8s ease-in forwards;
    }
}
@keyframes progress1 {
    0% {
        stroke-dashoffset: 314;
    }

    100% {
        stroke-dashoffset: 100;
    }
}
@keyframes progress2 {
    0% {
        stroke-dashoffset: 314;
    }

    100% {
        stroke-dashoffset: 50;
    }
}

@keyframes progress3 {
    0% {
        stroke-dashoffset: 314;
    }

    100% {
        stroke-dashoffset: 120;
    }
}

</style>