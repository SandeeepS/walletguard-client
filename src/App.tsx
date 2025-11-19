import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { appRoutes } from "./routes";
import { Suspense } from "react";
import FallBackUI from "./components/common/FallBackUI";

function App() {
  const router = createBrowserRouter(appRoutes);

  return (
    <>
      <Suspense fallback={<FallBackUI />}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;
