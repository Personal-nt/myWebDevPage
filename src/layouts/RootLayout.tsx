import { Outlet } from "react-router-dom";

const RootLayout = () => {
    return (
        <>
            <h1>ROOT LAYOUT HEADER</h1>
            <Outlet /> 
        </>
    );
};

export default RootLayout;
