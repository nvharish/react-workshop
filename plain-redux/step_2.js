//steps as follows for more than one state:
//===================
const redux = require("redux");
const createStore = redux.legacy_createStore;
//action type (intention)
const ADD_HERO = 'ADD_HERO';
const REMOVE_HERO = 'REMOVE_HERO';
const ADD_MOVIE = 'ADD_MOVIE';
const REMOVE_MOVIE = 'REMOVE_MOVIE';

//default state object
const initialState = {
    numberOfHeros: 5,
    numberOfMovies: 2
};

//action object creator (a function that creates action object)
function addHero() {
    return {
        type: ADD_HERO
    };
}

function removeHero() {
    return {
        type: REMOVE_HERO
    };
}

function addMovie() {
    return {
        type: ADD_MOVIE
    };
}

function removeMovie() {
    return {
        type: REMOVE_MOVIE
    };
}
//reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_HERO: return {
            ...state,
            numberOfHeros: state.numberOfHeros + 1
        };

        case REMOVE_HERO: return {
            ...state,
            numberOfHeros: state.numberOfHeros - 1
        }

        case ADD_MOVIE: return {
            ...state,
            numberOfMovies: state.numberOfMovies + 1
        };

        case REMOVE_MOVIE: return {
            ...state,
            numberOfMovies: state.numberOfMovies - 1
        }

        default: return state;
    }
}

//store
const store = createStore(reducer);

//subscribe
console.log(store.getState());
console.log("after redux");
let unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

//dispatch
store.dispatch(addHero());
store.dispatch(addHero());
store.dispatch(removeHero());
store.dispatch(addHero());
store.dispatch(addHero());
store.dispatch(addHero());
store.dispatch(addHero());
store.dispatch(removeHero());
store.dispatch(removeHero());
store.dispatch(addMovie());
store.dispatch(addMovie());
store.dispatch(removeMovie());
store.dispatch(addMovie());
store.dispatch(addMovie());
store.dispatch(addMovie());
store.dispatch(addMovie());
store.dispatch(removeMovie());
store.dispatch(removeMovie());

//unsubscribe
