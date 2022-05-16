import {loadTime, time} from "../manage.js";
import {loadLevel} from "./load/loadLevel.js";
import {loadHint} from "./load/loadHint.js";
import {changeImage} from "./change/changeImage.js";
import {loadMatrixLevel} from "./load/loadMatrixLevel.js";

let numberOfTypeBLock = 24
let numberImgBlock = 37
let numberOfRow = 9
let numberOfColumn = 16
let arr = []
var arrBlockLeft = []
let rightChooseBlocks
let objLabelHint = {}

window.addEventListener('load', function () {
    loadLevel().then(level => rightChooseBlocks = level)
    loadMatrixLevel()
    loadTime()
    loadHint()

    document.querySelector("#changeImage").addEventListener("click", function () {
        changeImage()
    })

})

// for export
function changeArr(newArr) {
    arr = newArr
}

function changeArrBlockLeft(newArrBlockLeft) {
    arrBlockLeft = newArrBlockLeft
}

export {
    arr,
    numberOfColumn,
    numberOfRow,
    objLabelHint,
    arrBlockLeft,
    rightChooseBlocks,
    numberImgBlock,
    numberOfTypeBLock,
    changeArrBlockLeft,
    changeArr
}