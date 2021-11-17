const btnTheme = document.getElementById('btnTheme');


// get all elements in the body
const body = document.querySelectorAll('body *')
// add transition for every element that has dark mode version
for (const element of body) {
    let elementClassName = element.className;
    const regexPattern = /dark:/i
    const hasDarkClass = regexPattern.test(elementClassName);

    if(hasDarkClass === true){
        element.classList.add('transition-this');
    }    
}

btnTheme.addEventListener('click',()=>{
   const hasLigthIcon = btnTheme.classList.contains('bg-lightIcon');
   const html = document.querySelector('html');
   if(hasLigthIcon === true){
       btnTheme.classList.remove('bg-lightIcon')
       btnTheme.classList.add('bg-darkIcon')
       html.classList.add('dark')
   }else{
    btnTheme.classList.add('bg-lightIcon')
    btnTheme.classList.remove('bg-darkIcon')
    html.classList.remove('dark')
   }
})