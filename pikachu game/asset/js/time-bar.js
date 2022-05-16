class Time {
    constructor() {
        this.isEndGame =false
        this.valueBar=100
        this.time=2000
        this.intervalBar
    }
    activeTime() {
        this.intervalBar = setInterval(this.reduceTime.bind(this), this.time)
    }

    reduceTime(){
        let timeValue = document.querySelector(".time__value")
        timeValue.style.width = this.valueBar+"%"
        this.valueBar-=0.5
        if (this.valueBar === 0) {
            clearInterval(this.intervalBar)
            this.isEndGame = true
            alert("end")
        }
    }

}