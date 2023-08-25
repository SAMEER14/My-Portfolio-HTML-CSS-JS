
const heroSection = document.querySelector(".section-hero");

/**======================================
 * Creating a portfolio tabbed component
 ======================================*/

// When to use document.querySelector and document.querySelectorAll
// when same class name use multiple times then use document.querySelectorAll

const p_btns = document.querySelector(".p-btns"); //parent container
const p_btn = document.querySelectorAll(".p-btn"); //reference for images
const p_img_elem = document.querySelectorAll(".img-overlay");

// targeting the button
//so user clicks the one of the three button or click outside so add eventlistener on
//parent container p_btns

//with the help of e.target then that particular is our target i.e the button value
//in which button we clicked

p_btns.addEventListener("click", (e) => {
    const p_btn_clicked = e.target; //we get the target on which button we clicked
    // console.log(p_btn_clicked); //this gives our button , which is clicked , so we can now target it

    if(!p_btn_clicked.classList.contains('p-btn')) return;

    p_btn.forEach((curElem) => curElem.classList.remove("p-btn-active"));
    // p_btn.forEach((curElem) => {
    //   curElem.classList.remove("p-btn-active")
    // });

    // first we remove the active then on click that button we active it again

    // p_btn_clicked.forEach((curElem) => curElem.classList.add("p-btn-active"))
    p_btn_clicked.classList.add("p-btn-active");

    // to find the number in data arr => data-btn-num="1" => p-btn--1
    // const btn_num = p_btn_clicked.dataset.btNum;\
    // using dataset method to get that number and 
    // to write we have to use camel case of data-btn-num => btnNum
    
    const btn_num = p_btn_clicked.dataset.btnNum;

    // console.log(btn_num);

    // targeting the image with the number when clicked on button
    //p_img_elem;
    //p-btn--1 => `.p-btn--${btn_num}` => using back tick because using template literal
    const img_active = document.querySelectorAll(`.p-btn--${btn_num}`);
    //so from here we get the images which have same btnNum when clicked
    // we will hide the rest and rest will automatically shown

    p_img_elem.forEach((curElem) => {
        curElem.classList.add("p-image-not-active");
    })

    img_active.forEach((curElem) => {
        curElem.classList.remove("p-image-not-active");
    })
});

/**======================================
 * Creating a responsive navbar for other devices
 ======================================*/

const mobile_nav = document.querySelector(".mobile-navbar-btn");
const headerElem = document.querySelector(".header");

mobile_nav.addEventListener('click', () => {
  headerElem.classList.toggle('active');
} )

