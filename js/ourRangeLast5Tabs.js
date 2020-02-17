listOfCards = document.querySelector("#product-list")
var desertArr = []
var savouriesArr = []
var healthArr = []
var cupcakesArr = []
var treatsArr = []
var cateringArr = []
var cardsToDraw = ""
var pagesToDraw = ""
var flag = "true"
var dessertCounter = 0
var savouriesCounter = 0
var healthCounter = 0
var cupcakesCounter = 0
var treatsCounter = 0
var cateringCounter = 0
var counter
var pagesButton = []
pagesList = document.querySelectorAll(".pages")
dessert = document.querySelector("#Dessert")
savouries = document.querySelector("#Savouries")
health = document.querySelector("#Health")
cupcakes = document.querySelector("#Cupcakes")
treats = document.querySelector("#Treats")
catering = document.querySelector("#cateringID")
intro = document.querySelector("#intro")
var introStr = ""
beforeCakes = document.querySelector("#brforeCackes")
var beforeCakesStr = ""
beforeTable = document.querySelector("#beforeTable")
var beforeTableStr = ""
table = document.querySelector("#table")
var tableStr = ""
if (localStorage.getItem(`Dessert Cakes`)) {
    var LSDesertArr = JSON.parse(localStorage.getItem(`Dessert Cakes`))
} else {
    var LSDesertArr = []
}
if (localStorage.getItem(`Savouries`)) {
    var LSSavouriesArr = JSON.parse(localStorage.getItem(`Savouries`))
} else {
    var LSSavouriesArr = []
}
if (localStorage.getItem(`Health Cakes`)) {
    var LSHealthArr = JSON.parse(localStorage.getItem(`Health Cakes`))
} else {
    var LSHealthArr = []
}
if (localStorage.getItem(`Cupcakes`)) {
    var LSCupcakesArr = JSON.parse(localStorage.getItem(`Cupcakes`))
} else {
    var LSCupcakesArr = []
}

if (localStorage.getItem(`Treats`)) {
    var LSTreatsArr = JSON.parse(localStorage.getItem(`Treats`))
} else {
    var LSTreatsArr = []
}
if (localStorage.getItem(`Catering`)) {
    var LSCateringArr = JSON.parse(localStorage.getItem(`Catering`))
} else {
    var LSCateringArr = []
}
var dessertCard
var savouriesCard
var healthCard
var cupcakeCard
var treatsCard
var cateringCard

