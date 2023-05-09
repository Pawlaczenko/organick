import { Outlet } from "react-router-dom";
import Header from "../components/Sections/Header/Header";
import Newsletter from "../components/Sections/Newsletter/Newsletter";

export default function Root() {
    return(
        <div>
            <Header />
            <Outlet />
            <Newsletter />
        </div>
    )
}