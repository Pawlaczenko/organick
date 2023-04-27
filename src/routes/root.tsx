import { Outlet } from "react-router-dom";
import Header from "../components/Sections/Header/Header";

export default function Root() {
    return(
        <div>
            <Header />
            <Outlet />
        </div>
    )
}