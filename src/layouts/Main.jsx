import { Outlet } from "react-router-dom";
import Header from "../pages/shared/Header/Header";
import Footer from "../pages/shared/Footer/Footer";

const Main = () => {
    return (
        <div>
            <Header />
            <div className="min-h-[70vh]">
            <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Main;