new Vue({
  el: "#app",
  data: {
    player: {
      health: 100,
    },
    monster: {
      health: 100,
    },
    gameOver: true,
    gameLog: [{ description: 'Hello World', type: 'player-move' }, { description: 'Hello World', type: 'monster-move' }],
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
    },
  }
})