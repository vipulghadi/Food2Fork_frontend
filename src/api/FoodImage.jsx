import { createClient } from 'pexels';


const client = createClient(
    import.meta.env.VITE_PIXEL_KEY);

const foodApi = {

    getRecipeImage: async(query) => {
        const params = {
            per_page: 1, // Number of results per page
            page: 1, // Page number
        };
        try {
            const resp = await client.photos.search({ query, ...params })
            return resp
        } catch (error) {
            console.log(error);
            return error
        }

    }


}

export default foodApi




// All requests made with the client will be authenticated