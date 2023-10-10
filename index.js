document.querySelector(".cross").style.display="none"
document.querySelector(".hamburger").addEventListener("click",()=>{
    document.querySelector(".sidebar").classList.toggle("sidebarGo")
    if(  document.querySelector(".sidebar").classList.contains("sidebarGo")){
        document.querySelector(".ham").style.display="none"
        setTimeout(() => {
            
        
        document.querySelector(".cross").style.display="block"
    },570);
    }
    else{
        document.querySelector(".cross").style.display="none"
        setTimeout(() => {
            
        
             document.querySelector(".ham").style.display="block"
            }, 420);
    }
})

