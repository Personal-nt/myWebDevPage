import { Outlet } from 'react-router-dom'
import NavBar from '../components/NavBar'

const RootLayout = () => {
    return (
        <>
            <NavBar />
            <div className="flex w-screen flex-col justify-center bg-slate-200 dark:bg-[#001412] pt-[heightOfNavBar]">
                <Outlet />
            </div>
        </>
    )
}

export default RootLayout
