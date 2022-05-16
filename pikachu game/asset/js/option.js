window.addEventListener('load', function() {
    loadButtonLevel()
})

function loadButtonLevel() {
    let level = document.querySelector("#level")
    level.addEventListener('click', function(){
        if (!level.hasAttribute('data-prevent-double-click')) {
            level.disabled=true
            setTimeout(()=>{
                document.querySelector("#level1").style.display="block"
                setTimeout(()=>{
                    document.querySelector("#level2").style.display="block"
                    setTimeout(()=>{
                        document.querySelector("#level3").style.display="block"
                        setTimeout(()=>{
                            document.querySelector("#level4").style.display="block"
                            setTimeout(()=>{
                                document.querySelector("#level5").style.display="block"
                                setTimeout(()=>{
                                    document.querySelector("#level6").style.display="block"
                                    setTimeout(()=>{
                                        level.setAttribute('data-prevent-double-click', true);
                                        level.disabled=false
                                    }, 100)
                                }, 100)
                            }, 100)
                        }, 100)
                    }, 100)
                }, 100)
            }, 100)

            document.querySelector("#level").style.backgroundColor="#000066"
        }
        else {
            level.disabled=true
            setTimeout(()=>{
                document.querySelector("#level6").style.display="none"
                setTimeout(()=>{
                    document.querySelector("#level5").style.display="none"
                    setTimeout(()=>{
                        document.querySelector("#level4").style.display="none"
                        setTimeout(()=>{
                            document.querySelector("#level3").style.display="none"
                            setTimeout(()=>{
                                document.querySelector("#level2").style.display="none"
                                setTimeout(()=>{
                                    document.querySelector("#level1").style.display="none"
                                    setTimeout(function() {
                                        level.disabled=false
                                        level.removeAttribute('data-prevent-double-click');
                                    }.bind(level), 100);
                                }, 100)
                            }, 100)
                        }, 100)
                    }, 100)
                }, 100)
            }, 100)

            // document.querySelector(".contain__level").style.display="none"
            document.querySelector("#level").style.backgroundColor="#006699"
        }
    })
}
