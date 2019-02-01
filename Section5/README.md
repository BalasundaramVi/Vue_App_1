## Understanding the VueJS Instance

### Some Basics about the VueJS Instance

The Vue instance is the middleman between the DOM and the business logic.

### Using Multiple Vue Instances

Control multiple pieces on the page with multiple Vue instances.

Inside of an instance, only the properties of that specific instance can be accessed using the `this` keyword.

You may have multiple Vue instances for multiple tasks *as long as there is no connection between them.*

If there is a connection, maybe it might just be better to put both widgets in the same Vue instance.


### Accessing the Vue Instance from Outside

```
var vm1 = new Vue({
  el: '#app1',
  data: {
    title: 'The VueJS Instance',
    showParagraph: false,
  },
  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)')
    },
    updateTitle: function(title) {
      this.title = title;
    },
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    },
  },
  watch: {
    title: function(value) {
      alert('Title changed new value: ' + value)
    }
  }
})

setTimeout(function() {
  vm1.title = 'Changed by Timer';
  vm1.show();
}, 3000)

var vm2 = new Vue({
  el: '#app2',
  data: {
    title: 'The second Instance'
  },
  methods: {
    onChange: function() {
      vm1.title = 'Changed!';
    }
  }
})
```

Set variable names for the Vue instances and then just edit them using the variable names. (You still might want to make them into the same instance).

VueJS also proxies the properties set up in data (and methods/computed) so they might be easily accessed. So you don't need to write vm1.data.title - you can just use vm1.title. Much easier to access from the outside.


### How VueJS manages your Data and Methods

In theory we don't create a Vue instance, we just call a constructor. It does not have the exact same properties we pass to the constructor.

Behind the scenes, VueJS takes the object we pass in and use it to make native properties in the Vue instance itself. It also sets up a watcher for each property so it knows when a property is changed so it knows when to update the DOM or do anything.

**Watcher layer recognizes when something changes.**

This means we are not able to create new properties outside of the instance.

```
vm1.newProp = 'New!';
```

It will create a new property but VueJS will not watch it because it was not passed in through the constructor.

VueJS uses `get` and `set` to understand when the user accesses a property or gets a value from it.


### A Closer Look at $el and $data

**$el** refers to the HTML code of the element.

**$data** is a data is an object that holds the data properties. This is another way of accessing the data from outside.

```
console.log(vm1.title);
console.log(vm1.$data.title);
```

Both console logs are equivalent.

> VueJS doesn't create its own enclosed world. It is normal JavaScript code, it lives in JavaScript code, and it is able to interact with JavaScript code around it.

Generally there is nothing wrong with mixing vanilla JS and VueJS.


### Placing $refs and Using them on your Templates

**ref** is not a directive - it is not using v-bind so no colon in front. It is a key recognized by VueJS on any HTML element.

Use refs to access HTML elements.

```
vm1.$refs.heading.innerText = 'Something else';
```

Generally VueJS takes HTML code it controls and creates a template based on that HTML code. Whenever VueJS rerenders the DOM, it takes its old template and rerenders the DOM based on its old template.

Be aware that `ref` is not reactive - so changes may be overwritten.

`ref`s are better used to *get* the value of something.