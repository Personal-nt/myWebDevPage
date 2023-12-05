
type PhoneMockupProps = {
    url: string,
}

const PhoneMockup = ({url}: PhoneMockupProps) => {
    return (
        <div className="w-full">
            <div className="mockup-phone">
                <div className="camera"></div>
                <div className="display w-fit">
                    <div className="artboard artboard-demo phone">
                    <iframe src={url} width="375" height="600"></iframe>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PhoneMockup
