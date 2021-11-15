const btnTheme = document.getElementById('btnTheme');


const body = document.querySelectorAll('body *')

for (const element of body) {
    let elementClassName = element.className;
    const regexPattern = /dark:/i
    const hasDarkClass = regexPattern.test(elementClassName);

    if(hasDarkClass === true){
        element.classList.add('transition-this');
    }
    // console.log(elementClassName);
    // console.log(hasDarkClass);
    
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