import {defineStore} from 'pinia'
import { computed, reactive } from 'vue'


export const useLanguageStore = defineStore('language', ()=>{
  let languageClass = localStorage.languageClass || "EN";
  const language = reactive({
    shanghaitech: {
      CN: "上海科技大学",
      EN: "Shanghaitech University"
    },
    about: {
      CN: "关于我",
      EN: "About"
    },
    education: {
      CN: "教育经历",
      EN: "Educations"
    },
    publication: {
      CN: "出版物",
      EN: "Publications"
    },
    honor: {
      CN: "所获荣誉",
      EN: "Honors"
    },
    hi: {
      CN: "你好,",
      EN: "Hi,"
    },
    im: {
      CN: "我是",
      EN: "I'm"
    },
    name: {
      CN: "熊俊杰",
      EN: "Junjie Xiong"
    },
    intro: [
      {
        CN: "我目前就读于",
        EN: "I am currently in my final year as an undergraduate student at "
      },
      {
        CN: "上海科技大学",
        EN: "Shanghaitech University"
      },
      {
        CN: "，是计算机科学与技术专业的一名大四本科生。我积极参与ViSeer LAB的工作，在",
        EN: ", majoring in Computer Science and Technology. I am actively involved in research at ViSeer LAB, under the supervision of "
      },
      {
        CN: "李权教授",
        EN: "Prof. Quan Li"
      },
      {
        CN: "的指导下开展学术研究。",
        EN: "."
      }
    ],
    highSchool: [
      {
        CN: "高中",
        EN: "High School"
      },
      {
        CN: "重庆市第一中学校",
        EN: "Chongqing No.1 Middle School"
      },
      {
        CN: "2018.9 - 2021.6",
        EN: "2018.9 - 2021.6"
      }
    ],
    bachelor: [
      {
        CN: "本科",
        EN: "Bachelor"
      },
      {
        CN: "上海科技大学",
        EN: "Shanghaitech University"
      },
      {
        CN: "计算机科学与技术",
        EN: "Computer Science and Technology"
      },
      {
        CN: "辅修金融学",
        EN: "Minored in Finance"
      },
      {
        CN: "2021.9 - 2025.6",
        EN: "2021.9 - 2025.6"
      }
    ],
    honorList:[
      {
        CN: "国家励志奖学金",
        EN: "National Encouragement Scholarship"
      },
      {
        CN: "优秀学生",
        EN: "Outstanding Student"
      },
      {
        CN: "产业实践优秀组员",
        EN: "Outstanding Industrial Practice Member"
      },
      {
        CN: "学生会优秀干事",
        EN: "Outstanding Student Union Offcer"
      },
    ]

  })


  const text = computed(()=>{
    const result = {};
    const languages = ['CN', 'EN'];
    languages.forEach(lang => {
      result[lang] = {}
      Object.keys(language).forEach(key => {
        if(!Array.isArray(language[key])){
          result[lang][key] = language[key][lang];
        }
        else{
          result[lang][key] = [];
          language[key].forEach(item => {
            result[lang][key].push(item[lang]);
          })
        }
      })
    })
    return result;
  })

  return { languageClass, text };

})
