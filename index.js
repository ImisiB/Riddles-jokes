document.querySelector('.button')
  .addEventListener('click', () => {
    const riddleLink = "https://riddles-api.vercel.app/random"
    const getAPI = async() => {
      const response = await fetch(riddleLink)
      const data = await response.json()
      const riddle = data.riddle
      const answer = data.answer
      document.querySelector('.container')
        .innerHTML += `<button class="answer button">answer</button>`
      setTimeout(() => {

      document.querySelector('.riddle')
        .innerHTML = riddle
      }, 1000)
      document.querySelector('.answer')
        .addEventListener('click', () => {
          document.querySelector('.container').innerHTML += `<p>${answer}</p> <p class="refresh">Refresh page for another riddle</p>`
        })
    }
    getAPI()
  })
