import { createBrowserRouter } from "react-router-dom";
import { AppPage, ProfileCardPage } from "./pages";

const router = createBrowserRouter([
  {
    path: "/",
    element: <AppPage />,
  },
  {
    path: "/profile",
    element: <ProfileCardPage />,
  },
]);

export default router;
