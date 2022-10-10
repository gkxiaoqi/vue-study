<template>
  <div class="container-home1">
    <div id="sky"></div>
    <div id="mask"></div>
    <div id="moon">
      <div id="moon-mask"></div>
    </div>
    <div id="stars" ref="stars">
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
      <div class="star"></div>
    </div>
    <div id="blinks" ref="blinks">
      <div class="blink"></div>
      <div class="blink"></div>
      <div class="blink"></div>
      <div class="blink"></div>
      <div class="blink"></div>
      <div class="blink"></div>
      <div class="blink"></div>
      <div class="blink"></div>
      <div class="blink"></div>
      <div class="blink"></div>
      <div class="blink"></div>
    </div>
    <div id="nav" ref="nav">
      <div
        class="content"
        ref="content1"
        @mouseenter="stopNavAnim"
        @mouseleave="startNavAnim"
        @click="() => switchCurrentNav(0)"
      >
        <div class="border1"></div>
        <div class="border2"></div>
        <div class="border3"></div>
        <div class="border4"></div>
        <div class="area">
          <el-icon><HomeFilled /></el-icon>
          <div>首页1</div>
        </div>
      </div>
      <div
        class="content"
        ref="content2"
        @mouseenter="stopNavAnim"
        @mouseleave="startNavAnim"
        @click="() => switchCurrentNav(1)"
      >
        <div class="area">
          <el-icon><HomeFilled /></el-icon>
          <div>首页2</div>
        </div>
      </div>
      <div
        class="content"
        ref="content3"
        @mouseenter="stopNavAnim"
        @mouseleave="startNavAnim"
        @click="() => switchCurrentNav(2)"
      >
        <div class="area">
          <el-icon><HomeFilled /></el-icon>
          <div>首页3</div>
        </div>
      </div>
      <div
        class="content"
        ref="content4"
        @mouseenter="stopNavAnim"
        @mouseleave="startNavAnim"
        @click="() => switchCurrentNav(3)"
      >
        <div class="area">
          <el-icon><HomeFilled /></el-icon>
          <div>首页4</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from "vue";

const content1 = ref();
const content2 = ref();
const content3 = ref();
const content4 = ref();
let current = ref(0);
let pause = ref(false);
let interval1 = null;
let interval2 = null;

const anim1 = "nav-anim-1 3s ease-in-out both";
const anim2 = "nav-anim-2 3s ease-in-out both";
const anim3 = "nav-anim-3 3s ease-in-out both";
const anim4 = "nav-anim-4 3s ease-in-out both";

const anim1_fast = "nav-anim-1 1s ease-in-out both";
const anim2_fast = "nav-anim-2 1s ease-in-out both";
const anim3_fast = "nav-anim-3 1s ease-in-out both";
const anim4_fast = "nav-anim-4 1s ease-in-out both";

const startNavAnim = () => {
  pause.value = false;
};

const stopNavAnim = () => {
  pause.value = true;
};

const switchCurrentNav = (index) => {
  const switchNav = () => {
    current.value = current.value >= 3 ? 0 : current.value + 1;
    switch (current.value) {
      case 0:
        content1.value.style.animation = anim2_fast;
        content2.value.style.animation = anim3_fast;
        content3.value.style.animation = anim4_fast;
        content4.value.style.animation = anim1_fast;
        break;
      case 1:
        content1.value.style.animation = anim1_fast;
        content2.value.style.animation = anim2_fast;
        content3.value.style.animation = anim3_fast;
        content4.value.style.animation = anim4_fast;
        break;
      case 2:
        content1.value.style.animation = anim4_fast;
        content2.value.style.animation = anim1_fast;
        content3.value.style.animation = anim2_fast;
        content4.value.style.animation = anim3_fast;
        break;
      case 3:
        content1.value.style.animation = anim3_fast;
        content2.value.style.animation = anim4_fast;
        content3.value.style.animation = anim1_fast;
        content4.value.style.animation = anim2_fast;
        break;
      default:
        break;
    }
  };
  interval1 = setInterval(() => {
    if (index === current.value) {
      clearInterval(interval1);
    } else {
      switchNav();
    }
  }, 1000);
};

