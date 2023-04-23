import { legacy_createStore as createStore } from "redux";
import heroReducer from "./hero/reducers/hero.reducers";

const store = createStore(heroReducer);

export default store;