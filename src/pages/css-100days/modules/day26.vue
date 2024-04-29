<template>
    <div class="frame">
        <div class="dialog" id="dialog1" data-num="1">
            <div class="dialog-title">The Step1</div>
            <div class="dialog-content">If you wang to grow,get outside your comfort zone.</div>
            <div class="dialog-action" id="action1">OK</div>
        </div>
        <div class="dialog fade-out" id="dialog2" data-num="2">
            <div class="dialog-title">The Step2</div>
            <div class="dialog-content">If you wang to grow,get outside your comfort zone.</div>
            <div class="dialog-action" id="action2">OK</div>
        </div>
        <div class="dialog fade-out" id="dialog3" data-num="3">
            <div class="dialog-title">The Step3</div>
            <div class="dialog-content">If you wang to grow,get outside your comfort zone.</div>
            <div class="dialog-action" id="action3">OK</div>
        </div>
    </div>
</template>
<script setup lang="ts">
onMounted(() => {
    const action1 = document.querySelector('#action1')
    const dialog1 = document.querySelector('#dialog1')
    const action2 = document.querySelector('#action2')
    const dialog2 = document.querySelector('#dialog2')
    const action3 = document.querySelector('#action3')
    const dialog3 = document.querySelector('#dialog3')
    action1 && action1.addEventListener('click', function () {
        dialog1?.classList.add('fade-out')
        setTimeout(() => {
            dialog2?.classList.remove('fade-out')
        }, 500)
    })
    action2 && action2.addEventListener('click', function () {
        dialog2?.classList.add('fade-out')
        setTimeout(() => {
            dialog3?.classList.remove('fade-out')
        }, 500)
    })
    action3 && action3.addEventListener('click', function () {
        dialog3?.classList.add('fade-out')
        setTimeout(() => {
            dialog1?.classList.remove('fade-out')
        }, 500)
    })

})

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
    background: #96a5ae;
    color: #333;
    font-family: 'Open Sans', Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.dialog {
    background: #fff;
    border-radius: 5px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transition: all 0.5s;
    z-index: 3;

    &::after {
        content: '';
        position: absolute;
        top: 0;
        right: 0;
        border-style: solid;
        border-width: 0 30px 30px 0;
        border-color: transparent #858585 transparent transparent;
        text-align: center;
    }

    &::before {
        content: attr(data-num);
        position: absolute;
        top: 1px;
        right: 4px;
        color: #fff;
        z-index: 1;
    }

    &.fade-out {
        z-index: 1;
    }

    &-title {
        padding: 15px;
        font-size: 18px;
        color: #333;
    }

    &-content {
        padding: 15px;
        line-height: 1.4;
        color: #96a5ae;
    }

    &-action {
        background: #2196f3;
        color: #fff;
        font-size: 16px;
        padding: 8px 0;
        cursor: pointer;
    }
}

.fade-out {
    transform: translate(-50%, -50%) scale(1.4);
    opacity: 0;
}
</style>