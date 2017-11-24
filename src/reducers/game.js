const GameTypes = require('../action-types/game');

const internals = {
    initial: {
        games: {
            image_search: {
                name: 'Image Search'
            }
        },
        selected_game: null
    }
};

module.exports = (state, action) => {

    state = state || internals.initial;

    const type = action.type;
    const payload = action.payload;

    switch (type) {
        case GameTypes.GAME_SELECT:
            return {
                ...state,
                selected_game: action.payload
            };
        default:
            return state;
    }
};
