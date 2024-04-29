<template>
    <div class="frame">
        <input type="radio" checked id="check-1" name="indicator">
        <input type="radio" id="check-2" name="indicator">
        <input type="radio" id="check-3" name="indicator">
        <label for="check-1"></label>
        <label for="check-2" class="indicator2"></label>
        <label for="check-3" class="indicator3"></label>
        <div class="active"></div>
        <div class="swiper">
            <div class="swiper-item"></div>
            <div class="swiper-item"></div>
            <div class="swiper-item"></div>
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
    background: #fff;
    color: #333;
    font-family: 'Open Sans', Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

@for $i from 1 through 3 {
    #check-#{$i}:checked {
        &~.active {
            width: 25px;
            height: 25px;
            background: #fff;
            border-radius: 50%;
            position: absolute;
            z-index: 3;
            top: 187.5px;
            left: 127.5 + ($i - 1) * 71 + px;
            transition: all ease 0.5s;
        }

        &~.swiper {
            transform: translateX(#{($i - 1) * -400} + px);
        }

    }
}

label {
    position: absolute;
    display: inline-block;
    top: 180px;
    left: 120px;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    border: 2px solid #fff;
    z-index: 3;
    cursor: pointer;

    &.indicator2 {
        left: 190px;
    }

    &.indicator3 {
        left: 261px;
    }
}

input {
    display: none;
}

.swiper {
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    flex-wrap: nowrap;
    transition: all ease 0.5s;

    &-item {
        width: 400px;
        height: 100%;
        flex: 0 0 400px;

        &:nth-child(1) {
            background: red;
        }

        &:nth-child(2) {
            background: rgb(157, 255, 0);
        }

        &:nth-child(3) {
            background: rgb(0, 106, 255);
        }
    }
}
</style>