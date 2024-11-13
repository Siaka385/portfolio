window.onload=()=>{
    var navs=document.querySelectorAll(".nav-link")
        navs.forEach((item)=>{
            item.addEventListener("click",()=>{

                  navs.forEach((items)=> items.removeAttribute("id"))


                    item.setAttribute("id","active")
            })
        })


        

}