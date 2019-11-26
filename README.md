# CPE 1040 - Introduction to Computer Engineering

## Assignment: Final Project

## Part I (Week 12, Assignment #7)

1. Summary

This is the final project and the last required assignment. It contains lab work, source code versioning, and a writeup. The README.md is empty for you to fill with your project writeup. This file, requirements.md contains the requirements. There are three parts to the final project, to be done, in order, in weeks 12-14, respectively:

An extended version of Assignment #6, requiring some basic I/O and pin operation on the microbit.
Oscilloscope exercises and passing data over I2C.
Tutorial on creating a Makecode extension package for the soil moisture sensor. The file criteria.md contains the criteria for passing.

## Part 1: Original LEDs


Build the circuit, using 3 LEDs of different colors. Remember the proper orientation of the LEDs (long leg toward higher voltage). Commit the JavaScript file to your assignment repository, calling it original-guide.js. Build the circuit and take a short video of its operation.

code: original-guide.js


## Part 2: enable-MATRIX

Reconfigure the circuit and rewrite the program to avoid disabling the LED matrix. Choose the correct 3 pins from the micro:bit GPIO function table. Add code to demonstrate that the LED matrix is enabled. Commit the JavaScript file to your assignment repository, calling it enable-matrix.js. Build the circuit and take a short video of its operation.

code: enable-matrix.js


## Part 3: twenty-eight


Now that you have a 5x5 LED matrix and 3 external LEDs, extend your favorite screensaver program to include the external LEDs into the changing pattern. Do something interesting. Commit the JavaScript file to your assignment repository, calling it twenty-eight.js. Build the circuit and take a short video of its operation.

code: twenty-eight.js



## Part 4: digital-in (Soil sensor)


Keeping at least one analog output pin, open a digital input pin and hook it up to a TTL input button on the workstation. Light the external LED when you detect a 1 on the input button (that is, the button is pressed). Note: Do you need an external or internal pullup resistor? Commit the JavaScript file to your assignment repository, calling it digital-in.js. Build the circuit and take a short video of its operation.
Hook up the soil moisture sensor. There are three wires coming out: VCC, GND, and SIG. Pick a GPIO pin, configure it as digital output, and wire VCC to it. Pick a GPIO pin, configure it as analog in, and wire SIG to it. GND whould be wired to ground on the micro:bit.

code: https://github.com/Introduction-to-Computer-Engineering/final-project-assignment-7-week-12-este117/blob/master/digital-in.js



## Part 5: manual- calibration



Write a program that:

Reads the sensor input in a loop with pauses to get the reading.
It only powers the sensor when it takes a reading, by writing a 1 and then a 0 to the digital output pin. **Do not hook up the VCC on the sensor to a constant 3.3V or leave the digital pin to 1 when you are not taking a reading. This degrades the sensor quickly! **
Maps the range of input values of the sensor (you need to measure them yourself) to the range 0-4. Use the map function. This is called calibration of the sensor. For the minimum value, take a reading with a dry sensor not touching anything; for the maximum value, take a reading with the sensor prongs dipped in shallow water. Do not immerse the whole sensor in water!
When it takes a sensor reading, it lights up as many rows of the LED matrix as correspond to the rescaled magnitude of the reading. Commit the JavaScript file to your assignment repository, calling it manual-calibration.js. Build the circuit



## Part 6: auto-calibration

Write a program that does the calibration programmatically:
When the program starts, it prompts the user to take three readings of the low and three readings of the high values of the range. It starts by showing the South icon image to prompt the user to take a low value, and records it. Then, it shows the North icon image to prompt the user to take a high value, and records it. It repeats this two more times, for a total of 3 readings for each.
It takes the average of the low values and sets the range minimum to that value. It does the same for the range maximum.
It performs the mapping, exits the calibration subprogram, scrolls "Calibration success" once, and starts normal operation described in the previous task.
Commit the JavaScript file to your assignment repository, calling it auto-calibration.js. Build the circuit and take a short video of its operation.
