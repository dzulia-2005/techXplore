import { Outlet } from "react-router-dom"

import Header from "../../components/base/header"

const FeatLayout = () => {
    return (
        <div className="h-full relative">
            <Header/>
            <div className="pt-28 px-7">
                <Outlet />
            </div>
        </div>
    )
}

export default FeatLayout