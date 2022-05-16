let time = new Time()

function loadTime() {
    time = new Time()
    time.activeTime()
}

window.addEventListener('load', function() {
    document.querySelector(".option").addEventListener("click", function() {
        document.querySelector(".contain__manage").style.display="block"
        clearInterval(time.intervalBar)
    })

    document.querySelector(".manage__close").addEventListener("click", ()=>{
        document.querySelector(".contain__manage").style.display="none"
        time.activeTime()
    })
    document.querySelector("#manage__resume").addEventListener("click", ()=>{
        document.querySelector(".contain__manage").style.display="none"
        time.activeTime()
    })
    document.querySelector("#manage__restart").addEventListener("click", ()=>{
        window.location.reload();

    })
    document.querySelector("#manage__sound").addEventListener("click", ()=>{
        document.querySelector(".contain__bar-sound").style.display="flex"
    })

    // document.querySelector(".contain__bar-close").addEventListener("click", ()=>{
    //     document.querySelector(".contain__bar-sound").style.display="none"
    // })
})

export {time, loadTime}