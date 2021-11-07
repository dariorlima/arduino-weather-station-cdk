# Arduino Weather Station CDK

This is the infrastructure code of the Weather Station.

You can find the Serial Reader part of this project and instructions to get it ready here: https://github.com/dariorlima/arduino-weather-station-reader

## Basic commands

 * `npm run build`   compile typescript to js
 * `npm run watch`   watch for changes and compile
 * `npm run test`    perform the jest unit tests
 * `cdk deploy`      deploy this stack to your default AWS account/region
 * `cdk diff`        compare deployed stack with current state
 * `cdk synth`       emits the synthesized CloudFormation template

## Arduino Sensors

- DHT11 - Temperature and Humidity
- LM75 - High Precision Temperature Sensor

## Arduino Libraries

- LM75A.h
- dht11
- ArduinoJson

## Arduino Sketchs

![alt LM75](http://arduinolearning.com/wp-content/uploads/2018/01/arduino-and-lm75_bb.png)

![alt DHT11](https://blogmasterwalkershop.com.br/wp-content/uploads/2018/06/img01_como_usar_com_arduino_sensor_de_umidade_e_temperatura_dht11_uno_mega_2560_nano_leonardo_automacao_residencial.jpg )
