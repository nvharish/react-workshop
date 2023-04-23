import { ADD_HERO } from "../types/hero.type";

const initialState = {
    numberOfHeroes: 0
};

const heroReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_HERO: return {
            ...state,
            numberOfHeroes: state.numberOfHeroes + 1
        };

        default: return state;
    }
}

export default heroReducer;