import { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import { routes } from "./routes";

function App() {
  return (
    <>
      <div className="main">
        <Routes>
          {routes.map((el, index) => (
            <Route
              key={index}
              path={el.path}
              element={
                <Suspense fallback={el.fallback}>{el.component}</Suspense>
              }
            />
          ))}
        </Routes>
      </div>
    </>
  );
}

export default App;
