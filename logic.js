// header toggle start
let menuBtn = document.getElementById("menuBtn")

menuBtn.addEventListener('click', () =>{
    document.querySelector('body').classList.toggle('menuActive')
    menuBtn.classList.toggle('fa-xmark')
})
// header toggle end
// =====================______________________________________________________=================================
// typing animation Start=================================================
let type = new Typed('.auto-input',{
    strings: ['Front-End Developer...!' , 'Digital-Art Creator...!', 'UI designer...!'],
    typeSpeed: 100,
    backSpeed: 50,
    backDelay: 2000,
    loop: true,

})
//typing animation End ====================================
// ======skill section ANIMATION starts==============
// get all the progress bars
const progressBars = document.querySelectorAll('.inner-line');

window.addEventListener('scroll', function(){
    //loop through each progress bar
    progressBars.forEach(function(progressBar){
        //get the bounding rectangle of the progress bar
        const rect = progressBar.getBoundingClientRect();

        //check if progress bar is visible on the screen
        if(rect.top < window.innerHeight && rect.bottom >= 0){
            //get the width of progress bar
            const width = progressBar.getAttribute('data-width');

            //animate the progress bar
            progressBar.style.width = width + '%';
        }

    });
})


// =======skill section ANIMATION  ends===============