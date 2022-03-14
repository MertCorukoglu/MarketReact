import { ProductService } from "../../services/product-service";


export const FetchProducts = () => async (dispatch) => {
	try {
		let data = await ProductService.getAllProducts();
		console.log('FetchProducts', data);
		dispatch({ type: 'fetchProduct', payload: data });
	} catch (error) {
		console.log('FetchProducts Error', error);
	}
};