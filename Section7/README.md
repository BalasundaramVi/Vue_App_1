# An Introduction to Components

When using string templates with Vue it will only be used once - the second usage gets ommitted.

The Vue instance will only select the first instance because, after all, there is only ONE Vue instance.
s
A component is a reusable instance - extends the instance.

First argument is the selector, and the second is an object that takes in all the properties.

```
Vue.component('my-cmp', {
  data: function() {
    return {
      status: 'Critical'
    }
  }
});
```

### Storing Data in Components with the Data Method

If creating a shared data object, a change to that object will affect all instances with that data.


### Registering Components Locally and Globally

Call **Vue.component** registers the component globally.

To register locally, store the component as a variable and then pass into Vue instance through the component property.

### How to Name your Component Tags

Components can be named camelCase.

```
export default {
  components: {
    'appheader': Header,
    'app-servers': Servers,
  }
}
```

### Scoping Component Styles

Just change `<style></style>` to `<style scoped></style>` to contain styles applied in a single file to the HTML template of vue page.

Imitates the shadow DOM.

Basically adds a selector to the element and the style so the shadow dom knows which one to apply the style to.

### Useful Links

VueJS Components: <a href="http://vuejs.org/guide/components.html">http://vuejs.org/guide/components.html</a>

Also see: <a href="https://vuejs.org/v2/guide/components-registration.html">https://vuejs.org/v2/guide/components-registration.html</a>