function drawDetails(intrParam, beforeCardsParam) {
    intro.innerHTML = intrParam
    beforeCakesStr = `<a href="#">Our Range</a>  &#62; ${beforeCardsParam}`
    beforeCakes.innerHTML = beforeCakesStr
}
class cackCards {
    constructor(imgPath, title, desc) {
        this.imgPath = imgPath
        this.title = title
        this.desc = desc
    }
    drawFirstPageCard(e) {
        var arr = desertArr
        if (e == undefined || e.target.text == "Dessert Cakes") {
            drawDetails("Make your get-together an occasion to remember with one of our amazing dessert cake selections", "Dessert Cakes")
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

        } else if (e.target.text == "Savouries" || savouriesCounter > 0) {
            drawDetails("Our four pastry chefs have a passion for, well, pastry! Great for parties, our bite-size savouries are also a convenient snack on the run", "Savouries")
            flag = "false"
            arr = savouriesArr
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
        } else if (e.target.text == "Health Cakes" || healthCounter > 0) {
            drawDetails("We realise it's not always about decadent desserts and celebrations. Sometimes you're just looking for a down-to-earth sweet treat to satisfy your appetite", "Health Cakes")
            flag = "false"
            arr = healthArr
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
        } else if (e.target.text == "Cupcakes" || cupcakesCounter > 0) {
            drawDetails("For tea, school lunches, birthdays, weddings, baby showers and even corporate events, our cupcakes are the ideal treat for every occasion", "Cupcakes")
            flag = "false"
            arr = cupcakesArr
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
        } else if (e.target.text == "Treats" || treatsCounter > 0) {
            drawDetails("We offer a huge range of delicacies, all faithfully recreated daily from Keith's original recipes and baked on site using only the freshest ingredients", "Treats")
            flag = "false"
            arr = treatsArr
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
        } else if (e.target.text == "Catering" || cateringCounter > 0) {
            drawDetails("We offer a huge range of delicacies, all faithfully recreated daily from Keith's original recipes and baked on site using only the freshest ingredients", "Treats")
            flag = "false"
            arr = cateringArr
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
for (let index = 0; index < LSDesertArr.length; index++) {
    if (index == 0) {
        dessertCounter = 1
        pagesToDraw = ""
    }
    dessertCard = new cackCards(LSDesertArr[index].img, LSDesertArr[index].title, LSDesertArr[index].desc)
    if (desertArr.length == 0 || desertArr.length % 6 == 0) {
        dessertCard.drawPages(dessertCounter)
        dessertCounter++
    }
    desertArr.push(dessertCard)
}
savouries.addEventListener("click", function call(e) {
    if (localStorage.getItem(`Savouries`)) {
        LSSavouriesArr = JSON.parse(localStorage.getItem(`Savouries`))
    } else {
        LSSavouriesArr = []
    }
    dessertCounter = 0
    healthCounter = 0
    cupcakesCounter = 0
    treatsCounter = 0
    cateringCounter = 0
    savouriesArr = []
    for (let index = 0; index < LSSavouriesArr.length; index++) {
        if (index == 0) {
            savouriesCounter = 1
            pagesToDraw = ""
        }
        savouriesCard = new cackCards(LSSavouriesArr[0].img, LSSavouriesArr[0].title, LSSavouriesArr[0].desc)
        if (savouriesArr.length == 0 || savouriesArr.length % 6 == 0) {
            savouriesCard.drawPages(savouriesCounter)
            savouriesCounter++
        }
        savouriesArr.push(savouriesCard)
    }
    dessert.classList.remove("active")
    savouries.classList.add("active")
    health.classList.remove("active")
    cupcakes.classList.remove("active")
    treats.classList.remove("active")
    catering.classList.remove("active")
    if (LSSavouriesArr.length == 0) {
        drawDetails("Our four pastry chefs have a passion for, well, pastry! Great for parties, our bite-size savouries are also a convenient snack on the run", "Savouries")
        cardsToDraw = ""
        cardsToDraw += `<li class="cardsLi">
        <h4>There are no cards</h4>
        </li>`
        listOfCards.innerHTML = cardsToDraw
    } else {
        savouriesCard.drawFirstPageCard(e)
    }
})
dessert.addEventListener("click", function call(e) {
    if (localStorage.getItem(`Dessert Cakes`)) {
        LSDesertArr = JSON.parse(localStorage.getItem(`Dessert Cakes`))
    } else {
        LSDesertArr = []
    }
    savouriesCounter = 0
    healthCounter = 0
    cupcakesCounter = 0
    treatsCounter = 0
    cateringCounter = 0
    desertArr = []
    for (let index = 0; index < LSDesertArr.length; index++) {
        if (index == 0) {
            dessertCounter = 1
            pagesToDraw = ""
        }
        dessertCard = new cackCards(LSDesertArr[index].img, LSDesertArr[index].title, LSDesertArr[index].desc)
        if (desertArr.length == 0 || desertArr.length % 6 == 0) {
            dessertCard.drawPages(dessertCounter)
            dessertCounter++
        }
        desertArr.push(dessertCard)
    }
    dessert.classList.add("active")
    savouries.classList.remove("active")
    health.classList.remove("active")
    cupcakes.classList.remove("active")
    treats.classList.remove("active")
    catering.classList.remove("active")
    if (LSDesertArr.length == 0) {
        drawDetails("Make your get-together an occasion to remember with one of our amazing dessert cake selections", "Dessert Cakes")
        cardsToDraw = ""
        cardsToDraw += `<li class="cardsLi">
        <h4>There are no cards</h4>
        </li>`
        listOfCards.innerHTML = cardsToDraw
    } else {
        dessertCard.drawFirstPageCard(e)
    }
})
health.addEventListener("click", function call(e) {
    if (localStorage.getItem(`Health Cakes`)) {
        LSHealthArr = JSON.parse(localStorage.getItem(`Health Cakes`))
    } else {
        LSHealthArr = []
    }
    dessertCounter = 0
    savouriesCounter = 0
    cupcakesCounter = 0
    treatsCounter = 0
    cateringCounter = 0
    healthArr = []
    for (let index = 0; index < LSHealthArr.length; index++) {
        if (index == 0) {
            healthCounter = 1
            pagesToDraw = ""
        }
        healthCard = new cackCards(LSHealthArr[index].img, LSHealthArr[index].title, LSHealthArr[index].desc)
        if (healthArr.length == 0 || healthArr.length % 6 == 0) {
            healthCard.drawPages(healthCounter)
            healthCounter++
        }
        healthArr.push(healthCard)
    }
    dessert.classList.remove("active")
    savouries.classList.remove("active")
    health.classList.add("active")
    cupcakes.classList.remove("active")
    treats.classList.remove("active")
    catering.classList.remove("active")
    if (LSHealthArr.length == 0) {
        drawDetails("We realise it's not always about decadent desserts and celebrations. Sometimes you're just looking for a down-to-earth sweet treat to satisfy your appetite", "Health Cakes")
        cardsToDraw = ""
        cardsToDraw += `<li class="cardsLi">
                        <h4>There are no cards</h4>
                        </li>`
        listOfCards.innerHTML = cardsToDraw
    } else {
        healthCard.drawFirstPageCard(e)
    }
})
cupcakes.addEventListener("click", function call(e) {
    if (localStorage.getItem(`Cupcakes`)) {
        LSCupcakesArr = JSON.parse(localStorage.getItem(`Cupcakes`))
    } else {
        LSCupcakesArr = []
    }
    dessertCounter = 0
    savouriesCounter = 0
    healthCounter = 0
    treatsCounter = 0
    cateringCounter = 0
    cupcakesArr = []
    for (let index = 0; index < LSCupcakesArr.length; index++) {
        if (index == 0) {
            cupcakesCounter = 1
            pagesToDraw = ""
        }
        cupcakeCard = new cackCards(LSCupcakesArr[index].img, LSCupcakesArr[index].title, LSCupcakesArr[index].desc)
        if (cupcakesArr.length == 0 || cupcakesArr.length % 6 == 0) {
            cupcakeCard.drawPages(cupcakesCounter)
            cupcakesCounter++
        }
        cupcakesArr.push(cupcakeCard)
    }
    dessert.classList.remove("active")
    savouries.classList.remove("active")
    health.classList.remove("active")
    cupcakes.classList.add("active")
    treats.classList.remove("active")
    catering.classList.remove("active")
    if (LSCupcakesArr.length == 0) {
        drawDetails("For tea, school lunches, birthdays, weddings, baby showers and even corporate events, our cupcakes are the ideal treat for every occasion", "Cupcakes")
        cardsToDraw = ""
        cardsToDraw += `<li class="cardsLi">
        <h4>There are no cards</h4>
                        </li>`
        listOfCards.innerHTML = cardsToDraw
    } else {
        cupcakeCard.drawFirstPageCard(e)
    }
})
treats.addEventListener("click", function call(e) {
    if (localStorage.getItem(`Treats`)) {
        LSTreatsArr = JSON.parse(localStorage.getItem(`Treats`))
    } else {
        LSTreatsArr = []
    }
    dessertCounter = 0
    savouriesCounter = 0
    healthCounter = 0
    cupcakesCounter = 0
    cateringCounter = 0
    treatsArr = []
    for (let index = 0; index < LSTreatsArr.length; index++) {
        if (index == 0) {
            treatsCounter = 1
            pagesToDraw = ""
        }
        treatsCard = new cackCards(LSTreatsArr[index].img, LSTreatsArr[index].title, LSTreatsArr[index].desc)
        if (treatsArr.length == 0 || treatsArr.length % 6 == 0) {
            treatsCard.drawPages(treatsCounter)
            treatsCounter++
        }
        treatsArr.push(treatsCard)
    }
    dessert.classList.remove("active")
    savouries.classList.remove("active")
    health.classList.remove("active")
    cupcakes.classList.remove("active")
    treats.classList.add("active")
    catering.classList.remove("active")
    if (LSTreatsArr.length == 0) {
        drawDetails("We offer a huge range of delicacies, all faithfully recreated daily from Keith's original recipes and baked on site using only the freshest ingredients", "Treats")
        cardsToDraw = ""
        cardsToDraw += `<li class="cardsLi">
                        <h4>There are no cards</h4>
                        </li>`
        listOfCards.innerHTML = cardsToDraw
    } else {
        treatsCard.drawFirstPageCard(e)
    }
})
catering.addEventListener("click", function call(e) {
    if (localStorage.getItem(`Catering`)) {
        LSCateringArr = JSON.parse(localStorage.getItem(`Catering`))
    } else {
        LSCateringArr = []
    }
    dessertCounter = 0
    savouriesCounter = 0
    healthCounter = 0
    cupcakesCounter = 0
    treatsCounter = 0
    cateringArr = []
    for (let index = 0; index < LSCateringArr.length; index++) {
        if (index == 0) {
            cateringCounter = 1
            pagesToDraw = ""
        }
        cateringCard = new cackCards(LSCateringArr[index].img, LSCateringArr[index].title, LSCateringArr[index].desc)
        if (cateringArr.length == 0 || cateringArr.length % 6 == 0) {
            cateringCard.drawPages(cateringCounter)
            cateringCounter++
        }
        cateringArr.push(cateringCard)
    }
    dessert.classList.remove("active")
    savouries.classList.remove("active")
    health.classList.remove("active")
    cupcakes.classList.remove("active")
    treats.classList.remove("active")
    catering.classList.add("active")
    if (LSCateringArr.length == 0) {
        drawDetails("When it comes to keeping your event fuss-free, there's no better choice than a selection of Keith Cakes' freshly-made catering meal options", "Catering")
        cardsToDraw = ""
        cardsToDraw += `<li class="cardsLi">
                        <h4>There are no cards</h4>
                        </li>`
        listOfCards.innerHTML = cardsToDraw
    } else {
        cateringCard.drawFirstPageCard(e)
    }
})

if (LSDesertArr.length == 0) {
    cardsToDraw = ""
    cardsToDraw += `<li class="cardsLi">
    <h4>There are no cards</h4>
    </li>`
    listOfCards.innerHTML = cardsToDraw
} else {
    dessertCard.drawFirstPageCard()
}
var selected = localStorage.getItem("selected")
switch (selected) {
    case "savouries":
        savouries.click()
        localStorage.removeItem("selected")
        break;
    case "health":
        health.click()
        localStorage.removeItem("selected")
        break;
    case "cupcakes":
        cupcakes.click()
        localStorage.removeItem("selected")
        break;
    case "treats":
        treats.click()
        localStorage.removeItem("selected")
        break;
    case "catering":
        catering.click()
        localStorage.removeItem("selected")
        break;
    default:
        localStorage.removeItem("selected")
        break;
}
if (performance.navigation.type == 1) {
    window.location = "../html/ourRangeFirst2Tabs.html";
}