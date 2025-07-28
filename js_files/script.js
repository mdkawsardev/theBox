// This operation is for show/hide of navbar
let header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        header.classList.add('sticky');
    }
    if (window.scrollY === 0) {
        header.classList.remove('sticky');
    }
})
// For active while link will be clicked // Menubar links
let menuLinks = document.querySelectorAll('.link');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menuLinks.forEach(l => {
            l.classList.remove('active');
            link.classList.add('active')
        })
    })
})
// This operation is for banner slider
let nextBtn = document.getElementById('Next');
let prevBtn = document.getElementById('Back');
let itemBox = document.querySelector('.banner_slider');
let projects = document.querySelector('.projects');

const nextSlide = () => {
    let item = document.querySelectorAll('.text');
    itemBox.appendChild(item[0]);
    itemBox.classList.add('next')
    itemBox.classList.remove('prev')
    let shadows = document.querySelectorAll('.shadow');
    projects.appendChild(shadows[0])
    projects.classList.add('fadeIn')
    projects.classList.remove('fadeOut')
}

const prevSlide = () => {
    let item = document.querySelectorAll('.text');
    itemBox.prepend(item[item.length - 1]);
    itemBox.classList.add('prev')
    itemBox.classList.remove('next')
    let shadows = document.querySelectorAll('.shadow');
    projects.prepend(shadows[shadows.length - 1])
    projects.classList.add('fadeOut')
    projects.classList.remove('fadeIn')
}
nextBtn.addEventListener('click', () => {
    nextSlide();
})

prevBtn.addEventListener('click', () => {
    prevSlide()
})

// Project section's operation here
// This operation is for project list active
let category = document.querySelectorAll('.category');
category.forEach(cat => {
    cat.addEventListener('click', () => {
        category.forEach(k => {
            k.classList.remove('active');
        })
        cat.classList.add('active');
        // This operation is for filtering items
        let list = cat.getAttribute('data-list');
        let items = document.querySelectorAll('.item');
        items.forEach(item => {
            item.classList.add('hide');
            item.classList.remove('active');
            if(item.getAttribute('data-item') === list || list === 'all') {
                item.classList.add('active');
                item.classList.remove('hide');
            }
        })
    })
})