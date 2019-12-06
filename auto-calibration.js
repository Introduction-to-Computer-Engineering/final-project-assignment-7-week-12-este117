input.onButtonPressed(Button.AB, function () {
    calib = 0
    readings()
})

function readings() {
    while (calib < 6) {
        if (calib == 0) {
            if (input.buttonIsPressed(Button.A)) {
                calib = 1
                pins.digitalWritePin(DigitalPin.P12, 1)
                low1 = pins.analogReadPin(AnalogPin.P0)
                basic.showNumber(1)
                pins.digitalWritePin(DigitalPin.P12, 0)
                basic.pause(1500)
                basic.clearScreen()
            }

            basic.showLeds(`
                . . # . .
                . . # . .
                # # # # #
                . # # # .
                . . # . .
                `)
        }
        if (calib == 1) {
            if (input.buttonIsPressed(Button.A)) {
                calib = 2
                pins.digitalWritePin(DigitalPin.P12, 1)
                low2 = pins.analogReadPin(AnalogPin.P0)
                basic.showNumber(2)
                pins.digitalWritePin(DigitalPin.P12, 0)
                basic.pause(1500)
                basic.clearScreen()
            }

            basic.showLeds(`
                . . # . .
                . . # . .
                # # # # #
                . # # # .
                . . # . .
                `)
        }
        if (calib == 2) {
            if (input.buttonIsPressed(Button.A)) {
                calib = 3
                pins.digitalWritePin(DigitalPin.P12, 1)
                low3 = pins.analogReadPin(AnalogPin.P0)
                basic.showNumber(3)
                pins.digitalWritePin(DigitalPin.P12, 0)
                basic.pause(1000)
                basic.clearScreen()
            }

            basic.showLeds(`
                . . # . .
                . . # . .
                # # # # #
                . # # # .
                . . # . .
                `)
        }
        if (calib == 3) {
            if (input.buttonIsPressed(Button.A)) {
                calib = 4
                pins.digitalWritePin(DigitalPin.P12, 1)
                hi1 = pins.analogReadPin(AnalogPin.P0)
                basic.showNumber(1)
                pins.digitalWritePin(DigitalPin.P12, 0)
                basic.pause(1000)
                basic.clearScreen()
            }

            basic.showLeds(`
                . . # . .
                . # # # .
                # # # # #
                . . # . .
                . . # . .
                `)
        }
        if (calib == 4) {
            if (input.buttonIsPressed(Button.A)) {
                calib = 5
                pins.digitalWritePin(DigitalPin.P12, 1)
                hi2 = pins.analogReadPin(AnalogPin.P0)
                basic.showNumber(2)
                pins.digitalWritePin(DigitalPin.P12, 0)
                basic.pause(1500)
                basic.clearScreen()
            }

            basic.showLeds(`
                . . # . .
                . # # # .
                # # # # #
                . . # . .
                . . # . .
                `)
        }
        if (calib == 5) {
            if (input.buttonIsPressed(Button.A)) {
                calib = 6
                pins.digitalWritePin(DigitalPin.P12, 1)
                hi3 = pins.analogReadPin(AnalogPin.P0)
                basic.showNumber(3)
                pins.digitalWritePin(DigitalPin.P12, 0)
                basic.pause(1000)
                basic.clearScreen()
            }

            basic.showLeds(`
                . . # . .
                . # # # .
                # # # # #
                . . # . .
                . . # . .
                `)
        }
        if (calib == 6) {
            basic.showString("Calibration Done")
            average()
        }
    }
}

function average() {
    lowAverage = ((low2 + low3) + low1) / 3
    hiAverage = ((hi2 + hi3) + low1) / 3
}

function display() {

    if (Math.round(Math.map(moisture_reading, lowAverage, hiAverage, 0, 4)) == 4) {
        basic.showLeds(`
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (Math.round(Math.map(moisture_reading, lowAverage, hiAverage, 0, 4)) == 3) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            `)
    } else if (Math.round(Math.map(moisture_reading, lowAverage, hiAverage, 0, 4)) == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            `)
    } else if (Math.round(Math.map(moisture_reading, lowAverage, hiAverage, 0, 4)) == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            `)
    } else {
        basic.clearScreen()
    }
}

input.onButtonPressed(Button.B, function () {
    basic.clearScreen()
    pins.digitalWritePin(DigitalPin.P12, 1)
    basic.pause(1000)
    moisture_reading = pins.analogReadPin(AnalogPin.P0)
    pins.digitalWritePin(DigitalPin.P12, 0)
    display()
})

basic.forever(function () {
    while (calib == 6) {
        pins.digitalWritePin(DigitalPin.P12, 1)
        basic.pause(1000)
        moisture_reading = pins.analogReadPin(AnalogPin.P0)
        pins.digitalWritePin(DigitalPin.P12, 0)
        display()
        basic.pause(2000)

    }
})

let calib = 0
let hiAverage: number = 0
let lowAverage: number = 0
let hi3: number = 0
let hi2: number = 0
let hi1: number = 0
let low3: number = 0
let low2: number = 0
let low1: number = 0
let moisture_reading: number = 0
readings()
