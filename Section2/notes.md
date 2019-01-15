### Understanding VueJS Templates

Instantiating a new VueJS instance creates a connection between the JS and the html element.

At runtime VueJS does not use HTML code and have the commands in HTML code.

*VueJS creates a template based on HTML code, stores it internally, and uses this template to create the real HTML code which is then rendered to the DOM.*

**There is a layer between HTML code and the JS - VueJS**

### How the VueJS Template Syntax and Instance Work Together

Data stored in the vue instance (in the data property) can be outputted immediately.

It's perfectly fine to execute code between the double curly braces, but it has to return something that can be converted to string.

**In the HTML, we have access to anything stored in data and methods without prepending anything in between the double curly braces.**

### Accessing Data in the Vue Instance

**Anything in the data and method properties of the Vue instance can be accessed at other parts of the Vue instance by calling the 'this' operator**