window.addEventListener('load', function() {
    var pointerX = -1;
    var pointerY = -1;
    loadSound()
    muteVolume()
    editSound()
})

function loadSound() {
    let url = new URL(location.href)
    let volumeBase = url.searchParams.get("volumeBase")
    if (volumeBase == null) {
        volumeBase = 0.8
    }
    let volumeGame = url.searchParams.get("volumeGame")
    if (volumeGame == null) {
        volumeGame = 0.8
    }
    let audio = document.querySelector('#audioBase')
    let baseSound = document.querySelector("#baseSound")
    baseSound.style.width = (volumeBase*100)+"%"
    audio.volume = 80/100
    let gameSound = document.querySelector("#gameSound")
    gameSound.style.width = (volumeGame*100)+"%"
}

function editSound() {
    let audioBaseSound = document.querySelector("#audioBase")
    let baseSound = document.querySelector("#baseSound")
    let barBaseSound=document.querySelector("#barBaseSound")
    editDetailSound(barBaseSound, baseSound, audioBaseSound)
    let audioGameSound = document.querySelector("#audioGame")
    let gameSound = document.querySelector("#gameSound")
    let barGameSound=document.querySelector("#barGameSound")
    editDetailSound(barGameSound, gameSound, audioGameSound)

}

function editDetailSound(barSound, barValidSound, audioSound) {
    barSound.addEventListener("click", function(event){
        let barSoundRect=barSound.getBoundingClientRect()
        let value=Math.round((event.clientX-barSoundRect.left)/(barSoundRect.right-(barSoundRect.left))*100)
        if (value > 2 ){
            barValidSound.style.width=value+"%"
            let volume = barValidSound.dataset.volume
            document.querySelector("#"+volume).innerHTML=""
            let mute = document.createElement("i")
            mute.className = "fas fa-volume-up"
            document.querySelector("#"+volume).appendChild(mute)
            audioSound.volume = (parseInt(value))/100
        }
        else {
            barValidSound.style.width=0+"%"
            let volume = barValidSound.dataset.volume
            document.querySelector("#"+volume).innerHTML=""
            let mute = document.createElement("i")
            mute.className = "fa-solid fa-volume-xmark"
            document.querySelector("#"+volume).appendChild(mute)
            audioSound.volume = 0
        }
        barValidSound.style.transition = "all 1s";
    })
}

function muteVolume() {
    document.querySelector("#volumeBase").addEventListener("click",function(){
        this.innerHTML=""
        let mute = document.createElement("i")
        mute.className = "fa-solid fa-volume-xmark"
        this.appendChild(mute)
        let baseSound = document.querySelector("#baseSound")
        baseSound.style.width=0+"%"
        baseSound.style.transition = "all 1s";

    })
    document.querySelector("#volumeGame").addEventListener("click",function(){
        this.innerHTML=""
        let mute = document.createElement("i")
        mute.className = "fa-solid fa-volume-xmark"
        this.appendChild(mute)
        let gameSound = document.querySelector("#gameSound")
        gameSound.style.width=0+"%"
        gameSound.style.transition = "all 1s";
    })

}
