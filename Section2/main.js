new Vue({
  el: '#app',
  data: {
    counter: 0,
    x: 0,
    y: 0,
  },
  methods: {
    increase: function(step, event) {
      this.counter += step;
    },

    updateCoordinates: function(e) {
      this.x = e.clientX;
      this.y = e.clientY;
    },

    alertMe: function() {
      alert('Alert!');
    }
  }
});