onMounted(() => {
  interval2 = setInterval(() => {
    if (!pause.value) {
      current.value = current.value >= 3 ? 0 : current.value + 1;
      switch (current.value) {
        case 0:
          content1.value.style.animation = anim2;
          content2.value.style.animation = anim3;
          content3.value.style.animation = anim4;
          content4.value.style.animation = anim1;
          break;
        case 1:
          content1.value.style.animation = anim1;
          content2.value.style.animation = anim2;
          content3.value.style.animation = anim3;
          content4.value.style.animation = anim4;
          break;
        case 2:
          content1.value.style.animation = anim4;
          content2.value.style.animation = anim1;
          content3.value.style.animation = anim2;
          content4.value.style.animation = anim3;
          break;
        case 3:
          content1.value.style.animation = anim3;
          content2.value.style.animation = anim4;
          content3.value.style.animation = anim1;
          content4.value.style.animation = anim2;
          break;
        default:
          break;
      }
    }
  }, 6000);
});

onUnmounted(() => {
  clearInterval(interval1);
  clearInterval(interval2);
});
</script>

<style lang="scss">
.container-home1 {
  position: relative;
  height: 100vh;
  width: 100vw;
  overflow: hidden;

  #sky {
    height: 100vh;
    width: 100vw;
    background: linear-gradient(
      rgba(0, 150, 255, 1),
      rgba(0, 150, 255, 0.8),
      rgba(0, 150, 255, 0.5)
    );
  }

  #mask {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    z-index: 900;
  }

  #moon {
    position: absolute;
    right: 30%;
    top: 20%;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.938);
    z-index: 901;
    box-shadow: 0 0 20px rgba(255, 255, 255, 0.5);
    overflow: hidden;
  }

  #moon-mask {
    position: absolute;
    right: 30%;
    top: 20%;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background: rgba(0, 0, 0);
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.8);
    z-index: 902;
    transform: translate(60px, -50px);
  }

  #stars {
    @keyframes star-anmi {
      0% {
        opacity: 0.1;
      }
      50% {
        opacity: 1;
      }
      100% {
        opacity: 0.1;
      }
    }
    .star {
      position: absolute;
      z-index: 999;
      width: 3px;
      height: 3px;
      background: rgba(255, 255, 255, 0.6);
      box-shadow: 0 0 3px rgba(255 255 255 / 50%);
      border-radius: 50%;
      @for $i from 1 through 20 {
        &:nth-child(#{$i}) {
          top: percentage(random());
          left: percentage(random());
          animation: star-anmi (random() + 1) * 3 + s linear infinite;
        }
      }
    }
  }

  #blinks {
    @keyframes blink-anmi {
      0% {
        opacity: 0;
        transform: rotate(320deg) translate(50vw);
      }
      50% {
        opacity: 1;
        transform: rotate(320deg) translate(0);
      }
      100% {
        opacity: 0.1;
        transform: rotate(320deg) translate(-50vw);
      }
    }
    .blink {
      background: rgba(255, 255, 255, 0.6);
      z-index: 900;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      position: absolute;
      box-shadow: 0 0 10px rgba(255 255 255 / 50%);
      &::after {
        content: "";
        width: 400px;
        height: 4px;
        top: 50%;
        left: 50%;
        transform: translateY(-50%);
        position: absolute;
        background: linear-gradient(
          90deg,
          rgba(255 255 255 / 60%),
          transparent
        );
      }
      @for $i from 1 through 20 {
        &:nth-child(#{$i}) {
          top: percentage(random());
          left: percentage(random());
          animation: blink-anmi (random() + 1) * 3 + s linear infinite;
        }
      }
    }
  }

  #nav {
    @keyframes nav-anim-1 {
      0% {
        transform: translate(-50%, calc(-50% + 200px)) scale(1);
      }
      100% {
        transform: translate(calc(-50% - 450px), -50%) scale(0.8);
      }
    }
    @keyframes nav-anim-2 {
      0% {
        transform: translate(calc(-50% + 450px), -50%) scale(0.8);
      }
      100% {
        transform: translate(-50%, calc(-50% + 200px)) scale(1);
      }
    }
    @keyframes nav-anim-3 {
      0% {
        transform: translate(-50%, calc(-50% - 200px)) scale(0.6);
      }
      100% {
        transform: translate(calc(-50% + 450px), -50%) scale(0.8);
      }
    }
    @keyframes nav-anim-4 {
      0% {
        transform: translate(calc(-50% - 450px), -50%) scale(0.8);
      }
      100% {
        transform: translate(-50%, calc(-50% - 200px)) scale(0.6);
      }
    }
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 9999;
    transform: translate(-50%, -50%);
    .content {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      border: 1px solid rgba(255 255 255 / 50%);
      box-shadow: 0 0 10px rgba(255 255 255 / 50%);
      padding: 20px;
      width: 400px;
      height: 300px;
      position: absolute;
      overflow: hidden;
      @keyframes border-anim-1 {
        0% {
          transform: translate(-200px, 0);
        }
        100% {
          transform: translate(1368px, 0);
        }
      }
      @keyframes border-anim-2 {
        0% {
          transform: translate(440px, -642px) rotate(90deg);
        }
        100% {
          transform: translate(440px, 926px) rotate(90deg);
        }
      }
      @keyframes border-anim-3 {
        0% {
          transform: translate(1426px, 340px) rotate(180deg);
        }
        100% {
          transform: translate(-142px, 340px) rotate(180deg);
        }
      }
      @keyframes border-anim-4 {
        0% {
          transform: translate(0, 1568px) rotate(270deg);
        }
        100% {
          transform: translate(0, 0) rotate(270deg);
        }
      }
      .border1,
      .border2,
      .border3,
      .border4 {
        position: absolute;
        z-index: 999;
        width: 200px;
        height: 4px;
      }
      .border1 {
        background: linear-gradient(
          -90deg,
          rgba(184, 18, 6, 0.911),
          transparent
        );
        transform: translate(-200px, 0);
        animation: border-anim-1 10s linear infinite;
      }
      .border2 {
        background: linear-gradient(
          -90deg,
          rgba(184, 18, 6, 0.911),
          transparent
        );
        transform-origin: 0 0;
        transform: translate(440px, -200px) rotate(90deg);
        animation: border-anim-2 10s linear infinite;
      }
      .border3 {
        background: linear-gradient(
          -90deg,
          rgba(184, 18, 6, 0.911),
          transparent
        );
        transform-origin: 0 0;
        transform: translate(1426px, 340px) rotate(180deg);
        animation: border-anim-3 10s linear infinite;
      }
      .border4 {
        background: linear-gradient(
          -90deg,
          rgba(184, 18, 6, 0.911),
          transparent
        );
        transform-origin: 0 0;
        transform: translate(0, 1568px) rotate(270deg);
        animation: border-anim-4 10s linear 1.25s infinite;
      }
      .area {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-around;
        color: #fff;
        height: 50px;
        width: 80px;
        @keyframes icon-anim {
          0% {
            transform: rotate(0);
          }
          25% {
            transform: rotate(-10deg);
          }
          50% {
            transform: rotate(20deg);
          }
          75% {
            transform: rotate(30deg);
          }
          100% {
            transform: rotate(0);
          }
        }
        .el-icon {
          font-size: 50px;
          &:hover {
            animation: icon-anim 0.5s linear infinite;
          }
        }
      }
      &:nth-of-type(1) {
        transform: translate(-50%, calc(-50% + 200px)) scale(1);
      }
      &:nth-of-type(2) {
        transform: translate(calc(-50% + 450px), -50%) scale(0.8);
      }
      &:nth-of-type(3) {
        transform: translate(-50%, calc(-50% - 200px)) scale(0.6);
      }
      &:nth-of-type(4) {
        transform: translate(calc(-50% - 450px), -50%) scale(0.8);
      }
    }
  }
}
</style>