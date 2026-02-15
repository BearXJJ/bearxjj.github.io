<template>
  <div class="publication">
    <div class="title-wrapper">
      <h1 class="title">{{ text.publication }}</h1>
      <span class="title-bg">PUBLICATION</span>
    </div>

    <div class="content">
      <div 
        v-for="(paper, index) in paperList" 
        :key="index" 
        class="paper-card"
        :class="{ 'reverse': index % 2 !== 0 }"
      >
        <div class="image-section">
          <div class="image-inner">
            <img class="system-image" :src="paper.image" :alt="paper.title">
          </div>
        </div>

        <div class="info-card">
          <div v-if="paper.award" class="award-badge">
            <span class="icon">🏆</span>
            <span class="text">{{ paper.award }}</span>
          </div>

          <h2 class="paper-title">{{ paper.title }}</h2>

          <div class="author-list" v-html="formatAuthors(paper.authors)"></div>

          <div class="venue-info">
            <span class="conference">{{ paper.venue }}</span>
            <div class="links">
              <a v-for="(link, type) in paper.links" :key="type" :href="link" target="_blank" class="link-btn">
                <span class="link-icon">{{ getLinkIcon(type) }}</span>
                {{ type.toUpperCase() }}
              </a>
            </div>
          </div>
          
          <div class="accent-bar"></div>
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

const languageStore = useLanguageStore();
const text = computed(() => languageStore.text[languageStore.languageClass]);

const paperList = computed(() => [
  {
    title: "WordCraft: Scaffolding the Keyword Method for L2 Vocabulary Learning with Multimodal LLMs",
    authors: "Yuheng Shao*, Junjie Xiong*, Chaoran Wu, Xiyuan Wang, Ziyu Zhou, Yang Ouyang, Qinyi Tao, Quan Li",
    venue: "CHI 2026",
    image: new URL('../assets/images/wordcraft.png', import.meta.url).href,
    links: {
      PDF: "https://arxiv.org/pdf/2602.00762",
    }
  },
  {
    title: "SCSimulator: An Exploratory Visual Analytics Framework for Partner Selection in Supply Chains through LLM-driven Multi-Agent Simulation",
    authors: "Shenghan Gao, Junye Wang*, Junjie Xiong*, Yun Jiang, Yun Fang, Qifan Hu, Baolong Liu, Quan Li",
    venue: "IUI 2026",
    image: new URL('../assets/images/SCSimulator.png', import.meta.url).href,
    links: {
      PDF: "https://arxiv.org/pdf/2601.14566",
    }
  },
  {
    title: "DataMinds: A Generalizable Role-Based Multi-Agent Framework for Automated Data-to-Report Generation",
    authors: "Junjie Xiong, Xiangyi Xiao, Haipeng Zhang, Quan Li",
    venue: "VIS 2025 VISxGenAI Workshop",
    award: "Honorable Mention",
    image: new URL('../assets/images/dataminds.png', import.meta.url).href,
    links: {
      Link: "https://visxgenai.github.io/",
      Report: "https://visxgenai.github.io/",
    }
  },
  {
    title: "ClueCart: Supporting Game Story Interpretation and Narrative Inference from Fragmented Clues",
    authors: "Xiyuan Wang, Yifan Cao, Junjie Xiong, Sizhe Chen, Wenxuan Li, Junjie Zhang, Quan Li",
    venue: "CHI 2025",
    award: "Best Paper Award",
    image: new URL('../assets/images/cluecart.png', import.meta.url).href,
    links: {
      PDF: "https://arxiv.org/pdf/2503.06098",
      Demo: "https://cluecart.github.io/ClueCart/"
    }
  },
]);

const formatAuthors = (authors) => {
  if(authors.includes('Junjie Xiong*')) {
    return authors.replace('Junjie Xiong*', '<strong>Junjie Xiong*</strong>');
  }
  if(authors.includes('Junjie Xiong')) {
    return authors.replace('Junjie Xiong', '<strong>Junjie Xiong</strong>');
  }
  return authors;
};

