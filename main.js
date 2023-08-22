// Gsap: Timeline
// Gsap Home



let textLogo = document.querySelector('.logo')
const tl = gsap.timeline({
    defaults: {
        ease: 'power4.inOut',
    },
});

textLogo.innerHTML = textLogo.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
)



tl.from('.letter', 0.7, {
    y: -50,
    x: 50,
    rotation: 20,
    autoAlpha: 0,
    stagger: 0.1,
})
.from ('.nav-list', 0.8, {
    y: -50,
    x: 50,
    rotation: 180,
    autoAlpha: 0,
    stagger: 0.1,
},'-=1')

.from('.home-left', 1.5, {
    x:"-100%",
    autoAlpha: 0
}, '-=1')

// particules, fond background :

particlesJS.load('particles-js', '/particles.json', function() {
    console.log('callback - particles.js config loaded');
});

// Animation sur competences :

let words = document.querySelectorAll(".word");
words.forEach((word) => {
    let letters = word.textContent.split("");
    word.textContent="",
    letters.forEach((letter) => {
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    })
});

let currentWordIndex = 0;
let maxWordIndex = words.length -1;
words[currentWordIndex].style.opacity = "1";

let changeText = () => {
    let currentWord = words[currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words[0] : words[currentWordIndex + 1];

    Array.from(currentWord.children).forEach((letter, i) => {
        setTimeout(() => {
            letter.className = "letter out";
        },i*80);
    });
    nextWord.style.opacity= "1";
    Array.from(nextWord.children).forEach((letter,i) => {
        letter.className = "letter behind";
        setTimeout(() => {
            letter.className = "letter in"
        },340 + i * 80);
    });
    currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText,3000);


// Gsap Section: About

gsap.registerPlugin(ScrollTrigger);

gsap.fromTo(".about-left", {
    scale:0.82,
    autoAlpha:0,
    x:"-100%"
}, {
    scale:1,
    autoAlpha:1,
    duration:1,
    x:0,
    scrollTrigger: {
        trigger:".about-left",
        start:"bottom bottom",
        end:"center center",
        scrub:1
    }
}
)


gsap.utils.toArray(".about-right span").forEach((span) => {
    gsap.fromTo(span, {
        letterSpacing: "10px",
        autoAlpha:0,
        x:300,
        skewX:65,
    },{
        letterSpacing:"0",
        autoAlpha:1,
        w:0,
        skewX:0,
        duration:1,
        scrollTrigger: {
            trigger: span,
            scrub:1,
            start: 'bottom bottom',
            end: 'center center',
        }
    }
    
    )
})




// Animation cards
//let animation = document.querySelectorAll('.animation');

//function showScroll() {
   // let scrollTop = document.documentElement.scrollTop;
    //for (let i = 0; i < animation.length; i++) {
        //let heightAnimation = animation[i].offsetHeight;
       // if(heightAnimation - -450 < scrollTop) {
         //   animation[i].style.opacity = 1;
          //  animation[i].classList.add("showUp")
       // }
   // }
//}
//window.addEventListener("scroll", showScroll);


// Cursor trail :

//let cursor = document.querySelector('#cursor');
//let body = document.querySelector('body');
//document.onmousemove = function(e) {
    // move cursor:
   // cursor.style.top = e.pageY/-4 +'px';
    //cursor.style.left = e.pageX/-4 +'px';

    // animate background :
    //body.style.backgroundPositionX = e.pageX/-4 +'px';
    //body.style.backgroundPositionY = e.pageY/-4 +'px';

    // add elemnts to body
    //let element = document.createElement('div');
    //element.className = 'element';
    //body.prepend(element);

    // move elements randomly across x or y axis :
    //element.style.left = cursor.getBoundingClientRect().x + 'px';
    //element.style.top = cursor.getBoundingClientRect().y + 'px';

    //setTimeout(function() {
       // let text = document.querySelectorAll('.element')[0],
       // directionX = Math.random() < .5 ? -1 : 1,
       // directionY = Math.random() < .5 ? -1 : 1

        //text.style.left = parseInt(text.style.left) - (directionX * (Math.random() * 200)) + 'px';
        //text.style.top = parseInt(text.style.top) - (directionY * (Math.random() * 200)) + 'px';
        //text.style.opacity = 0;
        //text.style.transform = 'scale(0.25)';
    //})
//}