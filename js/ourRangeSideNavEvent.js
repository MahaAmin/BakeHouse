var ourRangeFirst2Tabs = document.getElementsByClassName("side0")
var ourRangeLastt6Tabs = document.getElementsByClassName("side1")
var sliderListItems = ["celebration", "childrens", "dessert", "savouries", "health", "cupcakes", "treats", "catering"];
var cateringID = document.querySelector("#cateringID1")
if (cateringID != null) {
    function cateringEvent(x) {
        localStorage.setItem("selected", "catering")
    }
    cateringID.addEventListener("click", cateringEvent)

}
function assignEvent(id, allLi) {
    function passParamaterToLocalStorage(x) {
        if (allLi == ourRangeLastt6Tabs) {
            localStorage.setItem("selected", sliderListItems[id + 2])
        } else {
            localStorage.setItem("selected", sliderListItems[id])
        }
    }
    allLi[id].addEventListener("click", passParamaterToLocalStorage)
}
function OurRangeFirst2Tabs() {
    for (var i = 0; i < ourRangeFirst2Tabs.length; i++) {
        assignEvent(i, ourRangeFirst2Tabs)
    }
}
function OurRangeLastt6Tabs() {
    for (var i = 0; i < ourRangeLastt6Tabs.length; i++) {
        assignEvent(i, ourRangeLastt6Tabs)
    }
}
OurRangeFirst2Tabs()
OurRangeLastt6Tabs()