const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show');
        } 
    }); 
}, {   
    threshold: 0.15         
});
console.log('nigge')

const hiddenElements = document.querySelectorAll('.card-img')
hiddenElements.forEach((el) => observer.observe(el));



const navEl = document.querySelectorAll('.navbar')
window.addEventListener('scroll', () => {
    if(window.scrollY >= 56){
        navEl.classList.add('navbar-scrolled');
        navEl.classList.remove('bg-transparent');
    }
});
