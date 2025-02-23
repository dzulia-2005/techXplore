import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import AuthLayout from "./layout/auth";
import FeatLayout from "./layout/featlayout";
import Assistant from "./pages/assistant/view";
import PrivateRoute from "./components/guard";
const LazyLogIn = lazy(() => import("./pages/signIn/view"));
const LazyHome = lazy(()=> import("./pages/home"));


const App = () => {
  return (
    <Routes>
      
      <Route element={<AuthLayout/>}>
    
        <Route
          path="/"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazyLogIn />
            </Suspense>
          }
        />
      </Route>

      <Route element={<PrivateRoute><FeatLayout/></PrivateRoute>}>

      <Route
          path="/home"
          element={
            <Suspense fallback={<div>Loading...</div>}>
              <LazyHome/>
            </Suspense>
          }
          
      />

        <Route
          path="/assistant"
          element={
            <Suspense fallback = {<div>Loading...</div>}>
              <Assistant/>
            </Suspense>
          }
        />

      </Route>

    </Routes>
  );
};

export default App;
