import { Outlet } from "react-router-dom";
import Header from "../components/Sections/Header/Header";
import Newsletter from "../components/Sections/Newsletter/Newsletter";
import Footer from "../components/Sections/Footer/Footer";

export default function Root() {
    return(
        <div>
            <Header />
            <Outlet />
            <Newsletter />
            <Footer />
        </div>
    )
}