import NavbarAdmin from "./Components/Navbar"
import { Sidebar } from "./Components/Sidebar"

export const Layout: React.FC = () => {
    return (
        <div>
            <Sidebar username={""}/>
            <NavbarAdmin username={""}/>
        </div>
    )
}