
var allLi = document.getElementsByClassName("side")
var sliderListItems = ["celebration", "childrens", "dessert", "savouries", "health", "cupcakes", "treats", "catering"];
var cateringID = document.querySelector("#cateringID")
cateringID.setAttribute('href', "../html/ourRange.html")
function cateringEvent(x) {
    localStorage.setItem("selected", "catering")
}
cateringID.addEventListener("click", cateringEvent)

function assignEvent(id) {
    function passParamaterToLocalStorage(x) {
        localStorage.setItem("selected", sliderListItems[id])
    }
    allLi[id].addEventListener("click", passParamaterToLocalStorage)
}

function changeHref() {
    for (var i = 0; i < allLi.length; i++) {
        allLi[i].setAttribute("id", sliderListItems[i])
        if (i > 1) {
            allLi[i].setAttribute('href', "../html/ourRange.html")
        } else {
            allLi[i].setAttribute('href', "../html/ourRangeFirst2Tabs.html")
        }
        assignEvent(i)
    }
}
changeHref()