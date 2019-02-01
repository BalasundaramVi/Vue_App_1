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
  1. Compile Single File Templates (don't use "template"!)
    - powerful alternative to #el and template properties
  2. Case-insensitive Component Selectors
  3. Preprocessors and more
  4. Side effect: Compiler removed from VueJS Package => 30% reduced Package size
3. Production Server
4. User


### Using the Vue CLI to create Projects

Vue CLI has one major task: allows fetching of VueJS Project Templates


### Installing the Vue CLI and Creating a new Project

Use vue-cli documentation: <a href="https://cli.vuejs.org/guide/creating-a-project.html#vue-create">https://cli.vuejs.org/guide/creating-a-project.html#vue-create</a>

*Note: some of the config details here are outdated with Vue CLI update to Vue CLI 3*


**vue-cli-1**: built with webpack-simple


### Understanding ".vue" Files