import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import ContactMe from "./pages/ContactMe";

const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="projects" element={<Projects />} />
        <Route path="skills" element={<Skills />} />
        <Route path="contact" element={<ContactMe />} />
      </Route>
      )
);

function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  );
}

export default App;
