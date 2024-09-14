const diceIcon = document.querySelector(".dice-icon");
const adviceId = document.querySelector('.advice-id')
const adviceElement = document.querySelector('.advice')
const baseUrl = 'https://api.adviceslip.com/advice/'

let count = 0

const adviceOnMount = async () => {
  const req = await fetch(baseUrl+`${++count}`)
  const data = await req.json()
  const id = data.slip.id
  const advice = data.slip.advice

  adviceId.textContent = id
  adviceElement.textContent = '"' + advice+ '"'
}

adviceOnMount()


diceIcon?.addEventListener("click", async () => {
  const req = await fetch(baseUrl+`${++count}`)
  const data = await req.json()
  const id = data.slip.id
  const advice = data.slip.advice

  adviceId.textContent = id
  adviceElement.textContent = '"' + advice+ '"'
});
