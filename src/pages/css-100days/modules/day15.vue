<template>
  <div class="frame">
    <div class="upload">
      <div class="upload-title">Drop File to upload</div>
      <div class="upload-progress" :class="{'uploading': uploading}"></div>
      <div class="upload-body">
        <div
          class="upload-content"
          @dragover="dragOver"
          @drop="drop"
          @dragleave="dragLeave"
          :class="{ active: active }"
        >
          <input type="file" @change="changeFile" />
          <span v-if="fileName">{{ fileName }}</span>
          <img v-else src="https://100dayscss.com/codepen/upload.svg" alt="" />
        </div>
      </div>
      <div class="upload-action" @click="upload">Upload</div>
    </div>
  </div>
</template>
<script setup lang="ts">
const active = ref(false);
const fileName = ref("");
const uploading = ref(false)
const dragOver = () => {
  active.value = true;
};
const dragLeave = () => {
  active.value = false;
};
const drop = (e:any) => {
  active.value = false;
  fileName.value = e.dataTransfer.files[0].name;
};
const changeFile = (e:any)=>{
    if(e.target.files[0]) {
        fileName.value = e.target.files[0].name;
    }
}
const upload = ()=>{
    if(fileName) {
        uploading.value = true
    }
}
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
  background: linear-gradient(to right, #f12711, #f5af19);
  color: #333;
  font-family: "Open Sans", Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.upload {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  height: 80%;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.3);
  &-title {
    text-align: center;
    padding: 10px 0;
    font-size: 24px;
  }
  &-progress {
    height: 1px;
    background: #bbb;
    transition: all ease 0.5s;
    &.uploading{
        height: 4px;
        background: green;
    }
  }
  &-content {
    width: 100px;
    height: 100px;
    text-align: center;
    border: 1px dashed #333;
    border-radius: 5px;
    margin: 30px auto;
    padding-top: 30px;
    position: relative;
    &.active {
      background: gray;
    }
  }
  &-action {
    width: 120px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    background: red;
    color: #fff;
    border-radius: 10px;
    margin: 10px auto;
    transition: all ease 0.5s;
    &:hover {
      background: #f5af19;
    }
  }
}
input {
  border: none;
  background: transparent;
  outline: none;
  position: absolute;
  top: 0;
  left: 0;
  width: 100px;
  height: 100px;
  opacity: 0;
}
span {
  color: #333;
}
</style>
