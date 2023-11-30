import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const RootLayout = () => {
    return (
        <>
        <NavBar />
        <div className="flex justify-center w-screen bg-slate-200 dark:bg-[#001412]"> {/*dark:bg-[#001412] */}
            <Outlet />
        </div>
        </>
    );
};

export default RootLayout;
