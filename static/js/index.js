const familiar = document.getElementById('familiar')
const education = document.getElementById('education')
const activities = document.getElementById('activities')
const technologies = document.getElementById('technologies')

const items = [ familiar, education, activities, technologies ]

document.addEventListener('DOMContentLoaded', () => {

    const email = document.getElementById('email')
    const github = document.getElementById('github')
    const kaggle = document.getElementById('kaggle')
    const linkedin = document.getElementById('linkedin')

    const name = document.getElementById('name')
    const field = document.getElementById('field')
    const profile = document.getElementById('profile')

    const links = [ email, github, kaggle, linkedin ]

    field.classList.add('show2')

    links.forEach((link) => {

        link.classList.add('show')
        
    })

})

window.addEventListener('scroll', () => {

    const threshold = window.innerHeight * (75/100)

    items.forEach(item => {
        
        const pos = item.getBoundingClientRect()

        if (pos.top < threshold && pos.bottom >= 0) {

            item.classList.remove('hide')
            // item.classList.add('show')

        }

    });

})