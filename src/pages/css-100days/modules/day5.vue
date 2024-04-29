<template>
  <div class="frame">
    <div class="center">
      <div class="chart">
        <div class="chart-header">
          <div>
            <div class="chart-name">Weekly report</div>
            <div class="chart-date">01.Feb-07.Feb</div>
          </div>
          <div>
            <div class="type">Revenue</div>
            <div class="val">$ 3621.79</div>
          </div>
        </div>
        <div class="chart-legend">
          <div class="label danger">Views</div>
          <div class="label primary">Purchases</div>
        </div>
        <div class="chart-body">
          <div class="split"></div>
          <div class="split"></div>
          <div class="split"></div>
          <div class="data danger">
            <svg width="330" height="70">
              <polyline
                points="0,35 55,10 110,30 165,20 220,39 275,10 330,30"
              ></polyline>
            </svg>
            <div class="data-points">
              <span data-val="35"></span>
              <span data-val="10"></span>
              <span data-val="30"></span>
              <span data-val="20"></span>
              <span data-val="39"></span>
              <span data-val="10"></span>
              <span data-val="30"></span>
            </div>
          </div>
          <div class="data primary">
            <svg width="330" height="70">
              <polyline
                points="0,55 55,70 110,48 165,70 220,60 275,65 330,50"
              ></polyline>
            </svg>
            <div class="data-points">
              <span data-val="55"></span>
              <span data-val="70"></span>
              <span data-val="48"></span>
              <span data-val="70"></span>
              <span data-val="60"></span>
              <span data-val="65"></span>
              <span data-val="50"></span>
            </div>
          </div>
          <div class="week">
            <div class="week-day">Mon</div>
            <div class="week-day">Tue</div>
            <div class="week-day">Wed</div>
            <div class="week-day">Thu</div>
            <div class="week-day">Fri</div>
            <div class="week-day">Sat</div>
            <div class="week-day">Sun</div>
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
  background: #fff;
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

$primary-color: #2196f3;
$danger-color: #f44336;
.chart {
  width: 360px;
  box-shadow: 5px 5px 5px 0 rgba(0, 0, 0, 0.4);
  &-header {
    padding: 10px;
    background: orange;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #fff;
  }
  &-name {
    font-size: 16px;
    font-weight: bold;
    text-transform: uppercase;
  }
  &-date {
    font-size: 14px;
  }
  .type {
    font-size: 15px;
  }
  .val {
    font-size: 15px;
    font-weight: bold;
  }
  &-legend {
    display: flex;
    justify-content: right;
    padding: 10px;
    .label {
      font-size: 12px;
      color: #9d9c9c;
      position: relative;
      margin-left: 30px;
      &::before {
        content: "";
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: -20px;
        width: 15px;
        height: 4px;
      }
      &.danger::before {
        background: $danger-color;
      }
      &.primary::before {
        background: $primary-color;
      }
    }
  }
  &-body {
    position: relative;
    padding: 10px 0;
    .split {
      margin: 0 10px;
      height: 1px;
      background: rgba(0, 0, 0, 0.1);
      margin-bottom: 35px;
    }
  }
}
.data-points {
  span {
    width: 10px;
    height: 10px;
    border-radius: 50%;
    position: absolute;
    z-index: 10;
    display: block;
    transform: translate(-5px, -5px);
    &::before {
      content: attr(data-val);
      position: absolute;
      width: 30px;
      height: 30px;
      top: -30px;
      left: -9px;
      text-align: center;
      line-height: 30px;
      background: orange;
      color: #fff;
      transition: all ease-in-out 0.2s;
      opacity: 0;
    }
    &::after {
      content: "";
      position: absolute;
      top: -8px;
      left: -3px;
      width: 0;
      height: 0;
      border-style: solid;
      border-width: 10px 8px 0 8px;
      border-color: orange transparent transparent transparent;
      opacity: 0;
      transition: all 0.3s;
    }
    &:hover {
      &::before {
        opacity: 1;
        transform: translateY(-20%);
      }
      &::after {
        opacity: 1;
        bottom: -20px;
      }
    }
  }
}

.data {
  position: absolute;
  top: 10px;
  left: 15px;
  &.danger {
    svg {
      stroke: $danger-color;
      fill: transparent;
    }
    .data-points {
      span {
        background: $danger-color;
        &:nth-child(1) {
          left: 0;
          top: 35px;
        }
        &:nth-child(2) {
          left: 55px;
          top: 10px;
        }
        &:nth-child(3) {
          left: 110px;
          top: 30px;
        }
        &:nth-child(4) {
          left: 165px;
          top: 20px;
        }
        &:nth-child(5) {
          left: 220px;
          top: 39px;
        }
        &:nth-child(6) {
          left: 275px;
          top: 10px;
        }
        &:nth-child(7) {
          left: 330px;
          top: 30px;
        }
      }
    }
  }
  &.primary {
    svg {
      stroke: $primary-color;
      fill: transparent;
    }
    .data-points {
      span {
      background: $primary-color;
        &:nth-child(1) {
          left: 0;
          top: 55px;
        }
        &:nth-child(2) {
          left: 55px;
          top: 70px;
        }
        &:nth-child(3) {
          left: 110px;
          top: 48px;
        }
        &:nth-child(4) {
          left: 165px;
          top: 70px;
        }
        &:nth-child(5) {
          left: 220px;
          top: 60px;
        }
        &:nth-child(6) {
          left: 275px;
          top: 65px;
        }
        &:nth-child(7) {
          left: 330px;
          top: 50px;
        }
      }
    }
  }
}
.week {
  display: flex;
  justify-content: space-between;
  padding: 0 5px;
  margin-top: -10px;
  &-day {
    text-transform: uppercase;
    color: #9e9e9e;
  }
}
</style>
