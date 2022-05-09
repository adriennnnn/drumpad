window.addEventListener('keydown', function (event){
    console.log(event);
    let audio = document.querySelector(`audio[data-key="${event.keyCode}"]`)
    let pad = document.querySelector(`.key[data-key="${event.keyCode}"]`)
    console.log(audio);
    console.log(pad);
    audio.currentTime = 0
    audio.play()

    pad.addEventListener('transitionend', function(){
        pad.classList.remove('playing')
    })
    pad.classList.add('playing')
})

async function beatBox(){

    function simulateKey(keyCode){
        let event = new KeyboardEvent('keydown', {
            keyCode: keyCode 
        });
        window.dispatchEvent(event)
    }

    function playBeat (keyCode, time){
        return new Promise((resolve, reject)=>{
            setTimeout(() => {
                resolve(simulateKey(keyCode))
            }, time);
        })
    }
    
    await playBeat(65, 1500)
    await playBeat(90, 500)
    await playBeat(88, 1000)


}









