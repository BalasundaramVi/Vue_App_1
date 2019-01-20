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
    gameLog: [],
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

  },

  methods: {
    normalAttack: function() {
      let power = Math.floor(Math.random() * 20);
      this.monster.health -= power;
      this.gameLog.push({
        description: `Player attacks monster for ${power} damage!`,
        type: 'player-move',
      })
      this.monsterAttack();
    },

    specialAttack: function() {
      let power = Math.floor(Math.random() * 50);
      this.monster.health -= power;
      this.gameLog.push({
        description: `Player uses special attack on monsterfor ${power} damage!`,
        type: 'player-move',
      })
      this.monsterAttack();
    },

    monsterAttack: function()  {
      let power = Math.floor(Math.random() * 20);
      this.player.health -= power;
        this.gameLog.push({
          description: `Monster attacks player for ${power} damage!`,
          type: 'monster-move',
        })
    },

    heal: function() {
      let power = Math.floor(Math.random() * 30);
      this.player.health += power;
      this.gameLog.push({
        description: `Player heals for ${power} points!`,
        type: 'player-move',
      });
      this.monsterAttack();
    }
  }
});