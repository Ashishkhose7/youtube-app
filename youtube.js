let cards = document.getElementsByClassName('card-div');
let ptag = document.getElementsByTagName('p')[0];
// let iframesrc = [
//   "https://www.youtube.com/embed/TGHqBX1YJRc",
//   "https://www.youtube.com/embed/Bczbdrp7ao8",
//   "https://www.youtube.com/embed/JKa05nyUmuQ",
//   "https://www.youtube.com/embed/OqGHwVnImJM",
//   "https://www.youtube.com/embed/NoxkNvz6Dqo",
//   "https://www.youtube.com/embed/yBwcGUlQdE0",
//   "https://www.youtube.com/embed/c_vB3VXC-ic"
// ]

// let content = [
//   "The Men who Built India | Untold Story of Tata | Dhruv Rathee",
//   "Argentina ● Road to World Cup Victory - 2022",
//   "KGF Chapter 2 Trailer|Hindi|Yash|Sanjay Dutt",
//   "How Dr. S. Jaishankar Became the Indian Brand Ambassador?",
//   "How Singapore became Asia’s No.1 Country? | Case Study |",
//   "The Kapil Sharma Show S2- Salman Promotes His Movie",
//   "India vs Pakistan: The SPACE Race! | Vikram Sarabhai Story by Abhi and Niyu",
// ]
let dbs = {
  iframesrc: [
    "https://www.youtube.com/embed/TGHqBX1YJRc",
    "https://www.youtube.com/embed/08alafhCRKU",
    "https://www.youtube.com/embed/JKa05nyUmuQ",
    "https://www.youtube.com/embed/OqGHwVnImJM",
    "https://www.youtube.com/embed/NoxkNvz6Dqo",
    "https://www.youtube.com/embed/yBwcGUlQdE0",
    "https://www.youtube.com/embed/c_vB3VXC-ic"
  ],
  content: [
    "The Men who Built India | Untold Story of Tata | Dhruv Rathee",
    "Mumbai Mafia | Official Trailer | Now Streaming | Netflix India",
    "KGF Chapter 2 Trailer|Hindi|Yash|Sanjay Dutt",
    "How Dr. S. Jaishankar Became the Indian Brand Ambassador?",
    "How Singapore became Asia's No.1 Country? | Case Study |",
    "The Kapil Sharma Show S2- Salman Promotes His Movie",
    "India vs Pakistan: The SPACE Race! | Vikram Sarabhai Story by Abhi and Niyu",
  ]
}

let cardarr = []
for (const key in cards) {
  console.log(cards[key])
  cardarr.push(cards[key])
  cards[key].onclick = () => {
    
    let iframe = document.getElementsByTagName('iframe')[0]
    iframe.src = dbs.iframesrc[cardarr.indexOf(cards[key])]
    ptag.innerHTML = dbs.content[cardarr.indexOf(cards[key])]
  }
}

// for (const key in cards) {
//   cardarr.push(cards[key])
//   cards[key].onclick = () => {
//     let iframe = document.getElementsByTagName('iframe')[0]
//     iframe.src = iframesrc[cardarr.indexOf(cards[key])]
//     ptag.innerHTML = content[cardarr.indexOf(cards[key])]
//   }
// }