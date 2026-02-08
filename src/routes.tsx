import { createBrowserRouter } from "react-router-dom";
import routeInjection from "./core/routes/routeInjection";
import { WELCOME_ROUTES } from "./features/welcome/welcome.routes";
import SearchLayout from "@common/layouts/searchLayout/SearchLayout";
import INDEX_ROUTES from "./features/index/index.routes";
import { NOTES_ROUTES } from "./features/notes/notes.routes";
const routes = routeInjection;
//Mis rutas globales
routes.addRoutes(WELCOME_ROUTES);
routes.addLayout({
    element: <SearchLayout />,
    children:[
        ...INDEX_ROUTES,
        ...NOTES_ROUTES
    ]
})
const router = createBrowserRouter(routes.getRoutes());
export default router;
