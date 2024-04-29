<template>
    <el-row>
        <el-col>
            <el-button @click="recordBtn('首页')">首页</el-button>
        </el-col>
        <el-col>
            <el-button @click="recordBtn('历史')">历史</el-button>
        </el-col>
        <el-col>
            <el-button @click="recordBtn('分析')">分析</el-button>
        </el-col>
        <el-col>
            <el-button @click="recordBtn('我的')">我的</el-button>
        </el-col>
    </el-row>
    <dialog id="dialog">
        <div class="dialog">
            <div class="dialog-title" @click="close">哈哈哈</div>
            <div class="dialog-content">内容区域</div>
        </div>
    </dialog>
</template>

<script setup lang='ts'>
import LogEventEmitter from '@/utils/LogEventEmitter';
const dialogEl: HTMLDialogElement | null = document.querySelector('#dialog')
const recordBtn = (name: string) => {
    LogEventEmitter.trackInfo(name)
    if(name == '首页') {
        dialogEl?.showModal()
    }
}
const close = ()=> {
    dialogEl?.close()
}
</script>

<style lang="scss" scoped>
    dialog::backdrop {
         background: rgba(255,125,68,0.5)
    }
    dialog{
        padding: 0;
        border: 0;
    }
</style>