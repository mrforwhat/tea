<template>
<div class="frame">
  <div class="center">
		<div class="day">
			<div class="day-number">100</div>
			<div class="day-unit">DAYS</div>
			<div class="day-desc">CSS CHANGES</div>
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
  background: linear-gradient(to top right,#43389F,#4ec6ca);
  color: #fff;
	font-family: 'Open Sans', Helvetica, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
}

.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
}
.day{
	text-align: center;
	font-weight: bold;
	filter: drop-shadow(2px 2px 2px rgba(0,0,0,.6));
    line-height: 1;
	&-number{
		font-size: 110px;
        animation: spread linear 2s infinite alternate;
	}
	&-unit{
		font-size: 90px;
	}
	&-desc{
		font-size: 30px;
	}
}
@keyframes spread {
    0%{
        letter-spacing: -45px;
    }
    80%{
        letter-spacing: 20px;
    }
    100% {
        letter-spacing: 20px;
    }
}
</style>