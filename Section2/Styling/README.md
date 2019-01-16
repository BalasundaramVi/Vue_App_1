## Dynamic Styling with CSS Classes

Dynamically attach classes by binding class names as key and functions or properties as values. It should return true or false to determine whether class gets added or not.

### Using Objects

You can create a computed function that returns an object listing the CSS properties that you want to attach to a HTML element, and then bind that computed function using **:class:*yourComputedFunctionKey***. This is a much leaner way to control CSS than listing them in the HTML itself.

Can use an array of classes, which Vue will merge into a single class name.

*Many different ways of attaching classes to HTML element.*


### Updating Styles without New Classes

Can simply bind to style (**:style**) and then pass an object with the key being the style you want to bind to (need to enclose in quotes - or camelCase) and the value being the Vue data key that controls that style.

For example:
```
<div id="app">
  <div class="demo" :style="{'background-color': color}"></div>
  <div class="demo" :style="myStyle"></div>
</div>

new Vue({
  el: '#app',
  data: {
    color: 'grey',
    width: 100,
  },
  computed: {
    myStyle: function() {
      return {
        backgroundColor: this.color,
        width: this.width + 'px',
      }
    }
  }
});
```

VueJS will automatically prefix your styles to work in all browsers supporting VueJS.