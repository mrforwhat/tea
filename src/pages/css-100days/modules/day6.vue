<template>
  <div class="frame">
    <div class="center">
      <div class="profile">
        <div class="profile-main">
          <div class="avatar">
            <div class="avatar-circle inside"></div>
            <div class="avatar-circle outside"></div>
          </div>
          <div class="nickname">Scarlett Johansson</div>
          <div class="job">Movie Star</div>
          <div class="btn">Follow</div>
          <div class="btn">Message</div>
        </div>
        <div class="profile-side">
            <div class="item">
                <span>523</span>
                <div>Posts</div>
            </div>
            <div class="item">
                <span>1387</span>
                <div>Likes</div>
            </div>
            <div class="item">
                <span>146</span>
                <div>Follower</div>
            </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup lang="ts"></script>
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
  background: linear-gradient(to top right, #eebe6c 0%, #ca7c4e 100%);
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

.profile {
  width: 300px;
  height: 300px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 5px 5px 7px 0 rgba(0, 0, 0, 0.3);
  display: flex;
  &-main {
    flex: 0 0 60%;
    background: #fff;
    padding: 40px 0;
    text-align: center;
  }
  &-side {
    flex: 1;
    background: #f19472;
  }
}
.avatar {
  width: 70px;
  height: 70px;
  background-image: url("https://100dayscss.com/codepen/jessica-potter.jpg");
  background-size: 100% 100%;
  margin: 0 auto;
  border-radius: 50%;
  position: relative;
  &-circle {
    cursor: pointer;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    transform-origin:  center;
    transition: all ease-in-out 2s;
    border-radius: 50%;
    border: 1px solid;

    border-top-color: #ca7c4e;
    border-bottom-color: #ca7c4e;
    &.outside {
      width: 110%;
      height: 110%;
      border-right-color: #fff;
      border-left-color: #ca7c4e;
    }
    &.inside {
      width: 100%;
      height: 100%;
      border-right-color: #ca7c4e;
      border-left-color: #fff;
    }
  }
  &:hover {
    .inside {
        transform: translate(-50%,-50%) rotate(720deg) ;
    }
    .outside {
        transform: translate(-50%,-50%) rotate(-720deg) ;
    }
  }
}
.nickname{
    color: brown;
    font-size: 18px;
    line-height: 1.4;
    margin-top: 10px;
}
.job{
    color: brown;
    font-size: 14px;
    line-height: 1.4;
}
.btn{
    width: 120px;
    height: 40px;
    line-height: 40px;
    font-size: 15px;
    text-align: center;
    font-weight: bold;
    margin: 15px auto;
    border-radius: 20px;
    border: 1px solid brown;
    cursor: pointer;
    transition: all ease 0.5s;
    &:hover{
        background: brown;
        color: #fff;
    }
}
.item{
    background: #d8b176;
    height: 100px;
    text-align: center;
    padding-top: 30px;
    transition: all ease 0.5s;
    &:hover{
        background: #d5973a;
        color: #fff;
    }
    &:nth-child(2){
        border-top: 1px solid #fff;
        border-bottom: 1px solid #fff;
    }
    .span{
        font-size: 18px;
        font-weight: bold;
    }
    div{
        font-size: 16px;
        line-height: 1.4;
    }
}
</style>
