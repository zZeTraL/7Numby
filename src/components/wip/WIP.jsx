import React from "react";

const WIP = ({title, desc=undefined}) => {
    return (
        <div className="flex items-center justify-center min-h-[inherit]">
            <img className="w-64" src={"./wip/Screwllum_Sticker_01.webp"} alt="ScrewllumWIP"/>
            <div className="flex flex-col gap-2">
                <h1 className="text-4xl">{title}</h1>
                <span>{desc && desc}</span>
            </div>
        </div>
    );
}

export default WIP;