function setup_css(){
  body = document.querySelector('body')
  body.style.textAlign = 'center'
  body.style.background = 'white'

  HEIGHT = window.innerHeight

  canvas = document.querySelector('canvas')
  
  top_padding = (HEIGHT - canvas.height)/2

  canvas.style.paddingTop = top_padding + 'px';


}

window.onload = function(){
  setup_css()
}