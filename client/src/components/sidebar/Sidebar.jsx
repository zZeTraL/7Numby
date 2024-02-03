import {Link} from "react-router-dom";
import {useMediaQuery} from "react-responsive";

// Components
import SidebarLinks from "./subComponents/SidebarLinks.jsx";
import Language from "./subComponents/Language.jsx";
import {FiMenu, FiX} from "react-icons/fi";
import {useState} from "react";

// Constants
const currentBgLogo = 1305;

const Sidebar = ({t}) => {
    const isOnMobile = useMediaQuery({query: "(max-width: 1024px)"});
    const [isModalActive, setIsModalActive] = useState(false);

    return (
        <nav className="flex flex-col lg:w-64 lg:fixed h-full w-full bg-sidebarBg">
            {!isOnMobile ?
                <>
                    <Link to="/" className="flex relative h-64 w-64 flex-none no-underline">
                        <div className="flex items-end absolute w-[inherit] h-[inherit]">
                            <h1 className="relative left-8 bottom-10 p-0 m-0 text-2xl tracking-wide text-white">
                                <span className="text-6xl text-gg">7</span>
                                Numby
                                <span className="absolute text-sm text-gg -bottom-4 -right-2 tracking-wide">.gg</span>
                            </h1>
                        </div>
                        <div className="w-64 h-64 absolute -z-10">
                            <img className="absolute w-64 h-64" src={"./hsr/icon/character/" + currentBgLogo + ".png"} alt="BgLogo"></img>
                            <div className="h-64 w-64 absolute bg-gradient-to-b from-transparent from-50% to-sidebarBg to-100%"></div>
                        </div>
                    </Link>
                    <div className="flex flex-col p-5 overflow-y-auto h-full">
                        <SidebarLinks t={t}/>
                        <Language t={t}/>
                    </div>
                </>
                :
                <>
                    <div className="flex flex-row h-16 px-8 relative">
                        <div className="flex flex-row w-full z-10">
                            <h1 className="relative font-semibold grow flex flex-row items-center p-0 m-0 text-white text-2xl tracking-wider">
                                <span className="text-3xl text-gg">7</span>
                                Numby
                            </h1>
                            <FiMenu className="self-center text-2xl cursor-pointer opacity-75 hover:opacity-100"
                                    onClick={() => setIsModalActive(true)}/>
                        </div>
                    </div>
                    <div
                        className="fixed bg-sidebarBg w-[100vw] h-[100vh] z-50"
                        style={{display: isModalActive ? null : "none"}}
                    >
                        <div className="absolute top-4 right-0 mr-8">
                            <FiX className="text-3xl cursor-pointer opacity-75 hover:opacity-100"
                                 onClick={() => setIsModalActive(false)}/>
                        </div>
                        <div className="flex flex-col py-12 px-16 h-full overflow-y-auto">
                            <SidebarLinks t={t} handleState={setIsModalActive}/>
                            <Language t={t}/>
                        </div>
                    </div>
                </>
            }
        </nav>
    )
}

export default Sidebar;
