import {
  createElement,
  createHeader,
} from '../../script/layout'

const page = document.querySelector('.page')

const header = createHeader()
page.append(header)

const title = createElement('h1', 'title', "Ком'юніті")
page.append(title)

// const POST_LIST = [
//   {
//     category: [
//       { text: 'Важливо', id: 1 },
//       { text: 'Нова', id: 2 },
//     ],
//     info: 'До біса планувальник, наймаємо дизайнера і готуємося до презентації, як Джобс',
//     date: '25.01',
//     viewed: false,
//   },
//   {
//     category: [{ text: 'Нова', id: 2 }],
//     info: 'Ми хотіли щоб у цьому чаті було близько 150 людей щоб зробити якісний пак самопрезентацій',
//     date: '24.01',
//     viewed: true,
//   },
// ]

// const createPost = () => {
//   const postList = createElement('main', 'post__list')

//   POST_LIST.forEach((postData) => {
//     const post = createElement(
//       'div',
//       postData.viewed
//         ? 'post button post--viewed'
//         : 'post button',
//     )
//     const postHeader = createElement('div', 'post__header')
//     const categoryList = createElement(
//       'div',
//       'post__category-list',
//     )

//     postData.category.forEach((category) => {
//       const categorySpan = createElement(
//         'span',
//         `post__category post__category--${category.id}`,
//         category.text,
//       )
//       categoryList.append(categorySpan)
//     })

//     const dateSpan = createElement(
//       'span',
//       'post__date',
//       postData.date,
//     )
//     postHeader.append(categoryList, dateSpan)

//     const infoParagraph = createElement(
//       'p',
//       'post__info',
//       postData.info,
//     )
//     post.append(postHeader, infoParagraph)

//     postList.append(post)
//   })

//   return postList
// }

// const post = createPost()
// page.append(post)

const TABS = [
  { text: 'База знань', id: 1 },
  { text: 'Інформація', id: 2 },
]

const createTabs = () => {
  const blockTabs = createElement('div', 'block__tabs')

  TABS.forEach((tabsData) => {
    const tbs = createElement(
      'button',
      `tabs tabs--${tabsData.id}`,
      tabsData.text,
    )
    blockTabs.append(tbs)
  })
  return blockTabs
}

const tabs = createTabs()
page.append(tabs)

const card = createElement('div', 'card')
page.append(card)

const titleImg = createElement('img')
titleImg.src = '/img/head_img.jpg'
page.append(titleImg)

const titleCard = createElement(
  'span',
  'card__title',
  'Що таке база знань?',
)
page.append(titleCard)

const cardDescription = createElement(
  'p',
  'card__discription',
  'База знаний — база данных, содержащая правила вывода и информацию о человеческом опыте и знаниях в некоторой предметной области. В самообучающихся системах база знаний также содержит информацию, являющуюся результатом решения предыдущих задач',
)
page.append(cardDescription)

const cardButton = createElement(
  'button',
  'button card__button',
  "Перейти до ком'юніті у Телеграм",
)
page.append(cardButton)
