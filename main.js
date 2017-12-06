// Creep roles
var roleBuilder = require('role.builder');
var roleHarvester = require('role.harvester');
var roleUpgrader = require('role.upgrader');

// Maintenance
var creepSpawner = require('creepSpawner');

// Constants
var HEAD_SPAWN = Game.spawns['HeadSpawn'];

module.exports.loop = function() {

    creepSpawner.run(HEAD_SPAWN);

    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if(creep.memory.role == 'harvester') {
            roleHarvester.run(creep);
        }
        if(creep.memory.role == 'upgrader') {
            roleUpgrader.run(creep);
        }
        if(creep.memory.role == 'builder') {
            roleBuilder.run(creep);
        }
    }
};