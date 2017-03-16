var _ = require('lodash');

var Module = function (bot) {
  this.bot = bot;
  this.name = "Example Library";
  this.version = "0.1";
  this.help = function () {
    // RETURN HELP STRING FOR YOUR COMMANDS or AT LEAST YOUR COMMANDS Object.keys(this.commands)
    return {
      "example": "Says hello.",
    };
  };
  this.commands = {};

  this.commands.example = function(channel, args, user) {
    var response = "Hello, "+user.username;
    setTimeout(function() {
      bot.postMessage(channel, response);
    }, 500);
  };

};

Module.prototype.toString = function() {
  return this.name;
};


var exports = module.exports = Module;