import { useState } from "react";
import Navbar from "./components/Navbar";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Body from "./components/Body";
import Demo from "./components/Demo";
import Login from "./components/Login";

function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <Demo />,
        },
        {
          path: "/login",
          element: <Login />,
        },
      ],
    },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
}

export default App;
