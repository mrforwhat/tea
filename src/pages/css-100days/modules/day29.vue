<template>
    <div class="frame">
        <div class="search">
            <input type="text" placeholder="Start typing ...">
            <div class="icon">🔍</div>
            <div class="search-box">
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
    onMounted(() => {
      const inputEl = document.querySelector('input')
      const searchBox = document.querySelector('.search-box')
     
      inputEl?.addEventListener('keyup',function(e) {
        if(this.value) {
            searchBox.classList.add('active')
            let html = `
                <div class="search-item">recommend content1 <span>${this.value}</span></div>
                <div class="search-item">recommend content2 <span>${this.value}</span></div>
                <div class="search-item">recommend content3 <span>${this.value}</span></div>
            `
            if(searchBox) {
                searchBox.innerHTML = html
            }
        }else {
            searchBox.classList.remove('active')
        }
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
    background: linear-gradient(to top right, #FDA231 0%, #FDCA31 100%);
    color: #333;
    font-family: 'Open Sans', Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.search{
    width: 280px;
    height: 40px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    background: #fff;
    box-shadow: 0 0 20px 0 rgba(0,0,0,0.3);
    display: flex;
    align-items: center;
    padding: 10px;
}
.search-box{
    width: 100%;
    background: #fff;
    position: absolute;
    top: 45px;
    left: 0;
    right: 0;
    max-height: 0;
    overflow-y: auto;
    transition: all ease 0.5s;
    &.active{
        max-height: 100px;
    }
}
:deep(.search-item){
    padding: 10px;
    span{
        color: orange;
    }
}
input{
    width: 100%;
    flex: 1;
    border: none;
    background: transparent;
}
.icon{
    width: 30px;
    height: 30px;
    flex: 0 0 30px;
    text-align: center;
    line-height: 30px;
}

</style>