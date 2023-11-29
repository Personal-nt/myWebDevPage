import { Outlet } from "react-router-dom";

const RootLayout = () => {
    return (
        <div className="flex justify-center w-screen h-auto bg-slate-200 dark:bg-[#001412]"> {/*dark:bg-[#001412] */}
            <Outlet />
        </div>
    );
};

export default RootLayout;
