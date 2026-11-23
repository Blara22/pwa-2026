import Router from "./router/router.js";
import FetchLabView from "./views/FetchLabView.js";
import { registerServiceWorker } from "./pwa/registerSW.js";
import { initConnectionStatus } from "./pwa/connectionStatus.js";
import { initInstallPrompt } from "./pwa/installPrompt.js";
import { initInstallButton } from "./pwa/installButton.js";
import { initNotificationButton } from "./pwa/notificationButton.js";

const routes = [
  { path: "/", load: () => import("./views/HomeView.js") },
  { path: "/acerca", load: () => import("./views/AboutView.js") },
  { path: "/contacto", load: () => import("./views/ContactView.js") },
  { path: "/almacenamiento", load: () => import("./views/StorageView.js") },
  { path: "/notas", load: () => import("./views/IndexedDBView.js") },
  { path: "/service-worker", load: () => import("./views/ServiceWorkerView.js") },
  { path: "/fetch-cache", view: FetchLabView },
  { path: "/manifest", load: () => import("./views/ManifestView.js") },
  { path: "/instalacion", load: () => import("./views/InstallView.js") },
  { path: "/sincronizacion", load: () => import("./views/SyncView.js") },
  { path: "/ubicacion", load: () => import("./views/LocationView.js") }
];


// El shell (header, nav, footer) ya está en el HTML y no vuelve a tocarse.
// El router SOLO controla lo que ocurre dentro de #app-root: eso es el contenido.
const app = document.getElementById("app");
const router = new Router(routes, app);

initInstallPrompt();
router.init();
initConnectionStatus();
initInstallButton();
initNotificationButton();

window.addEventListener("load", () => registerServiceWorker());
