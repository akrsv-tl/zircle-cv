import { TweenLite } from 'gsap';

const demo = { angle: 0 };
const demo1 = { angle1: 0 };

export const store = {
    debug: true,
    state: {
        ang: 0,
        ang1: 0,
        dist: 0,
        mov: TweenLite.to(demo, 700, {
          angle: 365,
          repeat: -1,
          onUpdate: function() {
            store.state.ang = demo.angle;
          }
        }),
        mov1: TweenLite.to(demo1, 700, {
          angle1: 365,
          repeat: -1,
          onUpdate: function() {
            store.state.ang1 = demo1.angle1;
          }
        }),
        ecosystem: [
            {
                name: 'Ссылки',
                viewName: 'links',
                icon: 'fas fa-link',
                elements: [
                    {
                        name: "Facebook",
                        url: "https://www.facebook.com/a.kartsev93",
                        icon: 'fab fa-facebook-f'
                    },
                    {
                        name: "GitHub",
                        url: "https://github.com/ASmartLynx",
                        icon: 'fab fa-github'
                    },
                    {
                        name: "Telegram",
                        url: "https://chat.vuejs.org/",
                        icon: 'fab fa-telegram-plane'
                    },
                    {
                        name: "LinkedIn",
                        url: "https://chat.vuejs.org/",
                        icon: 'fab fa-linkedin-in'
                    }
                  ]
            },
            {
                name: 'Опыт',
                viewName: 'experience',
                icon: 'fas fa-user-tie',
                elements: [
                  {
                    // name: 'Pixmove',
                    // dates: '03.12-04.12',
                    // position: 'Frontend-разработчик',
                    icon: "fab fa-qq",
                    text: 'Ghbdtn^ rfr ltkbirb>'
                  },
                  {
                    // name: 'QSoft',
                    // dates: '03.12-04.12',
                    // position: 'Ведущий frontend-разработчик',
                    icon: "fab fa-quora",
                    text: 'Ghbdtn^ rfr ltkbirb>'
                  },
                  {
                    // name: 'S8 Capital',
                    // dates: '03.12-04.12',                    
                    // position: 'Frontend developer',
                    icon: "fas fa-money-bill-alt",
                    text: 'Ghbdtn^ rfr ltkbirb>'
                  }
                ]
            },
            {
                name: 'Стек',
                viewName: 'stack',
                icon: 'fas fa-project-diagram',
                elements: [
                  {
                    name: "React.js",
                    url: "https://www.facebook.com/a.kartsev93",
                    icon: 'fab fa-react'
                  },
                  {
                    name: "Vue.js",
                    url: "https://www.facebook.com/a.kartsev93",
                    icon: 'fab fa-vuejs'
                  },
                  {
                    name: "D3.js",
                    url: "https://www.facebook.com/a.kartsev93",
                    icon: 'fas fa-chart-area'
                  },
                  {
                    name: "Ext.js",
                    url: "https://www.facebook.com/a.kartsev93",
                    icon: 'fas fa-table'
                  },
                  {
                    name: "SCSS, SASS",
                    url: "https://www.facebook.com/a.kartsev93",
                    icon: 'fab fa-sass'
                  },
                  {
                    name: "Facebook",
                    url: "https://www.facebook.com/a.kartsev93",
                    icon: 'fab fa-facebook-f'
                  },
                ]
            },
            {
                name: 'Настройки',
                viewName: 'settings',
                icon: 'fas fa-sliders-h'
            }
        ]
      }
}