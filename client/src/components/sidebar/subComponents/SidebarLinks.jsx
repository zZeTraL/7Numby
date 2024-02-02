import React from "react";
import { Link } from "react-router-dom";
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
    &:hover {
        opacity: 1;
    }
`;
const SidebarLinks = ({t}) => {
    return (
        <div className="flex flex-col grow-8 gap-4 overflow-y-auto z-10">
            {
                sidebarLinks.map((linkData, index) => {
                    return (
                        <StyledLink
                            key={index}
                            to={linkData.link}
                            className="flex flex-row opacity-70 items-center rounded-xl px-4 py-3 text-white no-underline duration-300 ease-in"
                        >

                            <div className="flex mr-3 h-8 w-8">
                                <img className="h-full" src={"./hsr/icon/sign/" + linkData.icon + ".png"} alt={linkData.key} />
                            </div>
                            <span className="text-lg font-semibold leading-none tracking-wide">
                                {t(linkData.key)}
                            </span>

                        </StyledLink>
                    )
                })
            }
        </div>
    )
}

export default SidebarLinks;