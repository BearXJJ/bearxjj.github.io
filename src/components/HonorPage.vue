<template>
  <div class="honor">
    <div class="title-wrapper">
      <h1 class="title">{{ text.honor }}</h1>
      <span class="title-bg">HONOR</span>
    </div>
    <div class="content">
      <div v-for="(item, index) in honorItems" :key="index" class="bubble">
        <div class="bubble-inner">
          <div class="year">{{ item.year }}</div>
          <div class="level">{{ item.level }}</div>
          {{ item.title }}
        </div>
      </div>
    </div>
  </div>

</template>

<script setup>

  import { onMounted, computed } from 'vue';
  import ScrollReveal from 'scrollreveal';
  import { revealConfig } from '../utils/config';
  import { useLanguageStore } from '@/stores/language';

  // 文字内容获取
  const languageStore = useLanguageStore();
  const text = computed(() => languageStore.text[languageStore.languageClass]);

  const honorItems = computed(() => [
    {
      year: '2022 2023 2024',
      level: text.value.shanghaitech,
      title: text.value.honorList[0],
    },
    {
      year: '2024',
      level: text.value.shanghaitech,
      title: text.value.honorList[1],
    },
    {
      year: '2023',
      level: text.value.shanghaitech,
      title: text.value.honorList[2],
    },
    {
      year: '2022',
      level: text.value.shanghaitech,
      title: text.value.honorList[3],
    },
  ]);

  onMounted(() => {
    ScrollReveal().reveal('.title', {
      ...revealConfig,
      origin: 'bottom',
    });
    ScrollReveal().reveal('.content .bubble', {
      ...revealConfig,
      interval: 200,
      origin: 'bottom',
      distance: '30px',
    });
  });

</script>

<style lang="less" scoped>
.honor {
  width: 80%;
  max-width: 1300px;
  margin: auto;
  padding-top: 100px;
  text-align: center;

  .title-wrapper {
    text-align: center;
    position: relative;
    margin-bottom: 80px;
    .title {
      font-size: 40px;
      font-weight: 900;
      color: @text-color-1;
      z-index: 1;
      position: relative;
      &::after {
        content: '';
        display: block;
        width: 60px;
        height: 4px;
        background: @theme-color;
        margin: 10px auto 0;
        border-radius: 2px;
      }
    }
    .title-bg {
      position: absolute;
      top: 50%; left: 50%;
      transform: translate(-50%, -50%);
      font-size: 80px;
      font-weight: 900;
      color: @title-bg-color;
      letter-spacing: 10px;
      z-index: 0;
    }
  }
  .content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    padding-bottom: 200px;

    .bubble {
      // display: ;
      position: relative;
      width: 100%;
      margin-top: 40px;

      .bubble-inner {
        // display: block;
        position: relative;
        width: 100%;
        height: 50px;
        text-align: center;
        line-height: 50px;
        border: 2px solid @theme-border;
        border-radius: 25px;
        padding: 0 22px;
        background: @bg-card;
        backdrop-filter: blur(10px);
        -webkit-backdrop-filter: blur(10px);
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
        font-size: 20px;
        font-weight: 600;
        color: @text-color-1;
        transition: transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease;
      }

      &:hover .bubble-inner {
        transform: translateY(-6px);
        border-color: @theme-border;
        box-shadow:
          0 18px 35px rgba(0, 0, 0, 0.12),
          0 0 22px @theme-tint;
      }

      .year {
        position: absolute;
        color: @theme-color;
        background-color: @bg-color;
        border: 1px solid @theme-border;
        font-size: 13px;
        font-weight: 700;
        left: 18px;
        top: -12px;
        height: 24px;
        line-height: 24px;
        padding: 0 10px;
        border-radius: 8px;
        box-shadow: 0 6px 14px rgba(0, 0, 0, 0.08);
      }
      .level {
        position: absolute;
        color: @text-color-2;
        background-color: @bg-color;
        border: 1px solid @theme-border;
        font-size: 12px;
        font-weight: 600;
        right: 18px;
        bottom: -12px;
        height: 24px;
        line-height: 24px;
        padding: 0 10px;
        border-radius: 8px;
        box-shadow: 0 6px 14px rgba(0, 0, 0, 0.08);
      }
    }

    .bubble-left {
      &::before {
        content: ' ';
        position: absolute;
        width: 0;
        height: 0;
        left: 30px;
        top: 50px;
        border: 15px solid;
        border-color: @theme-border transparent transparent @theme-border;
      }
      &::after {
        content: ' ';
        position: absolute;
        width: 0;
        height: 0;
        left: 32px;
        top: 50px;
        border: 12px solid;
        border-color: @bg-card transparent transparent @bg-card;
      }
    }
    .bubble-right {
      &::before {
        content: ' ';
        position: absolute;
        width: 0;
        height: 0;
        right: 30px;
        top: 50px;
        border: 15px solid;
        border-color: @theme-border @theme-border transparent transparent;
      }
      &::after {
        content: ' ';
        position: absolute;
        width: 0;
        height: 0;
        right: 32px;
        top: 50px;
        border: 12px solid;
        border-color: @bg-card @bg-card transparent transparent;
      }
    }
  }
}

@media screen and (max-width: 1000px) {
  .honor {
    width: 90%;
    padding: 30px 0;
    .title-wrapper {
      margin-bottom: 20px;
      .title-bg { font-size: 40px; }
    }
    .content {
      padding-bottom: 100px;
      .bubble {
        .bubble-inner {
          width: 100%;
          font-size: 14px;
          height: 44px;
          line-height: 44px;
          padding: 0 16px;
        }
        .year {
          height: 20px;
          line-height: 20px;
          font-size: 12px;
          top: -10px;
        }
        .level {
          height: 20px;
          line-height: 20px;
          font-size: 11px;
          bottom: -10px;
        }
      }
    }
  }
}
</style>
