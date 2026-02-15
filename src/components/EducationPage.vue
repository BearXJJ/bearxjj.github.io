<template>
  <div class="education">
    <div class="title-wrapper">
      <h1 class="title">{{ text.education }}</h1>
      <span class="title-bg">EDUCATION</span>
    </div>

    <div class="content">
      <a 
        v-for="(item, index) in educationData" 
        :key="index"
        :href="item.link" 
        target="_blank" 
        class="school-box"
      >
        <div class="card-header">
          <span class="stage-tag">{{ item.stage }}</span>
          <span class="time-tag">{{ item.time }}</span>
        </div>
        
        <div class="img-wrapper">
          <img class="image" :src="item.logo" alt="school logo">
        </div>

        <div class="info">
          <h3 class="name">{{ item.name }}</h3>
          <p v-if="item.major" class="major">{{ item.major }}</p>
          <p v-if="item.subMajor" class="major sub">{{ item.subMajor }}</p>
        </div>
        
        <div class="bottom-bar"></div>
      </a>
    </div>
  </div>
</template>

<script setup>
import { onMounted, computed } from 'vue';
import ScrollReveal from 'scrollreveal';
import { revealConfig } from '../utils/config';
import { useLanguageStore } from '@/stores/language';

const languageStore = useLanguageStore();
const text = computed(() => languageStore.text[languageStore.languageClass]);

// 建议将数据结构化，方便维护和循环
const educationData = computed(() => [
  {
    stage: text.value.highSchool[0],
    name: text.value.highSchool[1],
    time: text.value.highSchool[2],
    logo: new URL('../assets/images/cqyz.png', import.meta.url).href,
    link: 'https://cqyz.cn/',
    major: null
  },
  {
    stage: text.value.bachelor[0],
    name: text.value.bachelor[1],
    major: text.value.bachelor[2],
    subMajor: text.value.bachelor[3],
    time: text.value.bachelor[4],
    logo: new URL('../assets/images/shanghaitech.png', import.meta.url).href,
    link: 'https://www.shanghaitech.edu.cn/'
  },
  {
    stage: text.value.master[0],
    name: text.value.master[1],
    major: text.value.master[2],
    time: text.value.master[3],
    logo: new URL('../assets/images/shanghaitech.png', import.meta.url).href,
    link: 'https://www.shanghaitech.edu.cn/'
  }
]);

onMounted(() => {
  ScrollReveal().reveal('.title-wrapper', {
    ...revealConfig,
    origin: 'bottom',
  });
  ScrollReveal().reveal('.school-box', {
    ...revealConfig,
    interval: 150,
    origin: 'bottom',
    distance: '30px'
  });
});
</script>

<style lang="less" scoped>

.education {
  width: 80%;
  max-width: 1300px;
  margin: auto;
  padding: 100px 0;

  .title-wrapper {
    text-align: center;
    position: relative;
    margin-bottom: 60px;
    
    .title {
      font-size: 40px;
      font-weight: 900;
      color: @text-color-1;
      position: relative;
      z-index: 1;
      
      &::after {
        content: '';
        display: block;
        width: 50px;
        height: 4px;
        background: @theme-color;
        margin: 10px auto 0;
        border-radius: 2px;
      }
    }

    .title-bg {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      font-size: 80px;
      font-weight: 900;
      color: @title-bg-color;
      z-index: 0;
      letter-spacing: 10px;
    }
  }

  .content {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    gap: 30px;
    
    .school-box {
      background: @bg-card;
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 20px;
      padding: 30px;
      text-decoration: none;
      transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
      position: relative;
      overflow: hidden;
      display: flex;
      flex-direction: column;
      box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);

      &:hover {
        transform: translateY(-10px);
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
        
        .bottom-bar { width: 100%; }
        .image { transform: scale(1.1); }
      }

      .card-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;

        .stage-tag {
          padding: 4px 12px;
          background: @theme-tint;
          color: @theme-color;
          border-radius: 8px;
          font-size: 14px;
          font-weight: 600;
        }

        .time-tag {
          font-size: 14px;
          color: @text-color-2;
          background: @title-bg-color;
          padding: 4px 12px;
          border-radius: 5px;
        }
      }

      .img-wrapper {
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 20px;

        .image {
          height: 100%;
          object-fit: contain;
          transition: transform 0.5s ease;
        }
      }

      .info {
        text-align: center;
        flex-grow: 1;

        .name {
          font-size: 20px;
          color: @text-color-1;
          margin-bottom: 10px;
          line-height: 1.4;
        }

        .major {
          font-size: 15px;
          color: @text-color-2;
          margin: 2px 0;
          
          &.sub { font-size: 13px; opacity: 0.8; }
        }
      }

      .bottom-bar {
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0;
        height: 4px;
        background: @theme-color;
        transition: width 0.4s ease;
      }
    }
  }
}

@media screen and (max-width: 768px) {
  .education {
    padding: 30px 0;
    .title-wrapper {
      margin-bottom: 40px;
      .title-bg { font-size: 40px; }
    }
    .content {
      grid-template-columns: 1fr;
      .school-box {
        padding: 20px;
        .img-wrapper { height: 80px; }
      }
    }
  }
}
</style>
