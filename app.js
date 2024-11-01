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

const hiddenElements = document.querySelectorAll('.card-img')
hiddenElements.forEach((el) => observer.observe(el));
