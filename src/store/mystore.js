import { applyMiddleware, combineReducers, createStore  } from "redux";
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { ProductReducer } from "./reducer/product.reducer";


export const myStore = createStore(
	combineReducers({
        ProductState: ProductReducer
	}),
	composeWithDevTools(applyMiddleware(thunk))
);