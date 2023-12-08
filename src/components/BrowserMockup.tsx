import { ProjectDetailsProps } from '../components/technicalDescriptions/TemplateProjectDetails'

type BrowserMockupProps = { 
    url: string
    technicalDescription: ProjectDetailsProps
}
const BrowserMockup = ({ url, technicalDescription }: BrowserMockupProps) => {
    const shouldDisplayImage = technicalDescription.projScreenshotAlt;
    return (
        <div className="">
            <div className="mockup-browser border bg-base-300 w-[750px]">
                <div className="mockup-browser-toolbar ">
                    <div className="input"><a href={url} target="_blank">{url}</a></div>
                </div>
                <div className="bg-base-200 px-0 py-0">
                {
                        shouldDisplayImage
                        ? (<img src="/images/deverso-io-alt.png" alt="Alt Description" />)
                        : (<iframe src={url} width="100%" height="700" title="Browser Mockup"></iframe>)
                    }
                </div>
            </div>
        </div>
    )
}

export default BrowserMockup
