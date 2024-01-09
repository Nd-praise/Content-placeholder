const header = document.getElementById('header')
const title = document.getElementById('title')
const excerpt = document.getElementById('excerpt')
const profile_img = document.getElementById('profile_img')
const Name = document.getElementById('Name')
const date = document.getElementById('date')

const animated_bgs = document.querySelectorAll('.animated-bg')
const animated_bgs_texts = document.querySelectorAll('.animated-bg-text')

// we used setTimeout to call in the function
setTimeout(getData, 2500)

function getData() {
    title.innerHTML =  'Lorem ipsum dolor sit amet'
    excerpt.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, libero.'
    profile_img.innerHTML = '<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" />'
    Name.innerHTML = 'john Doe'
    date.innerHTML = ' Oct 08, 2020'

    animated_bgs.forEach((bg) => bg.classList.remove('animated-bg'))
    animated_bgs_texts.forEach((bg) => bg.classList.remove('animated-bg-text'))
}
