document.addEventListener("DOMContentLoaded", function () {
    const cards = document.getElementsByClassName('rotate');

    let index = 0;
    cards[index].classList.replace('inactive','active')

    console.log(cards[index])

    function rotateCards() {

        cards[index].classList.replace('active','inactive')

        index=(index+1)%cards.length
        console.log(index)

        cards[index].classList.remove('inactive')
        cards[index].classList.add('active')
        console.log(cards[index])
    }

    cards[index].classList.replace('inactive','active')


    setInterval(rotateCards, 5000);
});