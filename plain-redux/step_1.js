//steps as follows to store one state:
//===================
const redux = require("redux");
const createStore = redux.legacy_createStore;
//action type (intention)
const ADD_HERO = 'ADD_HERO';
const REMOVE_HERO = 'REMOVE_HERO';
//default state object
const initialState = {
    numberOfHeros: 5
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

//reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_HERO: return {
            numberOfHeros: state.numberOfHeros + 1
        };

        case REMOVE_HERO: return {
            numberOfHeros: state.numberOfHeros - 1
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

//unsubscribe

