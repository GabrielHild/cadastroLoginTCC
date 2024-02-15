'use strict'
const loginContainer = document.getElementById('register-container')

const moveOverlay = () => loginContainer.classList.toggle('move')

document.getElementById('open-part2').addEventListener('click', moveOverlay)

document.getElementById('back-part1').addEventListener('click', moveOverlay)
document.getElementById('back-part1-mobile').addEventListener('click', moveOverlay)

