## Dynamic Styling with CSS Classes

Dynamically attach classes by binding class names as key and functions or properties as values. It should return true or false to determine whether class gets added or not.

### Using Objects

You can create a computed function that returns an object listing the CSS properties that you want to attach to a HTML element, and then bind that computed function using **:class:*yourComputedFunctionKey***. This is a much leaner way to control CSS than listing them in the HTML itself.

Can use an array of classes, which Vue will merge into a single class name.

*Many different ways of attaching classes to HTML element.*

