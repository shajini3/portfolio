
var typed = new Typed(".text", {
    strings: ["Programming" , "Machine Learning" , "Web Development"],
    typeSpeed:100,
    backSpeed:100,
    backDelay:1000,
    loop:true
});


const toTop = document.querySelector(".top");
window.addEventListener("scroll",() =>{
    if (window.pageYOffset > 100){
        toTop.classList.add("active");
    }
    else{
        toTop.classList.remove("active");
    }
})

document.addEventListener('DOMContentLoaded', function() {
    const aboutSection = document.querySelector('.about');
  
    // Function to add the 'show' class for the fade-in animation
    function showAboutSection() {
      aboutSection.classList.add('show');
    }
  
    // Trigger the function after a delay (you can adjust the delay as needed)
    setTimeout(showAboutSection, 500);
  });