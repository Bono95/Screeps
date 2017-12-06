var roleBuilder = {

    run:function(creep) {
        creep.moveTo(Game.flags['BuilderSpot']);
    }
};

module.exports = roleBuilder;