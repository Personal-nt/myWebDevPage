import { ProjectDetailsProps } from '../components/technicalDescriptions/TemplateProjectDetails'

type PhoneMockupProps = {
    url: string
    technicalDescription: ProjectDetailsProps
}

const PhoneMockup = ({ url, technicalDescription }: PhoneMockupProps) => {
    const shouldDisplayImage = technicalDescription.projScreenshotAlt
    return (
        <div className="w-full">
            <div className="mockup-phone">
                <div className="camera"></div>
                <div className="display w-fit">
                    <div className="artboard artboard-demo phone">
                        {shouldDisplayImage ? (
                            <img
                                src="/images/deverso-mob-alt.jpeg"
                                alt="Alt Description"
                            />
                        ) : (
                            <iframe src={url} width="375" height="600"></iframe>
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PhoneMockup
