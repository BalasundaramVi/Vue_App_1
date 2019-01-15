new Vue({
  el: '#exercise',
  data: {
    name: 'Elondo Moosk',
    age: 45,
    Sully: 'https://vignette.wikia.nocookie.net/pixar/images/8/8c/Sulleymonsters%2Cinc..png/revision/latest/scale-to-width-down/404?cb=20170807224356'
  },
  methods: {
    outputFloat: function() {
      return Math.random();
    }
  }
})