## Understanding VueJS Templates

Instantiating a new VueJS instance creates a connection between the JS and the html element.

At runtime VueJS does not use HTML code and have the commands in HTML code.

VueJS creates a template based on HTML code, stores it internally, and uses this template to create the real HTML code which is then rendered to the DOM.

**There is a layer between HTML code and the JS - VueJS**



## How the VueJS Template Syntax and Instance Work Together

Data stored in the vue instance (in the data property) can be outputted immediately.

It's perfectly fine to execute code between the double curly braces, but it has to return something that can be converted to string.

**In the HTML, we have access to anything stored in data and methods without prepending anything in between the double curly braces.**



## Accessing Data in the Vue Instance

**Anything in the data and method properties of the Vue instance can be accessed at other parts of the Vue instance by calling the 'this' operator**



## Binding to Attributes

Cannot use curly braces in an html element attribute. - *Only use it where we would usually use text.*

Instead just use **v-bind:href** directive - or any such replacement to **href** (class, etc.). And then follow it with colon (:) and the name of the bound key. For example:
```
<a v-bind:href="link">Google</a>
new Vue({
  el: '#app',
  data: {
    link: 'http://google.com'
  },
});
```


## Understanding and Using Directives

*A directive is basically an instruction you place in your code.*

**v-bind** tells VueJS to bind something to the data and that also includes functions that are stored in VueJS.
- it expects the argument you want to bind
- allows dynamic data to be passed to HTML attributes



## Disable Re-Rendering with v-once

Adding v-once to an element makes all the content in the element be rendered once. Not updated if it changes later on.



## How to Output Raw HTML

By default VueJS **escapes HTML**. Only renders text.

Instead, if you want to render raw HTML, use **v-html**.
However, this does expose you to cross-site DDOS, HTML attacks.



## Listening to Events

Use **v-on:** to add event handlers mapped to functions on html elements.



## Getting Event Data from the Event Object

Event handlers get automatically passed into the function in Vue methods.

Using **$event** (a protected name) you can also get event handlers passed into your functions.

Use Event Modifiers to modify an event. For example **.stop** stops Propogation to higher functions.

Vue has an intermediate function from your function to the time your function is expressed. It also runs preventDefault, which can be chained with one **.** after another.



## Listening to Keyboard Events
