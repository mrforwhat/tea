<template>
    <div class="frame">
        <div class="map">
            <svg class="map-bg" width="400px" height="400px" viewBox="0 0 400 400">
                <path
                    d="M161.061341,399.999994 C161.061341,399.999994 191.270445,391.453331 205.135883,365.931812 C219.001321,340.410293 200.432398,333.765052 214.613679,309.426833 C228.79496,285.088614 250.056003,267.776851 262.826394,266.922116 C275.596785,266.067381 268.157228,295.720245 275.715421,305.337232 C283.273615,314.954218 275.976179,326.217927 303.147406,318.226259 C330.318634,310.234591 337.441809,308.749917 354.803656,282.075606 C372.165503,255.401296 353.503439,227.118217 363.183533,215.005256 C372.863628,202.892294 400.000001,171.927011 400.000001,171.927011 L400.000001,399.999994 L161.061341,399.999994 Z M8.33144441e-07,274.813084 C8.33144441e-07,274.813084 39.2929748,253.427701 69.7020648,222.975932 C100.111155,192.524163 111.329013,178.897167 120.245786,154.398535 C129.162559,129.899902 108.904134,115.269131 115.056957,98.3643901 C121.20978,81.459649 135.217027,74.9407179 149.468681,74.1092913 C163.720334,73.2778646 154.420375,103.542195 180.702766,94.5346817 C206.985157,85.5271688 208.897554,56.1953712 227.012818,47.5333294 C245.128081,38.8712876 253.356729,68.8621277 278.808059,63.1798791 C304.259388,57.4976304 304.842006,36.4943955 317.091607,32.0191906 C329.341207,27.5439856 334.697225,18.5903589 367.296171,25.5675291 C399.895117,32.5446994 399.999998,49.0022571 399.999998,49.0022571 L400,-5.40012479e-13 L2.47316295e-05,-1.96109795e-12 L8.33144441e-07,274.813084 Z">
                </path>
            </svg>
            <input type="checkbox" id="card" />
            <label for="card">
                <img src="https://100dayscss.com/codepen/surfshop.jpg" class="banner" alt="" width="240" height="60"/>
                <div class="card-title">HW M7 Shop</div>
                <div class="card-content">108 Center Street</div>
            </label>
            <div class="marker">
                <svg width="48px" height="72px" viewBox="0 0 48 72">
                    <path
                        d="M24,0 C11.406,0 0,10.209 0,22.806 C0,35.4 10.407,50.436 24,72 C37.593,50.436 48,35.4 48,22.806 C48,10.209 36.597,0 24,0 L24,0 Z M24,33 C19.029,33 15,28.971 15,24 C15,19.029 19.029,15 24,15 C28.971,15 33,19.029 33,24 C33,28.971 28.971,33 24,33 L24,33 Z">
                    </path>
                </svg>
                <div class="shadow"></div>
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
    background: #fff;
    color: #333;
    font-family: 'Open Sans', Helvetica, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.map {
    position: relative;
    background-color: #0286f0;

    &-bg {
        fill: #2196f3;
    }
}
.marker{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
    
    svg{
        fill: yellow;
        animation: markMove 1s infinite alternate;
    }
}
.shadow{
    width: 20px;
    height: 20px;
    background: #333;
    opacity: 0.8;
    border-radius: 15px;
    margin: 0 auto;
    transform: rotateX(68deg);
    animation: shadows 1.5s infinite;
}

label{
    width: 240px;
    height: 150px;
    background: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%) rotateY(-80deg);
    opacity: 0;
    z-index: 10;
    transition: all ease-in 0.5s;
    text-align: center;
}
.card-title{
    padding-top: 20px;
}
#card{
    &:checked{
        & ~ label{
            opacity: 1;
            transform: translate(-50%,-50%) rotateY(0deg);
        }
    }
}
input{
    display: none;
}
@keyframes shadows {
    0%{
        transform: rotateX(68deg) scale(1);
    }
    50%{
        transform: rotateX(80deg) scale(0.5);
    }
    100%{
        transform: rotateX(68deg) scale(1);
    }
}
@keyframes markMove {
    0%{
        transform: translateY(-10px);
    }
    100%{
        transform: translateY(10px);
    }
}
</style>