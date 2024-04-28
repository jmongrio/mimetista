import { Outlet } from "react-router-dom";
import { NavBar } from "../components/navbar";
import { Footer } from "../components/footer";
import ScrollToTopButton from "../components/button-go-to-up";

export function Layout() {
    return (
        <>
            <NavBar />
            <Outlet />
            <div className="fixed-bottom">
                <ScrollToTopButton />
            </div>
            <Footer />
        </>
    )
}