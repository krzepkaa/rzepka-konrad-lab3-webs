let ball = document.querySelector('#ball')
let field = document.querySelector('#playfield')
let holes = document.querySelectorAll('.hole')
let finish = document.querySelector('#finalhole')
let info = document.querySelector('#info')
let maxY = field.clientHeight - ball.clientHeight
let maxX = field.clientWidth - ball.clientHeight
let timeStart = Date.now()



window.addEventListener('deviceorientation', ballhole)

function ballhole(e) {
  let x = e.beta
  let y = e.gamma

  ball.style.top  = (maxX*x/180 - 10) + "px"
  ball.style.left = (maxY*y/180 - 10) + "px"

  let ballPos = {
    top: ball.offsetTop,
    left: ball.offsetLeft
  }
  let checkpointPos = {
    top: finish.offsetTop,
    left: finish.offsetLeft
  }
  if (ballPos.top > checkpointPos.top - 20 
    && ballPos.top < checkpointPos.top + 20
    && ballPos.left > checkpointPos.left - 20
    && ballPos.left < checkpointPos.left + 20)
  {
  let timeStop = Date.now()
  let timer = 'You Won! Grats, your time is:' + ((timeStop - timeStart) / 1000).toFixed(1) + 'sec'

    infoAbout("Won a game", "green")
    infoAbout(timer, 280, 100)
    window.setTimeout(function(){
      location.reload()
    },1000)
   

  }

  function infoAbout(text, background, color, size, font){
    info.innerHTML = text
    info.style.background = background
    info.style.color = "black"
    info.style.size = '32px'
    info.style.font = 'Arial'
    window.setTimeout(function(){
      location.reload()
    },1000)

  }
  function checkLose(ball, holes){ 
    for(let i = 0; i < holes.length; i++){
        let hole = {
          top: holes[i].offsetTop,
          left: holes[i].offsetLeft
        }
        if (  ball.top > hole.top - 20
            && ball.top < hole.top + 20
            && ball.left > hole.left - 20
            && ball.left < hole.left + 20){
            return true
       }
    }
    
  }
  let lose = false
  lose = checkLose(ballPos, holes)

  if(lose)
  {
    let timeStop = Date.now()
  let timer = 'You lost!  Your time is:' + ((timeStop - timeStart) / 1000).toFixed(2) + 'sec'
    infoAbout("Game over!", "orange")
    infoAbout(timer ,280,100)
    window.setTimeout(function(){
      location.reload()
    },1000)
    
  }
}

