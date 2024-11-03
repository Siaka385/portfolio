window.onload=()=>{
    var navs=document.querySelectorAll(".nav-link")
        navs.forEach((item)=>{
            item.addEventListener("click",()=>{
                    item.style.color="red"
            })
        })

}