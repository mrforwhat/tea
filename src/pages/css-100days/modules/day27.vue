<template>
  <div class="frame">
    <div class="diary">
        <div class="diary-title">Wednesday</div> 
        <div class="diary-sub-title">October 11, 2023</div>
        <div class="diary-list">
            <div class="row">
                <input type="checkbox" id="item1">
                <label for="item1">Create a list</label>
                <div class="icon"></div>
                <svg>
                    <polyline points="0,12 8,20 20,8"></polyline>
                </svg>
            </div>
            <div class="row">
                <input type="checkbox" id="item2">
                <label for="item2">Complete first task</label>
                <div class="icon"></div>
                <svg>
                    <polyline points="0,12 8,20 20,8"></polyline>
                </svg>
            </div>
            <div class="row">
                <input type="checkbox" id="item3">
                <label for="item3">Write some target unfinished</label>
                <div class="icon"></div>
                <svg>
                    <polyline points="0,12 8,20 20,8"></polyline>
                </svg>
            </div>
            <div class="row">
                <input type="checkbox" id="item4">
                <label for="item4">Have a good time</label>
                <div class="icon"></div>
                <svg>
                    <polyline points="0,12 8,20 20,8"></polyline>
                </svg>
            </div>
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
	box-shadow: 4px 8px 16px 0 rgba(0,0,0,0.1);
	overflow: hidden;
    background: linear-gradient(to top right, #FDA231 0%, #FDCA31 100%); 
  color: #333;
	font-family: 'Open Sans', Helvetica, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.diary{
    width: 300px;
    padding: 30px;
    background: #fff;
    border-radius: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    &-title{
        font-size: 18px;
        font-weight: bold;
        line-height: 1.4;
        text-align: center;
    }
    &-sub-title{
        font-size: 16px;
        line-height: 1.4;
        text-align: center;
    }
    &-list{
        border-top: 2px solid #f5f5f5;
        width: 250px;
        margin: 15px auto 0;
        padding: 10px 0;
    }
}
.row{
    padding: 10px 0;
    position: relative;
}
label{
    display: block;
    cursor: pointer;
}
input{
    display: none;
    &:checked{
        & ~ .icon{
            opacity: 0;
            transform: translateY(-50%) scale(1.5);
        }
        & ~ svg{
            opacity: 1;
            stroke-dashoffset: 0;
        }
        & ~ label{
            color: #FDA231;
        }
    }
}
.icon{
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 1px solid #333;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    transition: 0.5s ease-in;
    pointer-events: none;
}
svg{
    width: 20px;
    height: 20px;
    position: absolute;
    top: 50%;
    right: 0;
    transition: 0.5s ease-in;
    transform: translateY(-50%);
    fill: none;
    stroke: #333;
    opacity: 0;
    stroke-dasharray: 30;
    stroke-dashoffset: 30;
    pointer-events: none;
}
</style>