import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link,
} from "react-router";
import ApplicationsPage from "./pages/ApplicationsPage";
import ApplicationPage from "./pages/ApplicationPage";
import NewApplicationPage from "./pages/NewApplicationPage";
import NotFoundPage from "./pages/NotFoundPage";

function Layout() {
  return (
    <div>
      <header>
        <Link to="/">Applied</Link> | <Link to="/new">Add</Link>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <ApplicationsPage /> },
      { path: "/applications/:id", element: <ApplicationPage /> },
      { path: "/new", element: <NewApplicationPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export default function App() {
  return <RouterProvider router={router} />;
}
