export const ProductState = {
	products: [],
	selectedProduct: null,
};

export const ProductReducer = (state = ProductState, action) => {
	console.log('state', state);
	console.log('action', action);

	switch (action.type) {
		case 'fetchProduct':
			return {
				...state,
				products: [...action.payload], // apiden çekilen product ile güncelle
			};
		default:
			return state;
	}
};