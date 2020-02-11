listOfCards = document.querySelector("#product-list")
var arr = []
var cardsToDraw = ""
var pagesToDraw = ""
var counter = 1
var pagesButton = []
pagesList = document.querySelectorAll(".pages")

class cackCards {
    constructor(imgPath, title, desc) {
        this.imgPath = imgPath
        this.title = title
        this.desc = desc
    }
    drawCard() {
        cardsToDraw = ""
        for (let index = 0; index < arr.length; index++) {
            cardsToDraw += `<li class="cardsLi">
            <img src="${arr[index].imgPath}" alt="Round mud cake"
                class="img1" />
            <h4>${arr[index].title}</h4>
            <p>${arr[index].desc}</p>
            <p class="view"><span class="img">View</span></p>
        </li>`
        }
        listOfCards.innerHTML = cardsToDraw
    }
    change(e) {
        for (let index = 0; index < pagesButton.length; index++) {
            pagesButton[index].style.backgroundColor = "#CC3532"
        }
        e.target.style.backgroundColor = "grey"
    }
    drawPages() {
        pagesToDraw += `<li><input type="button" value="${counter}" class="pagesButton"></li>`
        pagesList[0].innerHTML = pagesToDraw
        pagesButton = document.querySelectorAll(".pagesButton")
        for (let index = 0; index < pagesButton.length; index++) {
            pagesButton[index].addEventListener("click", this.change.bind(this))
            pagesButton[index].addEventListener("click", this.drawCard.bind(this))
        }
    }
}
var card = new cackCards("images/products/Round-sponge-chocolate-smarties-cake-175.jpg", "Round mud cake", "Celebrate in style with our mud cake. Our unique recipe results in a lighter density cake just right to be encased in freshly whipped cream and grated chocolate.")
for (let index = 0; index < 7; index++) {
    if (arr.length == 0 || arr.length % 6 == 0) {
        card.drawPages()
        counter++
    }
    arr.push(card)
}
card.drawCard()