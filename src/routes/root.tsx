import { Outlet } from "react-router-dom";
import Header from "src/layout/Header/Header";
import Newsletter from "src/layout/Newsletter/Newsletter";
import Footer from "src/layout/Footer/Footer";

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