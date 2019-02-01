# Moving to a "Real" Development Workflow with WEbpack and Vue CLI


### Why do we need a Development Server?

1. Build process that optimizes code
  - Able to write ES6 code that is compiled to ES5
2. Development Server
  - VueJS runs on the Client, but the App will be served by a Server nonetheless!
  - We want to test under these circumstances
  - file protocol does not have the same specifications as http protocol
3. Test your App under realistic circumstances
4. Not loading all files on Startup? - you need a server!


### What does a "Development Workflow" mean?

1. { CODE }
2. "Special Features"
  - Compile Single File Templates (don't use "template"!)
    - powerful alternative to #el and template properties
  - Case-insensitive Component Selectors
  - Preprocessors and more
  - Side effect: Compiler removed from VueJS Package => 30% reduced Package size
3. Production Server
4. User


### Using the Vue CLI to create Projects

Vue CLI has one major task: allows fetching of VueJS Project Templates


### Installing the Vue CLI and Creating a new Project

Use vue-cli documentation: <a href="https://cli.vuejs.org/guide/creating-a-project.html#vue-create">https://cli.vuejs.org/guide/creating-a-project.html#vue-create</a>

*Note: some of the config details here are outdated with Vue CLI update to Vue CLI 3*


**vue-cli-1**: built with webpack-simple


### Understanding ".vue" Files

**Single file templates**: special kind of file that gets compiled during the build process so we can ship compiled code to the browser.

Use **render** property to overwrite element with code rendered by function (h) provided by VueJS.

**h** function takes a VueJS template to be rendered.

#### .vue files always follow the following structure:

**The Template at the top:**
```
<template>
  <div id="app">
    <img src="./assets/logo.png">
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li><a href="https://vuejs.org" target="_blank">Core Docs</a></li>
      <li><a href="https://forum.vuejs.org" target="_blank">Forum</a></li>
      <li><a href="https://chat.vuejs.org" target="_blank">Community Chat</a></li>
      <li><a href="https://twitter.com/vuejs" target="_blank">Twitter</a></li>
    </ul>
    <h2>Ecosystem</h2>
    <ul>
      <li><a href="http://router.vuejs.org/" target="_blank">vue-router</a></li>
      <li><a href="http://vuex.vuejs.org/" target="_blank">vuex</a></li>
      <li><a href="http://vue-loader.vuejs.org/" target="_blank">vue-loader</a></li>
      <li><a href="https://github.com/vuejs/awesome-vue" target="_blank">awesome-vue</a></li>
    </ul>
  </div>
</template>
```

**The script holding the VueJS code for the template (like a new instance)**
```
<script>
export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>
```

**Any possible styling you need.**
```
<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
```

>vue-cli-2 made with vue init webpack so feature-rich. Browse around it to see all the capabilites of vue init


### Understanding the Object in the Vue File

Exporting the Vue object is the Vue instance. Basically a component.

Has the same properties as a regular Vue instance (but data is special property).


### How to build your App for Production

**npm run build** builds for production. Including bundle and optimization.

#### Vue files are single template files.


### Useful Links

More about ".vue" files: <a href="http://vuejs.org/guide/single-file-components.html">http://vuejs.org/guide/single-file-components.html</a>

More about the `render()` method: <a href="http://vuejs.org/guide/render-function.html">http://vuejs.org/guide/render-function.html</a>

**Using the ES6 Spread Operator** (for that, you need to add babel-preset-stage-2 as a Dependency and to your .babelrc File):

`npm install --save-dev babel-preset-stage-2`

.babelrc:
```
{
  "presets": [
    ["es2015", { "modules": false }],
    ["stage-2"]
  ]
}
```
js file:
```
import Vue from 'vue'
import App from './App.vue'
 
new Vue({
  el: '#app',
  ...App
});
```


**Using `mount()`:**

Also install the stage-2 preset as described above.

```
import Vue from 'vue'
import App from './App.vue'
 
const vm = new Vue({
  ...App
});
 
vm.$mount('#app');
```

Learn more aobut the CLI here: <a href="https://github.com/vuejs/vue-cli">https://github.com/vuejs/vue-cli</a>

The **webpack-simple** template **doesn't support local CSS or Sass files** because no CSS loader is set up.

Use the **webpack** template (not webpack-simple) to get this functionality: <a href="https://github.com/vuejs-templates/webpack">https://github.com/vuejs-templates/webpack</a>

Alternatively, you can also take a look at vue-cli-2 to get an idea of what the basic file structure for the webpack template will be.


### Debugging VueJS Projects

There are two main tools you may use:

1. The Developer Tools in Chrome
2. The Vue Developer Tools(<a href="https://github.com/vuejs/vue-devtools">https://github.com/vuejs/vue-devtools</a>)

When working with a Project created by the CLI (using Webpack!), you can easily debug your running Application by opening your **Developer Tools** and going to **"Sources"** there.

You should see a **"Webpack"** folder which you may open to see all your files included in the project.

You can open any file there and set breakpoints, etc. to debug your running application.

<img src="https://udemy-images.s3.amazonaws.com/redactor/2016-11-02_10-10-13-e40864043d089c76b6bc694bf747fe52/vuejs-debugging.png" />