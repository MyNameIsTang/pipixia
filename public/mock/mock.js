const recommend = require('./recommend.json')
const attention = require('./attention.json')
const game = require('./game.json')
const find = require('./find.json')

module.exports = function () { 
  return {
    recommend,
    attention,
    game,
    find
  }
}