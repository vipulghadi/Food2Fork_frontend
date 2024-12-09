export let BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_DEV_URL;
export let ENV = "";

if (import.meta.env.VITE_ENV == "prod") {
    BACKEND_BASE_URL = import.meta.env.VITE_BACKEND_PROD_URL;
}
