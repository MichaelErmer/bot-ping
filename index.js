var _ = require('lodash');
var ping = require ("net-ping");
var isIPv6 = require('is-ipv6-node');

var Module = function (bot) {
  this.bot = bot;
  this.name = "Ping Library";
  this.version = "0.1";
  this.help = function () {
    // RETURN HELP STRING FOR YOUR COMMANDS or AT LEAST YOUR COMMANDS Object.keys(this.commands)
    return {
      "ping": "Pings a host 3 times",
    };
  };
  this.commands = {};

  this.commands.ping = function(channel, args, user) {
    var args = args.split(" ");
    if (!args.length || !args[0]) bot.postMessage(channel, "Invalid Request");
    var session = ping.createSession ();
    
    session.pingHost(args[0], function(error, target) {
      if (error)
        if (error instanceof ping.RequestTimedOutError)
          return bot.postMessage(channel, target + " is not Alive.");
        else
          return bot.postMessage(channel, target + " Error: " + error.message);
      else
        return bot.postMessage(channel, target + " is Alive.");
      session.close();
    });
  };

};

Module.prototype.toString = function() {
  return this.name;
};


var exports = module.exports = Module;