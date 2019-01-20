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

    // monsterBarWidth: function() {
    //   return {
    //     width: (this.monster.health.toString() + '%'),
    //   }
    // },

    // normalAttack: function() {
    //   let power = Math.floor(Math.random() * 20);
    //   this.monster.health -= power;
    //   this.monsterAttack();
    // },

    // specialAttack: function() {
    //   let power = Math.floor(Math.random() * 50);
    //   this.monster.health -= power;
    //   this.monsterAttack();
    // },

    // monsterAttack: function()  {
    //   let power = Math.floor(Math.random() * 20);
    //   this.player.health -= power;
    // },
  }
});