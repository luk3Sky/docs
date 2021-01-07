---
layout: default
parent: Firmware
grand_parent: Robots
title: Motor Library
nav_order: 1
permalink: robot/firmware/motor_library
---

# Motor Library
{: .no_toc }

### Table of content
{: .no_toc }
- TOC
{:toc}

----
## Getting started

To add the motors of the Swarm-Robot, you need to include following header file.

```cpp
#include "src/SW_Motors.h"
```

You can turn on or off the motors library functionality by comment out and comment in the following definition. (in features.h)

```cpp
#define ENABLE_MOTORS
```

There are two types of motors drivers are supported.

1. Servo Drive

**Warning: This is discontinued implementation**

With this, you can connect continuous rotation servo motors directly to the 'motor connector' in the robot controller board. To enable this, you must uncomment #define DRIVE_SERVO in features.h

Available functions:
```cpp
void SW_Motors::write(int16_t leftSpeed, int16_t rightSpeed)
void SW_Motors::stop()		// Stop motors
void SW_Motors::attach()   	// Attach Servo motors
void SW_Motors::detach()   	// Detach Servo motors
```

2. PWM Drive

With this, you can connect any standard motors through a H-bridge motors driver to the controller board. Please refer *MotorDriver daughter board* for detailed technical information.

To enable this, you must uncomment #define DRIVE_PWM in features.h

## Setup the Motors

To initiate the *Robot_Motors*, you need to use motors.begin(). If motors were enabled by 'ENABLE_MOTORS' directive, it will print a message like '>> Motors  :enabled,servoMode' or '>> Motors  :enabled,pwmMode' according to the enabled motor driver.

```cpp
SW_Motors motors;
motors.begin();
```

## Available Functions

### motors.write(leftSpeed, rightSpeed);

This will write PWM value to motors. leftSpeed and rightSpeed values must be an integer between [-255,255].
Positive integer values will rotate motors forward and negative ones will rotate motors backward with the given speed.

```cpp
motors.write(int16_t leftSpeed, int16_t rightSpeed);
```

### motors.stop();

This will turn off both motors.

```cpp
motors.stop();
```

Following function will turn off both motors and delay for given milliseconds of time.

```cpp
motors.stop(int16_t delay);
```

### motors.test();

This is used to test the functionality of the motors. It will execute following procedures once called.
- Move forward with increasing speed for 6.5 seconds.
- Move forward with decreasing speed for 6.5 seconds.
- Move backward with increasing speed for 6.5 seconds.
- Move backward with decreasing speed for 6.5 seconds.
- Rotate Clockwise for 3 seconds.
- Rotate Counter Clockwise for 3 seconds.

```cpp
motors.test()
```

## Configurations

Addition to the above functions, there are two publicly accessible variables to adjust the drift of the motors.
The values should be stored in EEPROM memory and write into variables during memory.begin().

Following will update the error correction values on the memory.
- Default: 0
- Max: 127
- Min: -128

```cpp
memory.setErrorCorrection(LEFT, 0);
memory.setErrorCorrection(RIGHT, 0);
```

Set the error correction values to the motors. This can be updated at any time after motors are initiated.
```cpp
motors.rightCorrection =  memory.getErrorCorrection(RIGHT);
motors.leftCorrection = memory.getErrorCorrection(LEFT);

```
