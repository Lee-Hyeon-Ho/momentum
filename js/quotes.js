const quotes = [
  {
    quote: '우리는 나이가 들면서 변하는 게 아니다. 보다 자기 다워지는 것이다.',
    author: '린홀',
  },
  {
    quote: '인생에 뜻을 세우는데 적당한 때는 없다.',
    author: '볼드윈',
  },
  {
    quote: '실패는 잊어라. 하지만 그것이 준 교훈은 절대 잊으면 안 된다.',
    author: '하버트 개서',
  },
  {
    quote: '우리는 행복하기 때문에 웃는 게 아니라, 웃기 떄문에 행복하다.',
    author: '윌리엄 제임스',
  },
  {
    quote: '너 자신이 돼라. 다른 사람은 이미 있으니까.',
    author: '오스카 와일드',
  },
  {
    quote: '인생은 가까이서 보면 비극, 멀리서 보면 희극이다.',
    author: '찰리 채플린',
  },
  {
    quote: '승자는 시간을 관리하며 살고 패자는 시간에 끌러 산다.',
    author: 'J. 하비스',
  },
  {
    quote: '인생을 다시 산다면 다음번에는 더 많은 실수를 저지르리라.',
    author: '나딘 스테어',
  },
  {
    quote: '최고에 도달하려면 최저에서 시작해라.',
    author: 'P. 시루스',
  },
  {
    quote: '배움은 의무도, 생존도 아니다.',
    author: '애드워즈 데밍',
  },
]

const quote = document.querySelector('#quote span:first-child')
const author = document.querySelector('#quote span:last-child')

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)]

quote.innerText = todaysQuote.quote
author.innerText = ' - ' + todaysQuote.author