const getLinkIcon = (type) => {
  const icons = { PDF: '📄', video: '🎬', "Report": '🌐', Demo: '💻' };
  return icons[type] || '🔗';
};

onMounted(() => {
  ScrollReveal().reveal('.title-wrapper', { ...revealConfig, origin: 'bottom' });
  ScrollReveal().reveal('.paper-card', {
    ...revealConfig,
    interval: 200,
    // distance: 'px',
    origin: 'bottom'
  });
});
</script>

<style lang="less" scoped>

.publication {
  width: 80%;
  max-width: 1300px;
  margin: auto;
  padding: 100px 0;

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
    gap: 100px;

    .paper-card {
      display: flex;
      align-items: center;
      position: relative;
      width: 100%;

      &:hover {
        .image-inner {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        .info-card {
          transform: translateX(10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
        }
      }

      .image-section {
        flex: 0 0 55%;
        z-index: 1;
        
        .image-inner {
          position: relative;
          overflow: hidden;
          border-radius: 16px;
          transition: all 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
          box-shadow: 0 15px 35px rgba(0, 0, 0, 0.2);

          .system-image {
            width: 100%;
            display: block;
          }
        }
      }

      .info-card {
        flex: 0 0 55%;
        margin-left: -10%;
        background: @bg-card;
        backdrop-filter: blur(15px);
        -webkit-backdrop-filter: blur(15px);
        padding: 35px 40px 25px 40px;
        border-radius: 20px;
        border: 1px solid rgba(255, 255, 255, 0.1);
        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        z-index: 2;
        transition: all 0.5s ease;

        .award-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: @title-bg-color;
          padding: 6px 12px;
          border-radius: 8px;
          margin-bottom: 20px;
          .text { color: #d4a017; font-size: 13px; font-weight: 700; }
        }

        .paper-title {
          font-size: 22px;
          line-height: 1.4;
          color: @text-color-1;
          margin-bottom: 20px;
          font-style: italic;
        }

        .author-list {
          font-size: 15px;
          color: @text-color-2;
          margin-bottom: 25px;
          line-height: 1.6;
          /deep/ strong { color: @theme-color; }
        }

        .venue-info {
          display: flex;
          justify-content: space-between;
          gap: 20px;
          border-top: 1px solid rgba(0, 0, 0, 0.05);
          padding-top: 20px;

          .conference { font-size: 18px; font-weight: 700; color: @theme-color; }

          .links {
            display: flex;
            gap: 12px;
            height: 30px;
            .link-btn {
              text-decoration: none;
              font-size: 12px;
              font-weight: 700;
              color: @text-color-2;
              background: @title-bg-color;
              padding: 6px 14px;
              border-radius: 6px;
              transition: all 0.3s ease;
              &:hover {
                background: @theme-color;
                color: #fff;
                transform: translateY(-2px);
              }
            }
          }
        }
      }

      &.reverse {
        flex-direction: row-reverse;
        .info-card {
          margin-left: 0;
          margin-right: -10%;
        }
        &:hover .info-card { transform: translateX(-10px); }
      }
    }
  }
}

@media screen and (max-width: 1000px) {
  .publication {
    padding: 30px 0;
    .title-wrapper {
      margin-bottom: 40px;
      .title-bg { font-size: 40px; }
    }
    .content{
      gap: 50px;
    }
    .content .paper-card {
      flex-direction: column !important;
      .image-section { width: 100%; margin-bottom: -30px; }
      .info-card {
        width: 100%;
        margin: 0 !important;
        padding: 30px 20px;
        .paper-title{
          font-size: 18px;
        }
        .link-icon {
          display: none;
        }
        .venue-info .conference {
          font-size: 16px;
        }
      }
      &:hover {
        .image-inner {
          transform: translateY(-40px);
          
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }
        .info-card {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.12);
        }
      }
      &.reverse {
        &:hover .info-card { transform: translateY(-10px); }
      }
    }
  }
}
</style>
