def bruh():
    led.unplot(0, 2)
    basic.pause(1000)
    led.plot(0, 2)
input.on_button_pressed(Button.A, bruh)

def jump():
    led.unplot(0, 3)
    led.plot(0, 1)
    basic.pause(1000)
    led.plot(0, 3)
    led.unplot(0, 1)
input.on_button_pressed(Button.B, jump)

def mans():
    led.plot(0, 2)
    led.plot(0, 3)
bbruh = 4
def wall():
    global bbruh, gameover
    for i in range(5):
        led.plot(bbruh, 0)
        led.plot(bbruh, 1)
        led.plot(bbruh, 2)
        basic.pause(500)
        if led.point(bbruh - 1, 2) == True:
            gameover = True
        led.unplot(bbruh, 0)
        led.unplot(bbruh, 1)
        led.unplot(bbruh, 2)
        bbruh = bbruh - 1
def yeet():
    global bbruh, gameover
    for i in range(5):
        led.plot(bbruh, 0)
        led.plot(bbruh, 3)
        basic.pause(500)
        if led.point(bbruh - 1, 3) == True:
            gameover = True
        led.unplot(bbruh, 0)
        led.unplot(bbruh, 3)
        bbruh = bbruh - 1
def floor():
    led.plot(0, 4)
    led.plot(1, 4)
    led.plot(2, 4)
    led.plot(3, 4)
    led.plot(4, 4)
floor()
mans()
gameover = False
while gameover == False:
    x = randint(0, 1)
    if x == 1:
        wall()
    else:
        yeet()
