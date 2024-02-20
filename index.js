const menuBtn = document.querySelector('.menu-btn')
const navlinks = document.querySelector('navlinks')

menuBtn.addEventListener('click',()=>{
    navlinks.classLists.toggle('mobile-menu')
})