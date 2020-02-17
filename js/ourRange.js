listOfCards = document.querySelector("#product-list")
var celebrationArr = []
var childrenArr = []
var cardsToDraw = ""
var pagesToDraw = ""
var flag = "true"
var celebratonCounter = 0
var childrenCounter = 0
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


if (localStorage.getItem(`Children's Cakes`)) {
    var LSchildrenArr = JSON.parse(localStorage.getItem(`Children's Cakes`))
} else {
    var LSchildrenArr = []
}

if (localStorage.getItem(`Celebration Cakes`)) {
    var LScelebrationArr = JSON.parse(localStorage.getItem(`Celebration Cakes`))
} else {
    var LScelebrationArr = []
}
var CelibrationCard
var ChildrenCard

function drawChildrensDetails() {
    introStr = "Our fully-customised, fun and friendly range of specialty cakes for children are guaranteed to bring a smile to the face of the birthday boy or girl"
    intro.innerHTML = introStr
    beforeCakesStr = `<a href="#">Our Range</a>  &#62; Children's Cakes`
    beforeCakes.innerHTML = beforeCakesStr
    beforeTableStr = `<a href="#">Our Range</a>  &#62; Children's Cakes`
    beforeTable.innerHTML = beforeTableStr
    tableStr = `<h4>Our Five-Step Ordering Process</h4>
    <p class="intro">Follow the five-step process to create the cake of your child's dreams. The final delicious result is limited only to by your imagination, but these are a few of our all time favourites.</p>
    <ol>
        <li><span>Choose your cake base - vanilla sponge, chocolate sponge or mud cake</span></li>
        <li><span>Choose your size</span></li>
        <li><span>Choose the colour of your icing</span></li>
        <li><span>Choose your sides - grated chocolate, nougat, flaked almonds or 100s and 1000s</span>
        </li>
        <li><span>Write your special message</span></li>
    </ol>`
    table.innerHTML = tableStr
}

function drawCelebrationDetails() {
    introStr = "Our traditional celebration cakes are the perfect finishing touch to your special occasion. Make yours unique by selecting your base, size, colour, sides and message"
    intro.innerHTML = introStr
    beforeCakesStr = `<a href="#">Our Range</a> &#62; Celebration Cakes`
    beforeCakes.innerHTML = beforeCakesStr
    tableStr = `<h4>Our Five-Step Ordering Process</h4>
    <p class="intro">Featuring three layers of airy sponge with a fresh cream centre, they're so easy to
        order using our simple five-step system.</p>
    <ol>
        <li><span>Choose your cake base - vanilla sponge, chocolate sponge or mud cake</span></li>
        <li><span>Choose your size</span></li>
        <li><span>Choose the colour of your icing</span></li>
        <li><span>Choose your sides - grated chocolate, nougat, flaked almonds or 100s and 1000s</span>
        </li>
        <li><span>Write your special message</span></li>
    </ol>`
    table.innerHTML = tableStr
}

class cackCards {
    constructor(imgPath, title, desc) {
        this.imgPath = imgPath
        this.title = title
        this.desc = desc
    }
    drawFirstPageCard(e) {
        var arr = celebrationArr
        if (e == undefined || e.target.text == "Celebration Cakes") {
            drawCelebrationDetails()
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

        } else if (e.target.text == "Children's Cakes" || childrenCounter > 0) {
            drawChildrensDetails()
            flag = "false"
            arr = childrenArr
            cardsToDraw = ""
            if (e.target.value >= 1) {
                var val = (e.target.value - 1) * 6
            } else {
                val = 0
            }
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
for (let index = 0; index < LScelebrationArr.length; index++) {
    if (index == 0) {
        celebratonCounter = 1
        pagesToDraw = ""
    }
    CelibrationCard = new cackCards(LScelebrationArr[index].img, LScelebrationArr[index].title, LScelebrationArr[index].desc)
    if (celebrationArr.length == 0 || celebrationArr.length % 6 == 0) {
        CelibrationCard.drawPages(celebratonCounter)
        celebratonCounter++
    }
    celebrationArr.push(CelibrationCard)
}

children.addEventListener("click", function call(e) {
    if (localStorage.getItem(`Children's Cakes`)) {
        var LSchildrenArr = JSON.parse(localStorage.getItem(`Children's Cakes`))
    } else {
        var LSchildrenArr = []
    }
    celebratonCounter = 0
    childrenArr = []
    for (let index = 0; index < LSchildrenArr.length; index++) {
        if (index == 0) {
            childrenCounter = 1
            pagesToDraw = ""
        }
        ChildrenCard = new cackCards(LSchildrenArr[0].img, LSchildrenArr[0].title, LSchildrenArr[0].desc)
        if (childrenArr.length == 0 || childrenArr.length % 6 == 0) {
            ChildrenCard.drawPages(childrenCounter)
            childrenCounter++
        }
        childrenArr.push(ChildrenCard)
    }
    celebration.classList.remove("active")
    children.classList.add("active")
    if (LSchildrenArr.length == 0) {
        drawChildrensDetails()
        cardsToDraw = ""
        cardsToDraw += `<li class="cardsLi">
        <h4>There are no cards</h4>
        </li>`
        listOfCards.innerHTML = cardsToDraw
    } else {
        ChildrenCard.drawFirstPageCard(e)
    }
})
celebration.addEventListener("click", function call(e) {
    if (localStorage.getItem(`Celebration Cakes`)) {
        LScelebrationArr = JSON.parse(localStorage.getItem(`Celebration Cakes`))
    } else {
        LScelebrationArr = []
    }
    childrenCounter = 0
    celebrationArr = []
    for (let index = 0; index < LScelebrationArr.length; index++) {
        if (index == 0) {
            celebratonCounter = 1
            pagesToDraw = ""
        }
        CelibrationCard = new cackCards(LScelebrationArr[index].img, LScelebrationArr[index].title, LScelebrationArr[index].desc)
        if (celebrationArr.length == 0 || celebrationArr.length % 6 == 0) {
            CelibrationCard.drawPages(celebratonCounter)
            celebratonCounter++
        }
        celebrationArr.push(CelibrationCard)
    }
    children.classList.remove("active")
    celebration.classList.add("active")
    if (LScelebrationArr.length == 0) {
        drawCelebrationDetails()
        cardsToDraw = ""
        cardsToDraw += `<li class="cardsLi">
                        <h4>There are no cards</h4>
                        </li>`
        listOfCards.innerHTML = cardsToDraw
    } else {
        CelibrationCard.drawFirstPageCard(e)
    }
})

if (LScelebrationArr.length == 0) {
    cardsToDraw = ""
    cardsToDraw += `<li class="cardsLi">
    <h4>There are no cards</h4>
    </li>`
    listOfCards.innerHTML = cardsToDraw
} else {
    CelibrationCard.drawFirstPageCard()
}
var selected = localStorage.getItem("selected")
if (selected == "childrens") {
    children.click()
    localStorage.removeItem("selected")
} else {
    localStorage.removeItem("selected")
}