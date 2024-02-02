import {Link} from "react-router-dom";

// Components
import SidebarLinks from "./subComponents/SidebarLinks.jsx";

// Constants
const currentBgLogo = 1305;

const Sidebar = ({t}) => {
    return (
        <nav className="flex flex-col lg:w-64 lg:fixed h-full w-full bg-sidebarBg">
            <Link to="/" className="flex relative h-64 w-64 flex-none no-underline">
                <div className="flex items-end absolute w-[inherit] h-[inherit]">
                    <h1 className="relative left-8 bottom-10 p-0 m-0 text-2xl tracking-wide text-white">
                        <span className="text-6xl text-gg">7</span>
                        Numby
                        <span className="absolute text-sm text-gg -bottom-4 -right-2 tracking-wide">.gg</span>
                    </h1>
                </div>
                <div className="w-64 h-64 absolute -z-10">
                    <img className="absolute w-64 h-64" src={"./hsr/icon/character/" + currentBgLogo + ".png"}
                         alt="BgLogo"></img>
                    <div
                        className="h-64 w-64 absolute bg-gradient-to-b from-transparent from-50% to-sidebarBg to-100%"></div>
                </div>
            </Link>
            <div className="flex flex-col p-5 overflow-y-auto h-full">
                <SidebarLinks t={t}/>
            </div>
        </nav>
    )
}

export default Sidebar;
