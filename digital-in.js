let buttonPressed = 0

pins.digitalWritePin(DigitalPin.P0, 0)
pins.digitalWritePin(DigitalPin.P1, 0)

basic.forever(function() {
    if (pins.analogReadPin(AnalogPin.P0) > 1000) {
        if (buttonPressed == 0) {
            buttonPressed += 1
            if (buttonPressed == 1) {
                pins.digitalWritePin(DigitalPin.P1, 1)
                led.plot(0, 0)
               }
        }
    } else {
        if (buttonPressed == 1) {
            buttonPressed += -1
            if (buttonPressed == 0) {
                pins.digitalWritePin(DigitalPin.P1, 0)
                led.unplot(0, 0)
            }
        }
    }
})
