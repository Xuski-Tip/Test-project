const hamb = document.querySelector("#hamb")
const popup = document.querySelector("#popup")
const body = document.body

hamb.addEventListener("click", hambHandler)

const updateScrollPercentage = function () {
    const heightOfWindow = window.innerHeight,
    contentScrolled = window.pageYOffset,
    bodyHeight = document.querySelector('.wrapper').offsetHeight,
    percentageVal = document.querySelector("#percentage-value")
    const total = bodyHeight - heightOfWindow
    percent = parseInt((contentScrolled/total) * 100)
    percentageVal.textContent =  percent
}
function hambHandler(e) {
    e.preventDefault()
    popup.classList.toggle("open")
    hamb.classList.toggle("active")
    body.classList.toggle("noscroll")
}
function renderPopup() {
    popup.appendChild(menu)
}
window.addEventListener('scroll', updateScrollPercentage)
window.onload = function() {
    document.body.style.overflow = 'hidden'
    setTimeout(() => {
        document.body.style.overflow = ''
        preloader.classList.add('preloader--hide')
    }, 1500);
}