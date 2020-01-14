// src -> store -> index.js

//this is the file where we will set up out store;

//Necessities and accessories for our Redux store
import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import ThunkMiddleware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

//REDUCER FUNCTIONS;
import rootReducer from "../reducers";

//this variable will hold the object that will contain all of youre reducers
//const rootReducer = combineReducers({/*/reducers go here*/});
//logger: this is the logger we saw earlier --- by passing it collasped: ture, the contents of each object that is logged to the console will already be collasped
const logger = createLogger({ collasped: true });
const middleware = composeWithDevTools(
  applyMiddleware(ThunkMiddleware, logger)
);
//create the store;
const store = createStore(
  rootReducer,
  middleware /*rootReducer goes here and middleware to follow as 2nd parameter*/
);

//export this so that way we can pass it to the <Provider /> component so that way any connected component will be able to rference and communicate with that store
export default store;
