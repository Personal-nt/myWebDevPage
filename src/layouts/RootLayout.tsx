import { Outlet } from "react-router-dom";

const RootLayout = () => {
    return (
        <div className="w-[100dvw] h-[100dvh]">
            <h1>ROOT LAYOUT HEADER</h1>
            <Outlet />
        </div>
    );
};

export default RootLayout;
