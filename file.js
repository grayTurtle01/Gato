function setup_css(){
  body = document.querySelector('body')
  body.style.textAlign = 'center'
  body.style.background = 'white'
}

window.onload = function(){
  setup_css()
  console.log('onload works')
}