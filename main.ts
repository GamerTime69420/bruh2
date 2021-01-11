let x: number;
input.onButtonPressed(Button.A, function bruh() {
    led.unplot(0, 2)
    basic.pause(1000)
    led.plot(0, 2)
})
input.onButtonPressed(Button.B, function jump() {
    led.unplot(0, 3)
    led.plot(0, 1)
    basic.pause(1000)
    led.plot(0, 3)
    led.unplot(0, 1)
})
function mans() {
    led.plot(0, 2)
    led.plot(0, 3)
}

let bbruh = 4
function wall() {
    
    for (let i = 0; i < 5; i++) {
        led.plot(bbruh, 0)
        led.plot(bbruh, 1)
        led.plot(bbruh, 2)
        basic.pause(500)
        if (led.point(bbruh - 1, 2) == true) {
            gameover = true
        }
        
        led.unplot(bbruh, 0)
        led.unplot(bbruh, 1)
        led.unplot(bbruh, 2)
        bbruh = bbruh - 1
    }
}

function yeet() {
    
    for (let i = 0; i < 5; i++) {
        led.plot(bbruh, 0)
        led.plot(bbruh, 3)
        basic.pause(500)
        if (led.point(bbruh - 1, 3) == true) {
            gameover = true
        }
        
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

floor()
mans()
let gameover = false
while (gameover == false) {
    x = randint(0, 1)
    if (x == 1) {
        wall()
    } else {
        yeet()
    }
    
}
