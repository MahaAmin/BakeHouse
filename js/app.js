var flag = 2;


var allAnchors = document.getElementsByClassName("homeSlider")

function assignEvent(i, id) {
    function passParamaterToLocalStorage(x) {
        localStorage.setItem("selected", sliderListItems[id])
    }

    allAnchors[i].removeEventListener("click", passParamaterToLocalStorage)
    allAnchors[i].addEventListener("click", passParamaterToLocalStorage)

}
var preBTN = document.getElementById("preBTN");
var nxtBTN = document.getElementById("nxtBTN");

var sliderListItems = ["celebration", "childrens", "dessert", "savouries", "health", "cupcakes", "treats", "catering"];
var sliderItemsIdx = 0;

function changeHref() {
    for (var i = 0; i < allAnchors.length; i++) {
        allAnchors[i].setAttribute("id", sliderListItems[i])
        if (i >= flag) {
            allAnchors[i].setAttribute('href', "html/ourRange.html")
        } else {
            allAnchors[i].setAttribute('href', "html/ourRangeFirst2Tabs.html")
        }
    }
}
for (let index = 0; index < allAnchors.length; index++) {
    assignEvent(index, index)
    changeHref()
}
var preAction = function () {
    if (sliderItemsIdx > 0) {
        var allAnchors = document.querySelectorAll(".mslider a")
            --sliderItemsIdx;
        for (var i = sliderItemsIdx; i < sliderItemsIdx + 6; ++i) {
            var img = allAnchors[i - sliderItemsIdx].querySelector("a li img")
            img.src = `images/all/${sliderListItems[i]}.jpg`
            var imgTxt = allAnchors[i - sliderItemsIdx].querySelector("a li p")
            imgTxt.textContent = `${sliderListItems[i]}`
        }
        assignEvent(i, i)
    }
}

var preAction = function () {
    if (sliderItemsIdx > 0) {
        var allAnchors = document.querySelectorAll(".homeSlider")
            --sliderItemsIdx;
        for (var i = sliderItemsIdx; i < sliderItemsIdx + 6; ++i) {
            var img = allAnchors[i - sliderItemsIdx].querySelector("a li img")
            img.src = `images/all/${sliderListItems[i]}.jpg`
            var imgTxt = allAnchors[i - sliderItemsIdx].querySelector("a li p")
            imgTxt.textContent = `${sliderListItems[i]}`
            assignEvent(i - sliderItemsIdx, i)
                ++flag
            changeHref()
        }
    }
}
preBTN.addEventListener("click", preAction)
var nxtAction = function () {
    if (sliderItemsIdx + 6 < sliderListItems.length) {
        var allAnchors = document.querySelectorAll(".homeSlider")
            ++sliderItemsIdx;
        for (var i = sliderItemsIdx; i < sliderItemsIdx + 6; ++i) {
            var img = allAnchors[i - sliderItemsIdx].querySelector("a li img")
            img.src = `images/all/${sliderListItems[i]}.jpg`
            var imgTxt = allAnchors[i - sliderItemsIdx].querySelector("a li p")
            imgTxt.textContent = `${sliderListItems[i]}`
            assignEvent(i - sliderItemsIdx, i)
                --flag
            changeHref();
        }
    }
}
nxtBTN.addEventListener("click", nxtAction)

var sliderImg = document.getElementById("sliderImg")
var sliderHeader = document.getElementById("sliderHeader")
var sliderTxt = document.getElementById("sliderTxt")
var sliderLink = document.getElementById("sliderLink")

var arr = [{
        header: "Cupcakes",
        txt: "For tea, school lunches, birthdays, weddings, baby showers and even corporate events, our cupcakes are the ideal treat for every occasion ",
        img: "images/s-celebration.jpg"
    },
    {
        header: "Children's Cakes",
        txt: "Our fully-customised, fun and friendly range of specialty cakes for children are guaranteed to bring a smile to the face of the birthday boy or girl ",
        img: "images/s-childrens.jpg"
    },
    {
        header: "Health Cakes",
        txt: "We realise it's not always about decadent desserts and celebrations. Sometimes you're just looking for a down-to-earth sweet treat to satisfy your appetite ",
        img: "images/s-health-cakes.jpg"
    },
    {
        header: "Savouries",
        txt: "Our four pastry chefs have a passion for, well, pastry! Great for parties, our bite-size savouries are also a convenient snack on the run ",
        img: "images/s-savouries.jpg"
    },
    {
        header: "Treats",
        txt: "We offer a huge range of delicacies, all faithfully recreated daily from Keith's original recipes and baked on site using only the freshest ingredients ",
        img: "images/s-treats.jpg"
    },
    {
        header: "Dessert Cakes",
        txt: "Make your get-together an occasion to remember with one of our amazing dessert cake selections ",
        img: "images/s-desserts.jpg"
    },
    {
        header: "Catering",
        txt: "When it comes to keeping your event fuss-free, there's no better choice than a selection of Keith Cakes' freshly-made catering meal options ",
        img: "images/s-catering.jpg"
    },
    {
        header: "Celebration Cakes",
        txt: "Our traditional celebration cakes are the perfect finishing touch to your special occasion. Make yours unique by selecting your base, size, colour, sides and message ",
        img: "images/s-celebration.jpg"
    },

]
var idx = 0;

function slide() {
    sliderHeader.textContent = arr[idx].header
    sliderImg.src = arr[idx].img
    sliderTxt.textContent = arr[idx].txt
        ++idx;
    if (idx == arr.length)
        idx = 0;

}
setInterval(slide, 3000)
changeHref()