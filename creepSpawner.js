var creepSpawner = {

    run:function(spawn) {
        for(var name in Memory.creeps) {
            if(!Game.creeps[name]) {
                delete Memory.creeps[name];
            }
        }

        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');

        if(harvesters.length < 2) {
            var newName = 'Harvester' + Game.time;
            spawn.spawnCreep([WORK, CARRY, MOVE], newName, {memory: {role: 'harvester'}});
        }
        if(upgraders.length < 1) {
            var newName = 'Upgrader' + Game.time;
            spawn.spawnCreep([WORK, CARRY, MOVE], newName, {memory: {role: 'upgrader'}});
        }
        if(builders.length < 2) {
            var newName = 'builder' + Game.time;
            spawn.spawnCreep([WORK, CARRY, MOVE], newName, {memory: {role: 'builder'}});
        }

        console.log('Builders: ' + builders);
        console.log('Harvesters: ' + harvesters);
        console.log('Upgraders: ' + upgraders);
    }
};

module.exports = creepSpawner;