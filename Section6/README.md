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
