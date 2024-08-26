let darkMode = true
const buttonToggle = document.getElementById('toggleMode')

buttonToggle.addEventListener('click', (event) =>{
  document.documentElement.classList.toggle('light')

  const mode = darkMode ? 'light' : 'dark'
  event.currentTarget.querySelector('span').textContent = `${mode} mode ativador!`

  darkMode = !darkMode
})