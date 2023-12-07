const AnomalieTd = (): JSX.Element => {
    return (
        <div className="only-txt flex flex-col gap-8">
            <div>
                <h3 className="mb-0">Project Overview</h3>
                <p>
                    <strong>Title:</strong> Anomalie App
                </p>
                <p>
                    <strong>Objective:</strong> Develop a dynamic, responsive web application using Next.js and TypeScript, integrating Supabase for backend functionalities.
                </p>
            </div>
            <div>
                <h3>Key Functionalities:</h3>
                <ul>
                    <li>Interactive user interfaces with React and responsive designs.</li>
                    <li>Real-time database interactions and authentication using Supabase.</li>
                    <li>State management with Zustand for scalable and efficient state handling.</li>
                    <li>Smooth animations and transitions using Framer Motion.</li>
                    <li>Integration of iconic visuals with React Icons.</li>
                </ul>
            </div>
            <div className="divider"></div>
            <h3>Technical Implementation</h3>
            <div>
                <h4>Frontend Development:</h4>
                <ul>
                    <li>
                        <strong>Framework:</strong> Next.js (TypeScript) for SSR and static generation.
                    </li>
                    <li>
                        <strong>State Management:</strong> Zustand for simplified global state management.
                    </li>
                    <li>
                        <strong>UI Animations:</strong> Framer Motion for engaging motion design.
                    </li>
                    <li>
                        <strong>Icons:</strong> React Icons for enhancing UI design.
                    </li>
                </ul>
            </div>
            <div>
                <h4>Backend Integration:</h4>
                <ul>
                    <li>
                        <strong>Database & Auth:</strong> Supabase for backend services including database and authentication.
                    </li>
                </ul>
            </div>
            <div>
                <h4>Testing & Quality Assurance:</h4>
                <ul>
                    <li>
                        <strong>Code Quality:</strong> ESLint and Prettier for consistent code formatting and linting.
                    </li>
                </ul>
            </div>
            <div>
                <h3>Conclusion</h3>
                <p>
                    This project showcases a comprehensive implementation of modern web development practices, combining Next.js, Supabase, and state-of-the-art libraries to create a robust, scalable, and engaging web application.
                </p>
            </div>
        </div>
    )
}

export default AnomalieTd;
