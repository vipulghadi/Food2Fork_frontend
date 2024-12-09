
import { BACKEND_BASE_URL } from "./config";
import { createClient } from 'pexels';
const client = createClient(
    import.meta.env.VITE_PIXEL_KEY);

const recipeApi = {
  // Fetch suggested ingredients
  getIngredients: async () => {
    try {
      const response = await fetch(`${BACKEND_BASE_URL}/api/get-suggestions`, {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("Failed to fetch ingredient suggestions");
      }
      return await response.json();
    } catch (error) {
      console.error("Error fetching ingredients:", error);
      return [];
    }
  },

  // Fetch recipes based on a query
  getRecipe: async (query) => {
    const form = new FormData();
    form.append("query", query);

    try {
      const response = await fetch(`${BACKEND_BASE_URL}/get-result`, {
        method: "POST",
        body: form,
      });
      if (!response.ok) {
        throw new Error("Failed to fetch recipes");
      }
      const data= await response.json();
      return data.data
    } catch (error) {
      console.error("Error fetching recipes:", error);
      return [];
    }
  },

  getRecipeImage: async(query) => {
    const params = {
        per_page: 1, // Number of results per page
        page: 1, // Page number
    };
    try {
        const resp = await client.photos.search({ query, ...params })
        return resp.photos.url
    } catch (error) {
        console.log(error);
        return error
    }

}
};

export default recipeApi;
