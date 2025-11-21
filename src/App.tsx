import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { appRoutes } from "./routes";
import { Suspense } from "react";
import FallBackUI from "./components/common/FallBackUI";
import { Toaster } from "react-hot-toast";

function App() {
  const router = createBrowserRouter(appRoutes);

  return (
    <>
      <Toaster position="top-right" reverseOrder={false} />

      <Suspense fallback={<FallBackUI />}>
        <RouterProvider router={router} />
      </Suspense>
    </>
  );
}

export default App;
