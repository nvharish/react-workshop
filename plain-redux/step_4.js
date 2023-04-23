//steps to add middleware:
//dependencies needs to be installed: redux-thunk axios
const redux=require("redux");
const thunkMiddleware=require("redux-thunk").default;
const axios=require("axios");
//--------------------------------------------
const createStore=redux.legacy_createStore;
const applyMiddleware=redux.applyMiddleware;

//action type (intention)
const AXIOS_USER_REQUEST = 'AXIOS_USER_REQUEST';
const AXIOS_USER_SUCCESS = 'AXIOS_USER_SUCCESS';
const AXIOS_USER_ERROR = 'AXIOS_USER_ERROR';

//action object creator (function that creates action object)
const fetchUsers = () => {
    return {
        type: AXIOS_USER_REQUEST
    }
};

const fetchUsersSuccess = (users) => {
    return {
        type: AXIOS_USER_SUCCESS,
        payload: users
    }
};

const fetchUsersError = (error) => {
    return {
        type: AXIOS_USER_ERROR,
        payload: error
    }
};

//default state object
const initialState = {
    loading: false,
    users: [],
    error: ''
};

//reducer
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case AXIOS_USER_REQUEST: return {
            ...state,
            loading: true
        };

        case AXIOS_USER_SUCCESS: return {
            ...state,
            loading: false,
            users: action.payload
        };

        case AXIOS_USER_ERROR: return {
            ...state,
            loading: false,
            error: action.payload
        };

        default: return state;
    }
};

//thunk actions
const thunkFetchUsers=()=>{
    return (dispatch)=>{
        dispatch(fetchUsers());
    }
}

const thunkAjaxUsersResponse=()=>{
    return (dispatch)=>{
        const url="https://reqres.in/api/users?page=1";
        const _url="https://reqres.in/api/sdfsdfsdf/harish?page=1";

        axios.get(_url)
        .then((res)=>{
            dispatch(fetchUsersSuccess(res.data.data));
        })
        .catch((err)=>{
            dispatch(fetchUsersError(err.response.statusText));
        });
    }
};

//store
const store=createStore(reducer, applyMiddleware(thunkMiddleware));
console.log(store.getState());//shows default state

//dispatch
store.dispatch(thunkFetchUsers());
console.log("********before subscribed*********");
console.log(store.getState());
setTimeout(()=>{
    store.dispatch(thunkAjaxUsersResponse());
}, 1000);

//subscribe
console.log("********after subscribed*********");
let unsubscribe=store.subscribe(()=>{
    console.log(store.getState());
});

//unsubscribe
//unsubscribe();