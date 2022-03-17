# Metric Converter

You are to write a metric to imperial unit converter. The code should only focus on the algorithms, no need to need to worry about a UI.

There are four types of conversion to be implement:

- Kilometers to Miles
  - Takes kilometers to convert and returns the result in miles
  - For conversion use 1 kilometer = 0.621371 miles
- Celsius to Fahrenheit
  - Takes the temperature in Celsius and returns the result in Fahrenheit
  - For conversion use the following formula
    - (TempatureInCelsius _ 1.8)+32 E.g 30C _ 1.8+32 = 86F
- Kilogram to Pound
  - Takes the number of kilograms to and returns pounds.
  - For conversion use the following formula
    - (Kilograms / 0.45359237). E.g 5kg/0.45359237 = 11.02311310 pounds
- Liters to Gallons
  - Takes number of liters to convert and the TargetUnit (Either US or UK)
  - Handles conversion to both US and UK gallon
  - For US gallon use 3.785411784 liters = 1 US gallon
  - For UK gallon use 4.54609 liters = 1 UK gallon
