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



## Templates and Components


### Mounting a Template

The properties prefixed with **$** are the native VueJS properties.

```
vm1.$mount('#app1');
```

is the same as
```
new Vue({
  el: '#app',
})
```

The only difference is syntax. Behind the scenes is the same.


Setting up a template and then mounting it to the DOM:
```
var vm3 = new Vue({
  template: '<h1>Hello!</h1>'
});

vm3.$mount('#app3')
```
Or
```
vm3.$mount();
document.getElementById('app3').appendChild(vm3.$el);
```

Though setting it up like this is pretty uncommon because you can just use components instead.


### Using Components

Vue.component takes two arguments.
1. The selector of the component
2. A JavaScript object similar to the Vue Instance (data is used differently)

Creating a reusable component:
```
Vue.component('hello', {
  template: '<h1>Hello!</h1>'
});
```

Basically tell VueJS to replace every `<hello></hello>` element with the template we provide in the above component.

This is better than only replacing the first occurence, and not all occurences.


### Limitations of some Templates

VueJS without a compiler strips the compiler out, and compiles the template during the build process and executes only compiled JavaScript code. The precompiled version is smaller and faster.


### How VueJS Updates the DOM

The Vue instance creates and holds a template from the HTML code or with the template property.

Each data property has its own watcher, which VueJS uses to watch and update these properties.

Accessing the DOM takes the most performance -- is very slow.

> However, it's not constantly updating things in the real DOM, instead VueJS has a virtual DOM parsed in JavaScript which is very quick. The Virtual DOM is recreated, finds the difference, and then updates the real DOM. Knows which properties changed and which properties need updating in the real DOM. Since the virtual DOM is also updated, it has the newest copy of the DOM without the performance slow down.


### The VueJS Instance Lifecycle

1. The `new Vue()` constructor.
    - First lifecycle method: `beforeCreate()`
2. Initialize Data and Events
3. Instance Created
    - Second lifecycle method: `created()`
4. Compiles template or **el**'s template
    - Third lifecycle method: `beforeMount()`
5. Replace **el** with compiled template
6. Mounted to DOM

Ongoing LifeCycle Methods:

- Data Changed?
    - `beforeUpdate()`
- Re-render DOM
    - `updated()`
- Destroyed
    - `beforeDestroy()`
    - `destroyed()`


### The VueJS Instance Lifecycle in Practice

```
<div id="app">
  <h1>{{ title }}</h1>
  <button @click="title = 'Changed'">Update Title</button>
  <button @click="destroy">Destroy</button>
</div>


new Vue({
  el: '#app',
  data: {
    title: 'The VueJS Instance'
  },

  beforeCreate: function() {
    console.log('beforeCreate()');
  },

  created: function() {
    console.log('created()');
  },

  beforeMount: function() {
    console.log('beforeMount()');
  },

  mounted: function() {
    console.log('mounted()');
  },

  beforeUpdate: function() {
    console.log('beforeUpdate()');
  },

  updated: function() {
    console.log('updated()');
  },

  beforeDestroy: function() {
    console.log('beforeDestroy()');
  },

  destroyed: function() {
    console.log('destroyed()');
  },

  methods: {
    destroy: function() {
      this.$destroy();
    }
  }
});
```


### Useful Links

Official Docs - The Vue Instance: <a href="http://vuejs.org/guide/instance.html">http://vuejs.org/guide/instance.html</a>