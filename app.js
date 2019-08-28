document.addEventListener("keydown", () => {
    let keyC = event.keyCode;
    let keyK = event.key;
    let keyE = event.code;
    

    document.getElementById("eventWhich").innerText = keyC;
    document.getElementById("eventKey").innerText = keyK;
    document.getElementById("eventCode").innerText = keyE;
    document.getElementById("faces").innerText = myFaces[Math.floor(Math.random() * 17)]
    
    
})

const myFaces = ["( ͡° ͜ʖ ͡°)", "¯\\_(ツ)_/¯", "̿̿ ̿̿ ̿̿ ̿'̿'\̵͇̿̿\\з= ( ▀ ͜͞ʖ▀) =ε/̵͇̿̿/’̿’̿ ̿ ̿̿ ̿̿ ̿̿", "(▀̿Ĺ̯▀̿ ̿)", "༼ つ ◕_◕ ༽つ", "(づ｡◕‿‿◕｡)づ", "(ง ͠° ͟ل͜ ͡°)ง", "ಠ_ಠ", "( ͡°╭͜ʖ╮͡° )", "(ಥ﹏ಥ)", "(ノಠ益ಠ)ノ彡┻━┻", "(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧", "ლ(ಠ益ಠლ)", "ヾ(⌐■_■)ノ♪", "(｡◕‿‿◕｡)", "┬──┬ ノ( ゜-゜ノ)", "ʘ‿ʘ"]

