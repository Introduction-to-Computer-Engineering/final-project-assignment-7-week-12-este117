// Spark Fun soil moisture sensor takes readings and displays them
let reading: number = 0
// Sensor function for readings

function sensor() {

   // Readings remapped to 0-4 and then rounded number compared to an int
   let sensorRead = Math.round(Math.map(reading, 0, 815, 0, 4))
   if (sensorRead == 1) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            `)
       }
     else if (sensorRead == 2) {
        basic.showLeds(`
            . . . . .
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            `)
        } 
      else if (sensorRead == 3) {
        basic.showLeds(`
            . . . . .
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            `)
       }      
      else if (sensorRead == 4) {
        basic.showLeds(`
            . . . . .
            # # # # #
            # # # # #
            # # # # #
            # # # # #
            `)
      } else {
        basic.clearScreen()
    }
}

// Button B turns on pin 12
// Pin 0 reads and writes into variable reading
input.onButtonPressed(Button.B, function () {
    pins.digitalWritePin(DigitalPin.P12, 1)
    reading = pins.analogReadPin(AnalogPin.P0)
    pins.digitalWritePin(DigitalPin.P12, 0)
    sensor()
})

// Pin 0 reads the sensor and writes the data into the variable reading
basic.forever(function() {
    pins.digitalWritePin(DigitalPin.P12, 1)
    basic.pause(1000)
    reading = pins.analogReadPin(AnalogPin.P0)
    pins.digitalWritePin(DigitalPin.P12, 0)
    sensor()
    basic.pause(1000)
    //sends data to serial terminal for calibration reading
    serial.writeNumber(reading)
})
