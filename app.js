const extraMenu = document.getElementById('extra')
const extraIcon = document.getElementById('extraicon')

extraIcon.addEventListener('click', () => {
    if (extraMenu.classList.contains('hide')) {
        extraMenu.classList.remove('hide')
        extraMenu.classList.add('open')
    } else if (extraMenu.classList.contains('open')) {
        extraMenu.classList.remove('open')
        extraMenu.classList.add('hide')
    }
})

