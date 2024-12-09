export const ENV = import.meta.env.VITE_ENV || "dev";

export const BACKEND_BASE_URL = 
  ENV === "prod"
    ? import.meta.env.VITE_BACKEND_PROD_URL
    : import.meta.env.VITE_BACKEND_DEV_URL;

