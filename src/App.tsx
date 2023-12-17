import {
    createBrowserRouter,
    createRoutesFromElements,
    Route,
    RouterProvider,
} from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import ContactMe from './pages/ContactMe'
// import Home from './pages/Home'
import ProjectDetails from './pages/ProjectDetails'
import Journey from './pages/Journey'
import Home2 from './pages/Home2'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<RootLayout />}>
            <Route index element={<Home2 />} />
            <Route path="home" element={<Home2 />} />
            <Route path="projects" element={<Projects />} />
            <Route path="/projects/:urlTitle" element={<ProjectDetails />} />
            <Route path="skills" element={<Skills />} />
            <Route path="contact" element={<ContactMe />} />
            <Route path="journey" element={<Journey />} />
        </Route>,
    ),
)

function App() {
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App
