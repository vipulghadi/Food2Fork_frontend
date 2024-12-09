import { Form } from "react-router-dom"
import { BACKEND_BASE_URL } from "./config"

const recipeApi = {
    getIngredients: async() => {
        try {
            const resp = await fetch(BACKEND_BASE_URL + 'api/get-suggestions', { method: "GET" })
            const data = resp.json()
            return data

        } catch (error) {
            console.log("error");
            console.log(error);
            return error
        }


    },

    getRecipe: async(query) => {
        const form = new FormData()
        form.append('query', query)
        try {
            const resp = await fetch(BACKEND_BASE_URL + '/get-result', {
                method: "POST",
                body: form
            })
            const data = resp.json()
            return data

        } catch (error) {
            console.log("error");
            console.log(error);
            return error
        }
    }

}
export default recipeApi