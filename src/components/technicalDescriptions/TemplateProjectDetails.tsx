export type ProjectDetailsProps = {
    title: string;
    objective: string;
    keyFunctionalities: string[];
    frontendFramework: string;
    stateManagement: string;
    routing: string;
    apiIntegration: string[];
    uiUx: string;
    database: string;
    authentication: string;
    crudOperations: string;
    keyComponents: { name: string; description: string; link: string }[];
    testingFrameworks: string[];
    codeQualityTools: string[];
    conclusion: string;
    projScreenshotAlt?: boolean;
    AppAltScreenShot?: string;
}

const TemplateProjectDetails = ({ 
    title, 
    objective, 
    keyFunctionalities, 
    frontendFramework, 
    stateManagement, 
    routing, 
    apiIntegration, 
    uiUx, 
    database, 
    authentication, 
    crudOperations, 
    keyComponents, 
    testingFrameworks, 
    codeQualityTools, 
    conclusion 
}: ProjectDetailsProps): JSX.Element => {
    return (
        <div className="only-txt flex flex-col gap-8">
            {/* Project Overview */}
            <div>
                <h3 className="mb-0">Project Overview</h3>
                <p><strong>Title:</strong> {title}</p>
                <p><strong>Objective:</strong> {objective}</p>
            </div>

            {/* Key Functionalities */}
            <div>
                <h3>Key Functionalities:</h3>
                <ul className="">
                    {keyFunctionalities.map((func, index) => <li key={index}>{func}</li>)}
                </ul>
            </div>

            <div className="divider m-0 bg-[#081421c5] h-[.5px]"></div>

            {/* Technical Implementation */}
            <h3>Technical Implementation</h3>
            <div>
                <h4>Frontend Development:</h4>
                <ul>
                    <li><strong>Framework:</strong> {frontendFramework}</li>
                    <li><strong>State Management:</strong> {stateManagement}</li>
                    <li><strong>Routing:</strong> {routing}</li>
                    {apiIntegration.map((api, index) => <li key={index}><strong>API Integration:</strong> {api}</li>)}
                    <li><strong>UI/UX:</strong> {uiUx}</li>
                </ul>
            </div>

            <div>
                <h4>Backend Development:</h4>
                <ul>
                    <li><strong>Database:</strong> {database}</li>
                    <li><strong>Authentication:</strong> {authentication}</li>
                    <li><strong>CRUD Operations:</strong> {crudOperations}</li>
                </ul>
            </div>

            <div>
                <h4>Key Components:</h4>
                <ul className="">
                    {keyComponents.map((component, index) => (
                        <li key={index}><strong className="underline hover:text-secondary"><a href={component.link} target="_blank">{component.name}</a>:</strong> {component.description}</li>
                    ))}
                </ul>
            </div>

            <div>
                <h4>Testing & Quality Assurance:</h4>
                <ul>
                    {testingFrameworks.map((framework, index) => <li key={index}><strong>Testing Frameworks:</strong> {framework}</li>)}
                    {codeQualityTools.map((tool, index) => <li key={index}><strong>Code Quality:</strong> {tool}</li>)}
                </ul>
            </div>

            {/* Conclusion */}
            <div>
                <h3>Conclusion</h3>
                <p>{conclusion}</p>
            </div>
        </div>
    )
}

export default TemplateProjectDetails;
