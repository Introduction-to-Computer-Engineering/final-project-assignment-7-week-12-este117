let rainTime = 5000

input.onButtonPressed(Button.A, function () {
    rain()
})

function rain() {
    while (rainTime > 0) {
        let xCoord = Math.randomRange(0, 4)
        led.plot(xCoord, 0)
        basic.pause(100)
        led.plot(xCoord, 0)
        basic.pause(100)
        led.plot(xCoord, 1)
        basic.pause(100)
        led.plot(xCoord, 1)
        basic.pause(100)
        led.plot(xCoord, 2)
        basic.pause(100)
        led.plot(xCoord, 2)
        basic.pause(100)
        led.plot(xCoord, 3)
        basic.pause(100)
        led.plot(xCoord, 3)
        basic.pause(100)
        led.plot(xCoord, 4)
        basic.pause(100)
        led.plot(xCoord, 4)
        basic.clearScreen()
    }
    rainTime += -500
}

led.enable(true)
pins.digitalWritePin(DigitalPin.P8, 0)
pins.digitalWritePin(DigitalPin.P12, 0)
pins.digitalWritePin(DigitalPin.P16, 0)

basic.forever(function () {
    pins.digitalWritePin(DigitalPin.P8, 1)
    basic.pause(300)
    pins.digitalWritePin(DigitalPin.P12, 1)
    basic.pause(300)
    pins.digitalWritePin(DigitalPin.P16, 1)
    basic.pause(300)
    pins.digitalWritePin(DigitalPin.P8, 0)
    basic.pause(300)
    pins.digitalWritePin(DigitalPin.P12, 0)
    basic.pause(300)
    pins.digitalWritePin(DigitalPin.P16, 0)
    basic.pause(300)
})
