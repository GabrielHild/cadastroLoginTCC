'use strict'
const loginContainer = document.getElementById('login-container')

const moveOverlay = () => loginContainer.classList.toggle('move')

document.getElementById('open-register').addEventListener('click', moveOverlay)

// talvez nn use
document.getElementById('open-login').addEventListener('click', moveOverlay)
document.getElementById('back1').addEventListener('click', moveOverlay)
document.getElementById('open-register-mobile').addEventListener('click', moveOverlay)

//talvez nn use
document.getElementById('open-login-mobile').addEventListener('click', moveOverlay)

