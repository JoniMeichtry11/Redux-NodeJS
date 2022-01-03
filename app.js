const createStore = require('redux').createStore;

// ACTIONS
const BUY_POKEMON = "BUY_POKEMON";
const RETURN_POKEMON = "RETURN_POKEMON";
const BUY_YOSHI = "BUY_YOSHI";
const RETURN_YOSHI = "RETURN_YOSHI";

const buy_pokemon_action = (cant) => {
    return {
        type: BUY_POKEMON,
        payload: cant
    }
}
const return_pokemon_action = (cant) => {
    return {
        type: RETURN_POKEMON,
        payload: cant
    }
}
const buy_yoshi_action = (cant) => {
    return {
        type: BUY_YOSHI,
        payload: cant
    }
}
const return_yoshi_action = (cant) => {
    return {
        type: RETURN_YOSHI,
        payload: cant
    }
}


// REDUCERS
const default_game_reducer = {
    pokemon: 10,
    yoshi: 15
};
const games_reducer = (state = default_game_reducer, action) => {
    switch (action.type) {
        case BUY_POKEMON: {
            return {
                ...state, 
                pokemon: state.pokemon - action.payload
            }
        }
        case RETURN_POKEMON: {
            return {
                ...state,
                pokemon: state.pokemon + action.payload
            }
        }
        case BUY_YOSHI: {
            return {
                ...state, 
                yoshi: state.yoshi - action.payload
            }
        }
        case RETURN_YOSHI: {
            return {
                ...state,
                yoshi: state.yoshi + action.payload
            }
        }
        default:
            return state;
    }
}
// STORE

const store = createStore(games_reducer);
console.log("Estado inicial: ", store.getState());
store.subscribe(() => {
    console.log("Nuevos cambios: ", store.getState());
});
// COMPRANDO UN POKEMON
store.dispatch(buy_pokemon_action(5));
store.dispatch(return_pokemon_action(3));
// COMPRANDO A YOSHI
store.dispatch(buy_yoshi_action(7));
store.dispatch(return_yoshi_action(2));