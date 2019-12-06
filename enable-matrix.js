class Light {
      pin8() {
        for (let i = 0; i <= 3071; i++) {
            basic.clearScreen()
            pins.analogWritePin(AnalogPin.P8, i);
            control.waitMicros(750)
        }
        for (let i = 0; i >= 0; i--) {
            basic.clearScreen()
            pins.analogWritePin(AnalogPin.P8, i);
            control.waitMicros(750)
        }
     }
     pin12() {
        for (let i = 0; i <= 3071; i++) {
            basic.clearScreen()
            pins.analogWritePin(AnalogPin.P12, i);
            control.waitMicros(750)
        }
        for (let i = 3071; i >= 0; i--) {
            basic.clearScreen()
            pins.analogWritePin(AnalogPin.P12, i)
            control.waitMicros(750)
        }
     }
     pin16() {
        for (let i = 0; i <= 3071; i++) {
            basic.clearScreen()
            pins.analogWritePin(AnalogPin.P16, i);
            control.waitMicros(750)
        }
        for (let i = 3071; i >= 0; i--) {
            basic.clearScreen()
            pins.analogWritePin(AnalogPin.P16, i);
            control.waitMicros(750);
       }
    }
}
basic.forever(function() {
    led.plot(0, 0)
    led.plot(0, 1)
    led.plot(0, 2)
    led.plot(0, 3)
    led.plot(0, 4)
    basic.pause(500)
    led.unplot(0, 0)
    led.unplot(0, 1)
    led.unplot(0, 2)
    led.unplot(0, 3)
    led.unplot(0, 4)
    pins.analogWritePin(AnalogPin.P8, 0);
    pins.analogWritePin(AnalogPin.P12, 0);
    pins.analogWritePin(AnalogPin.P16, 0);
    let light = new Light();
    light.pin8();
    light.pin12();
    light.pin16();
})
