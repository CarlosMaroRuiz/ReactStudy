import { createBrowserRouter } from "react-router-dom";
import { WELCOME_ROUTES } from "./features/welcome/welcome.routes";
import SearchLayout from "@common/layouts/searchLayout/SearchLayout";
import INDEX_ROUTES from "./features/index/index.routes";
import { NOTES_ROUTES } from "./features/notes/notes.routes";
import { REDUCER_ROUTES } from "./features/reducers/reducer.routes";

const router = createBrowserRouter([
    ...WELCOME_ROUTES,
    {
    element: <SearchLayout />,
    children:[
        ...INDEX_ROUTES,
        ...NOTES_ROUTES,
        ...REDUCER_ROUTES
    ]
    }

]);
export default router;
