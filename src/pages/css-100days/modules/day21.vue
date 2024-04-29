<template>
    <div class="frame">
        <div class="center">
            <svg class="face">
                <circle cx="100" cy="100" r="50"></circle>
            </svg>
            <svg class="eye">
                <circle cx="10" cy="10" r="10"></circle>
            </svg>
        </div>
        <svg class="ball">
            <polyline points="0,10 200,10"></polyline>
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
    background: #333;
    color: #333;
    font-family: 'Open Sans', Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    filter: contrast(17);
}

.center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
}

.face {
    width: 200px;
    height: 200px;
    stroke-width: 100px;
    stroke: yellow;
    stroke-dasharray: 314;
    stroke-dashoffset: 0;
    fill: transparent;
    animation: eat 1s ease-in-out infinite;
    filter: blur(8px);
}

.eye {
    width: 20px;
    height: 20px;
    fill: #333;
    position: absolute;
    top: 30px;
    left: 100px;
    animation: dance 1s ease-in-out infinite alternate;
    transform-origin: 20px 20px;
    filter: blur(2px);
}

.ball {
    width: 200px;
    height: 20px;
    position: absolute;
    top: 192px;
    right: 0;
    stroke: yellow;
    stroke-dasharray: 0 50;
    stroke-width: 20px;
    stroke-linecap: round;
    animation: feed 1s ease-in-out infinite;
    filter: blur(2px);
}

@keyframes eat {
    0% {
        stroke-dashoffset: 0;
    }

    40% {
        transform: rotate(45deg);
        stroke-dashoffset: 65;
    }

    100% {
        stroke-dashoffset: 0;
    }
}

@keyframes dance {

    0%,
    100% {
        transform: rotate(60deg);
    }

    40% {
        transform: rotate(0deg);
    }
}

@keyframes smile {

    0%,
    100% {
        filter: blur(5px);
    }

    40% {
        filter: blur(10px);
    }
}

@keyframes feed {
    0% {
        stroke-dashoffset: 0;
    }

    100% {
        stroke-dashoffset: 50;
    }
}</style>