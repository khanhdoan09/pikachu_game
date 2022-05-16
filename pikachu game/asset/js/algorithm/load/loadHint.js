import {checkTwoBlock} from "../algorithm/checkTwoBlock.js";
import BlockItem from "../algorithm/block.js";
import {arr, objLabelHint, rightChooseBlocks, numberOfTypeBLock} from "../base.js";
import {changeMatrix} from "../change/changeMatrix.js";

function loadHint() {
    let hint = document.querySelector("#hint")
    hint.addEventListener("click", function () {
        if (!hint.hasAttribute('data-prevent-double-click')) {
            hint.disabled = true
            hint.setAttribute('data-prevent-double-click', true);
            for (let i = 1; i <= numberOfTypeBLock; i++) {
                for (let j = 0; j < objLabelHint[i].length-1;j++) {
                    for(let o = j; o < objLabelHint[i].length-1;o++) {
                        let k = parseInt(o)+1
                        let x1 = parseInt(objLabelHint[i][j].x)
                        let y1 = parseInt(objLabelHint[i][j].y)
                        let x2 = parseInt(objLabelHint[i][k].x)
                        let y2 = parseInt(objLabelHint[i][k].y)
                        if(arr[x1][y1].state!=0 && arr[x2][y2].state!=0) {
                            if (checkTwoBlock(new BlockItem(x1, y1), new BlockItem(x2, y2))) {
                                let arrTempLabelHint = objLabelHint[i]
                                arrTempLabelHint = arrTempLabelHint.filter(
                                    (item) => (item.x.toString() + "" + item.y.toString()) != x1 + "" + y1);
                                arrTempLabelHint = arrTempLabelHint.filter(
                                    (item) => (item.x.toString() + "" + item.y.toString()) != x2 + "" + y2);
                                objLabelHint[i] = arrTempLabelHint;
                                rightChooseBlocks(new BlockItem(x1, y1), new BlockItem(x2, y2))
                                return
                            }
                        }
                    }
                }
            }
            // hint.removeAttribute('data-prevent-double-click');
            // hint.disabled = false
            changeMatrix()
        }
        else {
            hint.removeAttribute('data-prevent-double-click');
            hint.disabled = false
        }
    })


}

export {loadHint}