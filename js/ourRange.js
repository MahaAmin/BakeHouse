listOfCards = document.querySelector("#product-list")
var celebrationArr = []
var childrenArr = []
var cardsToDraw = ""
var pagesToDraw = ""
var flag = "true"
var celebratonCounter = 1
var childrenCounter = 1
var counter
var pagesButton = []
pagesList = document.querySelectorAll(".pages")
children = document.querySelector("#Children")
celebration = document.querySelector("#celebration")
intro = document.querySelector("#intro")
var introStr = ""
beforeCakes = document.querySelector("#brforeCackes")
var beforeCakesStr = ""
beforeTable = document.querySelector("#beforeTable")
var beforeTableStr = ""
table = document.querySelector("#table")
var tableStr = ""

class cackCards {
    constructor(imgPath, title, desc) {
        this.imgPath = imgPath
        this.title = title
        this.desc = desc
    }
    drawFirstPageCard(e) {
        console.log(e);

        var arr = celebrationArr
        if (e == undefined || e.target.text == "Celebration Cakes") {
            flag = "true"
            cardsToDraw = ""
            for (let index = 0; index < 6; index++) {
                if (index == arr.length) {
                    break
                }
                cardsToDraw += `<li class="cardsLi">
                <img src="${arr[index].imgPath}" alt="Round mud cake"
                    class="img1" />
                <h4>${arr[index].title}</h4>
                <p>${arr[index].desc}</p>
                <p class="view"><span class="img">View</span></p>
            </li>`
            }
            listOfCards.innerHTML = cardsToDraw

        } else if (e.target.text == "Children's Cakes") {
            flag = "false"
            arr = childrenArr
            console.log(arr);

            cardsToDraw = ""
            var val = (e.target.value - 1) * 6
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
        } else {
            flag = "true"
            cardsToDraw = ""
            var val = (e.target.value - 1) * 6
            for (let index = val; index < val + 6 && index < arr.length; index++) {
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
    }
    change(e) {
        for (let index = 0; index < pagesButton.length; index++) {
            pagesButton[index].style.backgroundColor = "#CC3532"
        }
        e.target.style.backgroundColor = "grey"
    }
    drawPages(counter) {
        pagesToDraw += `<li><input type="button" value="${counter}" class="pagesButton"></li>`
        pagesList[0].innerHTML = pagesToDraw
        pagesButton = document.querySelectorAll(".pagesButton")
        for (let index = 0; index < pagesButton.length; index++) {
            pagesButton[index].addEventListener("click", this.change.bind(this))
            pagesButton[index].addEventListener("click", this.drawFirstPageCard.bind(this))
        }
    }
}
var CelibrationCard = new cackCards("images/products/Round-sponge-chocolate-smarties-cake-175.jpg", "Round mud cake", "Celebrate in style with our mud cake. Our unique recipe results in a lighter density cake just right to be encased in freshly whipped cream and grated chocolate.")
var ChildrenCard = new cackCards("images/products/Animal-cupcakes-pig-206.jpg", "DOLL CAKE (PINK)", "Our traditional doll cakes feature layers of frothy sponge and fresh cream, and a butter cream gown of your own design.")
for (let index = 0; index < 5; index++) {
    if (index == 0) {
        celebratonCounter = 1
        pagesToDraw = ""
    }
    if (celebrationArr.length == 0 || celebrationArr.length % 6 == 0) {
        CelibrationCard.drawPages(celebratonCounter)
        celebratonCounter++
    }
    celebrationArr.push(CelibrationCard)
}

children.addEventListener("click", function call(e) {
    for (let index = 0; index < 23; index++) {
        if (index == 0) {
            childrenCounter = 1
            pagesToDraw = ""
        }
        if (childrenArr.length == 0 || childrenArr.length % 6 == 0) {
            ChildrenCard.drawPages(childrenCounter)
            childrenCounter++
        }
        childrenArr.push(ChildrenCard)
    }
    celebration.classList.remove("active")
    children.classList.add("active")
    ChildrenCard.drawFirstPageCard(e)
})
celebration.addEventListener("click", function call(e) {
    for (let index = 0; index < 5; index++) {
        if (index == 0) {
            celebratonCounter = 1
            pagesToDraw = ""
        }
        if (celebrationArr.length == 0 || celebrationArr.length % 6 == 0) {
            CelibrationCard.drawPages(celebratonCounter)
            celebratonCounter++
        }
        celebrationArr.push(CelibrationCard)
    }
    children.classList.remove("active")
    celebration.classList.add("active")
    CelibrationCard.drawFirstPageCard(e)
})
CelibrationCard.drawFirstPageCard()