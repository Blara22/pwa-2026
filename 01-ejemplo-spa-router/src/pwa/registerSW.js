import { BASE_PATH } from "../config.js";

export const SW_URL = `${BASE_PATH}/src/sw.js`
export const SW_SCOPE = `${BASE_PATH}/src/`;

export async function registerServiceWorker() {
  if(!("serviceWorker" in navigator)) {
    console.warn("Este navegador/scope no soporta Service Workers");
  }

  try {
    const registration = await navigator.serviceWorker.register(SW_URL, {
      scope: SW_SCOPE
    })

    console.log("[PWA] SW registrado. Scope: ", registration.scope);
    return registration;
  }catch(error) {
    console.error("[PWA] Falló el registro del SW: ", error);
    return null;
  }
}