input.on_button_pressed(Button.A, bruh)
input.on_button_pressed(Button.B, jump)
def mans():
    led.plot(0,2)
    led.plot(0,3)
def bruh():
    led.unplot(0,2)
    basic.pause(800)
    led.plot(0,2)
def jump():
    led.unplot(0,3)
    led.plot(0,1)
    basic.pause(800)
    led.plot(0,3)
    led.unplot(0,1)
bbruh = 4
def wall():
    global bbruh
    for i in range(5):
        led.plot(bbruh,0)
        led.plot(bbruh,1)
        led.plot(bbruh,2)
        if led.point(bbruh - 1,2) == True:
            gameover = True
        basic.pause(500)
        led.unplot(bbruh,0)
        led.unplot(bbruh,1)
        led.unplot(bbruh,2)
        bbruh = bbruh - 1
def yeet():
    global bbruh
    for i in range(5):
        led.plot(bbruh,0)
        led.plot(bbruh,3)
        if led.point(bbruh - 1,3) == True:
            gameover = True
        basic.pause(500)
        led.unplot(bbruh,0)
        led.unplot(bbruh,3)
        bbruh = bbruh - 1
def floor():
    led.plot(0,4)
    led.plot(1,4)
    led.plot(2,4)
    led.plot(3,4)
    led.plot(4,4)
obsticals = [wall(), yeet()]
gameover = False

while gameover == False:
    x = randint(0,2)
    floor()
    mans()
    obsticals[x]
    basic.pause(2500)