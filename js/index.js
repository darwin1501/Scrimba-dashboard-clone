const btnTheme = document.getElementById('btnTheme');

btnTheme.addEventListener('click',()=>{
   const hasLigthIcon = btnTheme.classList.contains('bg-lightIcon');

   if(hasLigthIcon === true){
       btnTheme.classList.remove('bg-lightIcon')
       btnTheme.classList.add('bg-darkIcon')
   }else{
    btnTheme.classList.add('bg-lightIcon')
    btnTheme.classList.remove('bg-darkIcon')
   }
   
})