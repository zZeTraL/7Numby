import React from "react";
import {useMediaQuery} from "react-responsive";

// Icon
import {FaDiscord, FaTwitter, FaReddit, FaGithub} from "react-icons/fa";

const Footer = ({t}) => {
    const isOnMobile = useMediaQuery({query: "(max-width: 1024px)"});

    return (
        <footer className="flex flex-col justify-end lg:ml-64 px-10 py-4 opacity-75">
            <div className="flex flex-col gap-2">
                <span>{t("footer.not_affiliated")}</span>
                <span>{t("footer.disclaimer")}</span>
            </div>
            <div className="flex my-8 gap-4">
                <div className="flex flex-col lg:flex-row gap-6">
                    <div className="flex flex-col gap-4">
                        <span className="opacity-75">{t("footer.my_links")}</span>
                        <div className="flex flex-row items-center text-white gap-3">
                            <FaDiscord className="text-2xl"/> zZeTraL
                        </div>
                    </div>
                    {isOnMobile ? null : <div className="w-0.5 bg-white opacity-75"></div>}
                    <div className="flex flex-col gap-4">
                        <span className="opacity-75">{t("footer.official_links")}</span>
                        <div className="flex flex-row gap-3">
                            <a className="flex gap-2 no-underline text-white items-center hover:text-gg" href="https://discord.gg/HonkaiStarRail" target="_blank" rel="noreferrer">
                                <FaDiscord className="text-2xl hover:cursor-pointer"/> Discord
                            </a>
                            <a className="flex gap-2 no-underline text-white items-center hover:text-gg" href="https://classNameitter.com/HonkaiStarRail" target="_blank" rel="noreferrer">
                                <FaTwitter  className="text-2xl hover:cursor-pointer"/> Twiiter
                            </a>
                            <a className="flex gap-2 no-underline text-white items-center hover:text-gg" href="https://reddit.com/r/HonkaiStarRail/" target="_blank" rel="noreferrer">
                                <FaReddit className="text-2xl hover:cursor-pointer"/> Reddit
                            </a>
                        </div>
                    </div>
                    {isOnMobile ? null : <div className="w-0.5 bg-white opacity-75"></div>}
                    <div className="flex flex-col gap-4">
                        <span className="opacity-75">{t("footer.credits")}</span>
                        <div className="flex flex-row gap-3">
                            <a className="flex gap-2 no-underline text-white items-center hover:text-gg" href="https://github.com/Mar-7th/StarRailRes" target="_blank" rel="noreferrer">
                                <FaGithub className="text-2xl hover:cursor-pointer"/> StarRailRes
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;