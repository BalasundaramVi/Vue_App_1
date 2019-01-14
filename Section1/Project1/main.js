// Constructor function
new Vue({
  el: '#app',
  data: {
    title: 'Hello World!'
  },
  methods: {
    changeTitle: function(e) {
      // this refers to the data object
      // proxies all data properties to top vue instance
      this.title = e.target.value;
    }
  }
})