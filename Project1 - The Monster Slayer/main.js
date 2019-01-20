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
      let win = false;
      if (this.monster.health <= 0) {
        this.monster.health = 0;
        this.gameOver = true;
        win = true;
      }

      this.gameLog.push({
        description: `Player attacks monster for ${power} damage!`,
        type: 'player-move',
      })

      if (win) {
        this.gameLog.push({
          description: 'PLAYER WINS!',
          type: 'player-move'
        })
      } else {
        this.monsterAttack();
      }
    },

    specialAttack: function() {
      let power = Math.floor(Math.random() * 50);
      this.monster.health -= power;
      let win = false;
      if (this.monster.health <= 0) {
        this.monster.health = 0;
        this.gameOver = true;
        win = true;
      }
      this.gameLog.push({
        description: `Player uses special attack on monsterfor ${power} damage!`,
        type: 'player-move',
      })
      if (win) {
        this.gameLog.push({
          description: 'PLAYER WINS!',
          type: 'player-move'
        })
      } else {
        this.monsterAttack();
      }
    },

    monsterAttack: function()  {
      let power = Math.floor(Math.random() * 20);
      this.player.health -= power;
      let win = false;
      if (this.monster.health <= 0) {
        this.monster.health = 0;
        this.gameOver = true;
        win = true;
      };
      this.gameLog.push({
        description: `Monster attacks player for ${power} damage!`,
        type: 'monster-move',
      });

      if (win) {
        this.gameLog.push({
          description: 'MONSTER WINS :(',
          type: 'monster-move',
        })
      }
    },

    heal: function() {
      let power = Math.floor(Math.random() * 30);
      this.player.health += power;
      this.gameLog.push({
        description: `Player heals for ${power} points!`,
        type: 'player-move',
      });
      this.monsterAttack();
    },

    newGame: function() {
      this.player.health = 100;
      this.monster.health = 100;
      this.gameOver = false;
      this.gameLog = [];
    }
  }
});