<template>
    <div class="frame">
      <div class="center">
        <div class="round">
          <svg width="230" height="230" xmlns="http://www.w3.org/2000/svg">
            <circle
              cx="115"
              cy="115"
              r="100"
              fill="transparent"
              stroke-width="8"
            ></circle>
          </svg>
          <div class="round-inner">
            <div class="name">Keep Sports 2013</div>
            <div class="rate">180</div>  
          </div>
          <div class="round-point even">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div class="round-point odd">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
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
    background: #4c4c4c;
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
  .round {
    width: 230px;
    height: 230px;
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: rgba(0, 0, 0, 0.3);
  
    &-inner {
      width: 190px;
      height: 190px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      border-radius: 50%;
      background: rgba(0, 0, 0, 0.8);
      padding-top: 30%;
      color: #fff;
      text-align: center;
    }
    &-point {
      width: 5px;
      height: 5px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      div {
        width: 100%;
        height: 100%;
        background: #fff;
        border-radius: 50%;
        position: absolute;
        left: 0;
        top: 0;
      }
      &.even {
        div {
          @for $i from 1 through 6 {
            &:nth-child(#{$i}) {
              transform: rotate((60 * $i) + deg) translateX(85px);
              animation: runRed linear 0.5s infinite;
            }
          }
        }
      }
      &.odd {
        div {
          @for $i from 1 through 6 {
            &:nth-child(#{$i}) {
              transform: rotate((60 * $i - 30) + deg) translateX(85px);
              animation: runWhite linear 0.5s infinite;
            }
          }
        }
      }
    }
  }
  svg {
    background: transparent;
  }
  circle {
    transform-origin: center center;
    animation: spin linear 4s infinite;
    transform: rotate(-90deg) scaleY(1);
    stroke: #e91e63;
    stroke-dasharray: 628;
    stroke-dashoffset: 628;
    stroke-linecap: round;
  }
  .rate{
    font-size: 24px;
    font-weight: bold;
    position: relative;
    margin-right: 20px;
    &:after{
      content: '❤';
      position: absolute;
      right: 40px;
      font-size: 20px;
      color: #e91e63;
      display: inline-block;
      animation: dance cubic-bezier(.17,.67,.83,.67) 0.8s infinite;
      padding-top: 2px;
    }
  }
  @keyframes spin {
    0% {
      stroke-dashoffset: 628;
      transform: rotate(-90deg);
      filter: hue-rotate(0);
    }
    50% {
      stroke-dashoffset: 0;
      transform: rotate(-90deg);
    }
    100% {
      stroke-dashoffset: -628;
      transform: rotate(-90deg);
      filter: hue-rotate(720deg);
    }
  }
  @keyframes runRed {
    0%{
      background: #fff;
    }
    100%{
      background: red;
    }
  }
  @keyframes runWhite {
    0%{
      background: red;
    }
    100%{
      background: #fff;
    }
  }
  
  @keyframes dance{
    0%{
      transform: scale(1);
    }
    0%{
      transform: scale(1.4);
    }
  }
  </style>
  