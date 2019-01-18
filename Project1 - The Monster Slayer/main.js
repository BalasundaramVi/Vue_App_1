new Vue({
  el: "#app",
  data: {
    player: {
      health: 100,
    },
    monster: {
      health: 100,
    }
  },
  computed: {
    playerBarWidth: function() {
      return {
        width: (this.player.health.toString() + '%'),
      }
    },

    monsterBarWidth: function() {
      return {
        width: (this.monster.health.toString() + '%'),
      }
    }
  }
})