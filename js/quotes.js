const quotes = [
  {quote: "Ахринеть!", author: "Иван Архипович Вдовин"},
  {quote: "Тише едишь, дальше будишь!", author: "Народ"},
  {quote: "Кто не успел, тот опаздал!", author: "Народ"},
]

const quote = document.querySelector('.quote span:first-child')
const author = document.querySelector('.quote span:last-child')

const quotesIndex = Math.floor(Math.random() * quotes.length)
console.log(quotesIndex)

quote.textContent = quotes[quotesIndex].quote

author.textContent = quotes[quotesIndex].author