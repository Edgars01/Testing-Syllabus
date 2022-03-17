# Robot Factory

This kata is about enabling a user to custom build a robot according their needs. They can configure various parts when designing the robot. The parts are provided by suppliers with whom integration is done via web services. This is because your company, believing fully in lean manufacturing, does not keep stock of any items.

Parts will be supplied by one or more supplies at various prices; you need to make sure the customer gets the cheapest matching part.

The Robot Manufacturing Agreement of 2020 ensures parts from different suppliers are interchangeable with each other.

When building a robot, a user must configure the following parts:

- Head (With Standard Vision, With Infrared Vision, With Night Vision)
- Body (Square, Round, Triangular, Rectangular)
- Arms (With Hands, With Pinchers, With Boxing Gloves)
- Movement (With Wheels, With Legs, With Tracks)
- Power (Solar, Rechargeable Battery, Biomass)

The user must make a selection for each part type when building the robot.
You must use the parts as specified above.
Not all suppliers will carry every part.
You must cater for at least 3 robot parts suppliers.
Do not worry about a UI.

There are two key methods to implement for this kata:

- _Cost Robot_
  - Queries the various suppliers to find the lowest cost parts as specified and returns the parts with the total.
- _Purchase Robot_
  - Purchases the parts from the respective suppliers
    - **HINT**: Use test doubles to check the behavior - avoid implementing this for real. Make a purchase method and see that it was called or not called accordingly. Use a console.log or simular to see some output if you want.
