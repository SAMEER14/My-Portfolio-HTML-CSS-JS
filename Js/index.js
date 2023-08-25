
const heroSection = document.querySelector(".section-hero");
/**======================================
 * Creating a sticky reponsive navbar component 
 ======================================*/

const observer = new IntersectionObserver(
  (entries) => {
  const ent = entries[0];
  !ent.isIntersecting ? 
  document.body.classList.add("sticky") : 
  document.body.classList.remove("sticky")
  }, 
   {
   root:null, threshold: 0
   });

observer.observe(heroSection);

/**======================================
 * Creating a portfolio tabbed component
 ======================================*/

const p_btns = document.querySelector(".p-btns"); //parent container
const p_btn = document.querySelectorAll(".p-btn"); //reference for images
const p_img_elem = document.querySelectorAll(".img-overlay");

p_btns.addEventListener("click", (e) => {
    const p_btn_clicked = e.target; //we get the target on which button we clicked
    // console.log(p_btn_clicked); //this gives our button , which is clicked , so we can now target it

    if(!p_btn_clicked.classList.contains('p-btn')) return;

    p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));

    p_btn_clicked.classList.add("p-btn-active");
  
    const btn_num = p_btn_clicked.dataset.btnNum;

    // console.log(btn_num);

    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);

    p_img_elem.forEach((curElem) => {
        curElem.classList.add("p-image-not-active");
    })

    img_active.forEach((curElem) => {
        curElem.classList.remove("p-image-not-active");
    })
});

// Swiper js code
      // var swiper = new Swiper(".mySwiper", {
      new Swiper(".mySwiper", {
        slidesPerView: 2,
        spaceBetween: 30,
        autoplay:{
            delay:2500,
            // disableOnInteraction: false, 
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });


/*
// creating swiper to 1 
const myJsmedia = (widthSize) => {
  if(widthSize.matches){
    new Swiper(".mySwiper", {
      slidesPerView: 1,
      spaceBetween: 30,
    });
  }
  else{
    new Swiper(".mySwiper", {
      slidesPerView: 2,
      spaceBetween: 30,
    });
  }
}

const widthSize = window.matchMedia("(max-width: 391px)");
// Call listner function at run time
widthSize(widthSize);
// Attach listener function on state changes
widthSize.addEventListener("change", myJsmedia);
*/

const myJsmedia = (widthSize) => {
  let swiperConfig;

  if (widthSize.matches) {
    swiperConfig = {
      slidesPerView: 1,
      spaceBetween: 30,
    };
  } else {
    swiperConfig = {
      slidesPerView: 2,
      spaceBetween: 30,
    };
  }

  new Swiper(".mySwiper", swiperConfig);
}

const widthSize = window.matchMedia("(max-width: 408px)");

// Call the listener function initially
myJsmedia(widthSize);

// Attach listener function on state changes
widthSize.addEventListener("change", (event) => {
  myJsmedia(event.matches);
});

// ----------------------------------
// Creating bottom to top HTML and styling it
//with help of DOM we can create it
//scroll to top button

const footerElem = document.querySelector(".section-footer");
const scrollElement = document.createElement("div"); //created the element
scrollElement.classList.add("scrollTop-style"); //added class list
scrollElement.innerHTML = `<ion-icon name="arrow-up-outline" class="scroll-top"></ion-icon>`; //what to display in that div we created 
footerElem.after(scrollElement)//add icon in HTML, but first target the section from HTML where we need our tag
//functionality for this -> on click function 
const scrollTop = () => {
  heroSection.scrollIntoView({behavior: "smooth"})
};
scrollElement.addEventListener("click", scrollTop);


// ======================Animated Number on scroll===============

//lets target all number together and animate it together

/*
const counterNumber = document.querySelectorAll(".counter-numbers");
const speed = 10;

counterNumber.forEach((curElem) => {
  const updateNumber = () => {
    //50 /25000 / 50
    const targetNumber = parseInt(curElem.dataset.number);
    // console.log(curElem);
    // console.log(targetNumber);

    // initial Num is 0
    const initialNum = parseInt(curElem.innerText);
    // console.log(initialNum); 

    const incrementNumber = Math.trunc(targetNumber/ speed);
    // console.log(incrementNumber);

    if(initialNum < targetNumber) {
      curElem.innerText = `${initialNum + incrementNumber}+`;
      setTimeout(updateNumber, 1);
    }
  };
  updateNumber();
}
);

// code pasted insisde the intersection ibserver method
*/

document.addEventListener('DOMContentLoaded', () => {
  // Your Intersection Observer code here

  const workSection = document.querySelector('.section-work-data');
  const workObserver = new IntersectionObserver( (entries, observer) => {
  const [entry] = entries;
  if(!entry.isIntersecting) return;
  
    const counterNumber = document.querySelectorAll(".counter-numbers");

    const speed = 10;

    counterNumber.forEach((curElem) => {
      const updateNumber = () => {
        const targetNumber = parseInt(curElem.dataset.number);

        const initialNum = parseInt(curElem.innerText);

        const incrementNumber = Math.trunc(targetNumber/ speed);

        if(initialNum < targetNumber) {
          curElem.innerText = `${initialNum + incrementNumber}+`;
          setTimeout(updateNumber, 50);
        }
      };
      updateNumber();
    }
    );

    observer.unobserve(workSection);
  },
 {
  root: null,
  threshold: 0,
  rootMargin: '0% 0% -50% 0%', // Adjust this as needed
}
);

workObserver.observe(workSection);

});

/**======================================
 * Creating a responsive navbar for other devices
 ======================================*/

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerElem = document.querySelector(".header");

mobile_nav.addEventListener('click', () => {
  headerElem.classList.toggle('active');
} )

/**======================================
 * Lazy Loading Image
 ======================================*/
// image target using lazy loading image 

// /* comment start

const imgRef = document.querySelector("img[data-src]");

const lazyImage = (entries) => {
  const[entry] = entries;
  // for each to target all images => entries.forEach
  // console.log(entry);

  if(!entry.isIntersecting) 
  return;
  //false then simply return

  // else
  entry.target.src = imgRef.dataset.src;
  
  // console.log(entry.target.dataset.src)

  // const newImageSrc = entry.target.dataset.src;
  // if (newImageSrc) {
  //       entry.target.src = newImageSrc; // Set the src attribute using dataset value
  //       entry.target.removeAttribute('data-src');
  //       observer.unobserve(entry.target); // Stop observing once the image is changed
  //     }

};

// const imgObserver = new IntersectionObserver( () => {},
// adding direct function here -> another method to do


const imgObserver = new IntersectionObserver( lazyImage,
{
  root: null,
  threshold: 0
});

imgObserver.observe(imgRef);

// comment end */
