import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link,
} from "react-router-dom";
import ApplicationsPage from "./pages/ApplicationsPage";
import ApplicationPage from "./pages/ApplicationPage";
import NewApplicationPage from "./pages/NewApplicationPage";
import NotFoundPage from "./pages/NotFoundPage";

function Layout() {
  if (localStorage.getItem("theme") === "dark") {
    document.body.style.background = "black";
    document.body.style.color = "white";
  }

  return (
    <div>
      <header>
        <Link to="/">Applied</Link> | <Link to="/new">Add</Link> |
        <button
          onClick={() => {
            if (document.body.style.background === "black") {
              document.body.style.background = "white";
              document.body.style.color = "black";
              localStorage.setItem("theme", "light");
            } else {
              document.body.style.background = "black";
              document.body.style.color = "white";
              localStorage.setItem("theme", "dark");
            }
          }}
        >
          dark light
        </button>
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
