import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import {useMediaQuery} from "react-responsive";
import styled from "@emotion/styled";

const sidebarLinks = [
    {
        key: "sidebar.home",
        icon: "QuestMainIcon",
        link: "/"
    },
    {
        key: "sidebar.characters",
        icon: "AvatarIcon",
        link: "/characters"
    },
    {
        key: "sidebar.wish_counter",
        icon: "DrawcardIcon",
        link: "/wish"
    },
    {
        key: "sidebar.calculator",
        icon: "InventoryConsumablesIcon",
        link: "/calculator"
    },
    {
        key: "sidebar.timeline",
        icon: "QuestIcon",
        link: "/timeline"
    },
    {
        key: "sidebar.settings",
        icon: "SettingsIcon",
        link: "/settings"
    }
]

// Styled Components
const StyledLink = styled(Link)`
  background-color: ${(props) => props.current === "true" ? "#E94957" : null};
  opacity: ${(props) => props.current === "true" ? 1 : .7};
  &:hover {
    opacity: 1;
  }
`;
const SidebarLinks = ({t, handleState}) => {
    const isOnMobile = useMediaQuery({query: "(max-width: 1024px)"});
    const [currentPath, setCurrentPath] = useState(window.location.pathname);

    return (
        <div className="flex flex-col grow-8 gap-4 overflow-y-auto z-10">
            {
                sidebarLinks.map((linkData, index) => {
                    return (
                        <StyledLink
                            key={index}
                            to={linkData.link}
                            current={(currentPath === linkData.link).toString()}
                            onClick={() => {
                                setCurrentPath(linkData.link)
                                if(isOnMobile) handleState(false);
                            }}
                            className="flex flex-row opacity-70 items-center rounded-xl px-4 py-3 text-white no-underline duration-300 ease-in"
                        >
                            <div className="flex flex-row items-center">
                                <img
                                    src={"./hsr/icon/sign/" + linkData.icon + ".png"}
                                    alt={linkData.key}
                                    className="w-8 h-8 mr-3"
                                />
                                <span className="text-lg font-semibold tracking-wide leading-none">
                                    {t(linkData.key)}
                                </span>
                            </div>
                        </StyledLink>
                    )
                })
            }
        </div>
    )
}

export default SidebarLinks;