# DotstarStripController,

is the main StripController used for [LED-Controller](https://github.com/led-controller/LEDController). It is the middleware between the Application and the actuall Dotstarleds.

It is extraced to an extra Module in order to debloat the whole application. The user decides which Controller he needs for his setup and installes it accordingly.