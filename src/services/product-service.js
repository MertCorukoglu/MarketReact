import { BaseHttpClientService } from './base-service';

export const ProductService = {
	getAllProducts: async () => {
		try {
			let response = await BaseHttpClientService.get(
				'https://localhost:5001/api/Product/getallproduct'
			);

			console.log('ProductService', response);

			return response;
		} catch (error) {
			console.log('getAllProducts Error', error);
		}
	},
};