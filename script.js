const container = document.querySelector(".card_container");
const cards = Array.from(container.children);
const size = cards[0].getClientRects()[0].width;

//arrange the cards adjacent

cards.forEach((card, index) => {

    card.style.left = size * index + "px";

})


// move cards on clicks

document.querySelector(".right").addEventListener("click", () => {

    const currentCard = container.querySelector(".current");
    const nextCard = currentCard.nextElementSibling;
    moveCard(nextCard);
    currentCard.classList.remove("current");
    nextCard.classList.add("current");

})

const moveCard = (prevCard) => {
    const amount = prevCard.style.left;
    container.style.transform = "translateX(-" + amount + ")";

}


document.querySelector(".left").addEventListener("click", () => {

    const currentCard = container.querySelector(".current");
    const prevCard = currentCard.previousElementSibling;
    moveCard(prevCard);
    currentCard.classList.remove("current");
    prevCard.classList.add("current");

})





//mouse drags(working on this)

// const slider = document.querySelector(".card_container");
// const car = document.querySelector(".card_container");
// // console.log(slider)
// let isDown = false;
// let startX, scrollLeft;

// slider.addEventListener("mousedown", (e) => {

//     isDown = true;
//     car.classList.add("active");
//     startX = e.pageX - slider.offsetLeft;
//     scrollLeft = slider.scrollLeft;
// })

// slider.addEventListener("mouseleave", () => {
//     isDown = false;
//     car.classList.remove("active");
// })
// slider.addEventListener("mouseup", () => {
//     isDown = false;
//     car.classList.remove("active");

// })

// slider.addEventListener("mousemove", (e) => {

//     if (!isDown) return;
//     car.classList.add("active");
//     e.preventDefault();
//     const x = e.pageX - slider.offsetLeft;
//     // console.log(startX, x);
//     const walk = (x - startX) * 3;
//     slider.scrollLeft = scrollLeft - walk;

// })
















