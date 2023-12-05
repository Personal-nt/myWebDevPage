type BrowserMockupProps = {
    url: string,
}

const BrowserMockup = ({ url }: BrowserMockupProps) => {
    
    return (
        <div className="w-[750px] md:w-[1000px] lg:w-[1300px]">
            <div className="mockup-browser border bg-base-300 ">
                <div className="mockup-browser-toolbar">
                    <div className="input">{url}</div>
                </div>
                <div className="bg-base-200 px-0 py-0">
                <iframe src={url} width="100%" height="700"></iframe>
                </div>
            </div>
        </div>
    )
}

export default BrowserMockup
