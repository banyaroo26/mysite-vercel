const familiar = document.getElementById('familiar')
const education = document.getElementById('education')
const activities = document.getElementById('activities')
const technologies = document.getElementById('technologies')

const items = [ familiar, education, activities, technologies ]

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