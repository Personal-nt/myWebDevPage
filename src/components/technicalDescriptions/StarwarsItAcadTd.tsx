const starwarsItAcadTd = (): JSX.Element => {
    return (
        <div className="only-txt flex flex-col gap-8">
            <div>
                <h3 className="mb-0">Project Overview</h3>
                <p>
                    <strong>Title:</strong> Star Wars Starship Explorer
                </p>
                <p className="">
                    <strong>Objective:</strong> Develop a web application to
                    display a list of Star Wars starships with detailed views of
                    each starship.
                </p>
            </div>
            <div>
                <h3>Key Functionalities:</h3>
                <ul>
                    <li>
                        Fetch and display a list of starships using the Star
                        Wars API (SWAPI).
                    </li>
                    <li>
                        Implement pagination to manage and navigate through
                        large datasets.
                    </li>
                    <li>
                        Enable detailed views of each starship, including images
                        and specific data.
                    </li>
                </ul>
            </div>
            <div className="divider"></div>
            <h3>Technical Implementation</h3>
            <div>
                <h4>Frontend Development:</h4>
                <ul>
                    <li>
                        <strong>Framework:</strong> React (TypeScript).
                    </li>
                    <li>
                        <strong>State Management:</strong> Zustand for efficient
                        and scalable state handling.
                    </li>
                    <li>
                        <strong>Routing:</strong> React Router Dom for seamless
                        navigation.
                    </li>
                    <li>
                        <strong>API Integration:</strong> Axios for API calls to
                        SWAPI and starwars-visualguide.com.
                    </li>
                    <li>
                        <strong>UI/UX:</strong> Responsive design with
                        interactive elements for an engaging user experience.
                    </li>
                </ul>
            </div>
            <div>
                <h4>API Consumption:</h4>
                <ul>
                    <li>
                        <strong>Primary API:</strong> SWAPI (swapi.dev) for
                        fetching starship data.
                    </li>
                    <li>
                        <strong>Image API:</strong> starwars-visualguide.com for
                        starship images.
                    </li>
                    <li>
                        <strong>Pagination:</strong> Implemented to efficiently
                        handle large datasets and improve user experience.
                    </li>
                </ul>
            </div>
            <div>
                <h4>Key Components:</h4>
                <ul>
                    <li>
                        <strong>Home.tsx:</strong> The landing page with an
                        overview of the project.
                    </li>
                    <li>
                        <strong>SignIn.tsx:</strong> User authentication
                        interface.
                    </li>
                    <li>
                        <strong>Starships.tsx & StarshipDetails.tsx:</strong>{' '}
                        Core components for listing starships and displaying
                        their details.
                    </li>
                    <li>
                        <strong>NotFoundPage.tsx:</strong> A custom 404 page for
                        unhandled routes.
                    </li>
                    <li>
                        <strong>useAuthStore.ts & useStarshipStore.ts:</strong>{' '}
                        Custom hooks for managing authentication and starship
                        data.
                    </li>
                </ul>
            </div>
            <div>
            <h4>Testing & Quality Assurance:</h4>
            <ul>
                <li>
                    <strong>Testing Frameworks:</strong> Vitest and Jest for
                    robust unit testing.
                </li>
                <li>
                    <strong>Code Quality:</strong> ESLint and Prettier for code
                    linting and formatting.
                </li>
            </ul>
            </div>
            <div>
            <h3>Conclusion</h3>
            <p>
                This project was a deep dive into the technicalities of
                front-end development, particularly in the context of API
                consumption and data presentation. The Star Wars Starship
                Explorer stands as a testament to my growing capabilities in web
                development, showcasing both technical proficiency and a
                creative approach to problem-solving.
            </p>
            </div>
        </div>
    )
}

export default starwarsItAcadTd
