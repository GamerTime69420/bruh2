let x: number;
input.onButtonPressed(Button.A, function bruh() {
    led.unplot(0, 2)
    basic.pause(800)
    led.plot(0, 2)
})
input.onButtonPressed(Button.B, function jump() {
    led.unplot(0, 3)
    led.plot(0, 1)
    basic.pause(800)
    led.plot(0, 3)
    led.unplot(0, 1)
})
function mans() {
    led.plot(0, 2)
    led.plot(0, 3)
}

let bbruh = 4
function wall() {
    let gameover: boolean;
    
    for (let i = 0; i < 5; i++) {
        led.plot(bbruh, 0)
        led.plot(bbruh, 1)
        led.plot(bbruh, 2)
        if (led.point(bbruh - 1, 2) == true) {
            gameover = true
        }
        
        basic.pause(500)
        led.unplot(bbruh, 0)
        led.unplot(bbruh, 1)
        led.unplot(bbruh, 2)
        bbruh = bbruh - 1
    }
}

function yeet() {
    let gameover: boolean;
    
    for (let i = 0; i < 5; i++) {
        led.plot(bbruh, 0)
        led.plot(bbruh, 3)
        if (led.point(bbruh - 1, 3) == true) {
            gameover = true
        }
        
        basic.pause(500)
        led.unplot(bbruh, 0)
        led.unplot(bbruh, 3)
        bbruh = bbruh - 1
    }
}

function floor() {
    led.plot(0, 4)
    led.plot(1, 4)
    led.plot(2, 4)
    led.plot(3, 4)
    led.plot(4, 4)
}

let obsticals = [wall(), yeet()]
let gameover = false
while (gameover == false) {
    x = randint(0, 2)
    floor()
    mans()
    obsticals[x]
    basic.pause(2500)
}
