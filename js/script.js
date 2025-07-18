window.onload = () => {
    //prevent image drag
    document.getElementById("images").setAttribute("draggable", false);

    //set active link
    var navs = document.querySelectorAll(".nav-link");
    navs.forEach((item) => {
        item.addEventListener("click", () => {
            navs.forEach((items) => items.removeAttribute("id"));

            item.setAttribute("id", "active");
        });
    });

    //name and greeting animation
    let greeting = document.getElementById("greetss");
    let namediv = document.querySelector("#name");
    let names = "TEDDY SIAKA";
    let greet = "Hi, It's ";
    let index = 1;
    setTimeout(() => {
        const time = setInterval(typingAnimation, 100);
        function typingAnimation() {
            greeting.textContent = greet.slice(0, index);
            index++;
            if (index > greet.length) {
                index = 1;
                clearInterval(time);
                printName();
            }
        }
    }, 3100);
    function printName() {
        let index = 0;

        let word = "";
        const time = setInterval(function () {
            let ch = names[index];
            word = word + ch;
            namediv.innerHTML = word;
            index++;

            if (index >= names.length) {
                index = 1;
                clearInterval(time);
                proffesion();
                return;
            }
        }, 50);
    }

    //proffession animation
    let IAM = document.getElementById("iam");
    let career = document.querySelector("#profession");
    let iamword = "I'm a ";
    let mycareer = "Software developer";
    function proffesion() {
        let index = 0;

        const time = setInterval(function () {
            IAM.innerHTML = iamword.slice(0, index);
            index++;

            if (index >= iamword.length) {
                clearInterval(time);
                index = 0;
                careers();
                return;
            }
        }, 50);
    }

    function careers() {
        const time = setInterval(function () {
            career.innerHTML = mycareer.slice(0, index);
            index++;

            if (index > mycareer.length) {
                clearInterval(time);
                index = 1;
                SocialLinkFloatup()
                return;
            }
        }, 50);
    }



    //social icons
    let githup=document.getElementById("git")
    let linkedin=document.getElementById("link")

    
    function SocialLinkFloatup(){
        document.querySelectorAll(".social").forEach((element) => {
            element.style.display = "block";
        });

        setTimeout(()=>{

            githup.classList.add("floating")
            linkedin.classList.add("floating")

            githup.classList.remove("moveup")
            linkedin.classList.remove("moveup")
            btnAnimate()
        },1500)
    }



    //BUTTON ANIMATIONS
    let btn=document.querySelector(".buttons")

    function btnAnimate(){
           btn.classList.remove("b")

           btn.classList.add("d-flex")
           btn.classList.add("justify-content-center")
           btn.classList.add("moveup")
    }

    // Add intersection observer for skill bars animation
    const skillBars = document.querySelectorAll('.progress-bar');
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const width = entry.target.style.width;
                entry.target.style.width = '0%';
                setTimeout(() => {
                    entry.target.style.width = width;
                }, 200);
            }
        });
    }, { threshold: 0.5 });

    skillBars.forEach(bar => skillObserver.observe(bar));

    // Add scroll-triggered animations for language tags
    const languageTags = document.querySelectorAll('.languages span');
    const tagObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animationPlayState = 'running';
            }
        });
    }, { threshold: 0.3 });

    languageTags.forEach(tag => {
        tag.style.animationPlayState = 'paused';
        tagObserver.observe(tag);
    });

//contact and email sending
    (function() {
        emailjs.init({
          publicKey: "G5S0EtznWQej2PFaN",
        });
    })();

    document.querySelector('.contact-form').addEventListener('submit', function(event) {
        event.preventDefault();
        emailjs.sendForm('service_e34t85l', 'template_2lmoen8', this)
            .then(() => {
                alert("Email sent successfully");
            }, (error) => {
                console.log('FAILED...', error);
            });
    });
};
