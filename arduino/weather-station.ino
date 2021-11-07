#include <LM75A.h>
#include <ArduinoJson.h>
#include "dht.h" 

const int pinDHT11 = A2; 
dht DHT;

StaticJsonDocument<200> doc;


LM75A lm75a_sensor(false, 
                   false, 
                   false); 


void setup(void)
{
  Serial.begin(9600);
}

void loop()
{
  
  float temperature_in_degrees = lm75a_sensor.getTemperatureInDegrees();
  
  if (temperature_in_degrees == INVALID_LM75A_TEMPERATURE) {
    Serial.println("Error while getting temperature");
  } else {
    doc["temperature"]["LM75"] = temperature_in_degrees;
  }

  DHT.read11(pinDHT11);
  
  doc["temperature"]["DHT11"] = DHT.temperature;
  doc["humidity"]["DHT11"] = DHT.humidity; 

  serializeJson(doc, Serial);
  Serial.println();

   delay(60*60*1000);
} 
