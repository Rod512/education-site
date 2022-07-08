window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('window_scroll',window.scrollY > 0)
})

// =====faq=====//

const faqs = document.querySelectorAll('.faq')

faqs.forEach(faq => {
    faq.addEventListener('click', () =>{
        faq.classList.toggle('open')

        let icon = faq.querySelector('.faq_icon i')

        if(icon.className === 'fa-solid fa-plus'){
            icon.className = 'fa-solid fa-minus'
        }else{
            icon.className = 'fa-solid fa-plus'
        }
    })
});

// =====faq=====//

const menu = document.querySelector(".nav_menu")
const menuBtn = document.querySelector("#open-menu-btn")
const closeBtn = document.querySelector("#close-menu-btn")

const opennav = () => {
    menu.style.display = 'flex'
    closeBtn.style.display = "inline-block"
    menuBtn.style.display = 'none'
}

const closenav = () => {
    menu.style.display = 'none'
    closeBtn.style.display = "none"
    menuBtn.style.display = 'inline-block'
}

menuBtn.addEventListener('click', opennav)
closeBtn.addEventListener('click',closenav)
// 