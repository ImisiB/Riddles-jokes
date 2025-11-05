document.querySelector('.button')
  .addEventListener('click', () => {
    const riddleLink = "https://riddles-api.vercel.app/random"
    const getAPI = async() => {
      const response = await fetch(riddleLink)
      const data = await response.json()
      const riddle = data.riddle
      const answer = data.answer
      document.querySelector('.container')
        .innerHTML += `<button class="answer">answer</button>`
      setTimeout(() => {

      document.querySelector('.riddle')
        .innerHTML = riddle
      }, 1000)
      document.querySelector('.answer')
        .addEventListener('click', () => {
          document.querySelector('.container').innerHTML += `<p>${answer}</p>`
        })
      document.querySelector('.refresh').innerText = 'Refresh page for another riddle'
    }
    getAPI()
  })

  document.querySelector('.joke-button')
    .addEventListener('click', () => {
      const jokeLink = "https://official-joke-api.appspot.com/jokes/programming/random"
      const getAPI = async() => {
        const response = await fetch(jokeLink)
        const data = await response.json()
        const setup = data[0].setup
        const punchline = data[0].punchline
        console.log(punchline);
        console.log(setup)

        document.querySelector('.setup').innerHTML = setup
        setTimeout(() => {
          document.querySelector('.punchline').innerHTML = punchline
        }, 2000)
      document.querySelector('.refresh').innerText = 'Refresh page for another joke'
      }
      getAPI()
    })