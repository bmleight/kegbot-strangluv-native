const GameTypes = require('action-types/game');

exports.select_game = (game_index) => {

    return {
        type: GameTypes.GAME_SELECT,
        payload: game_index
    };
};
