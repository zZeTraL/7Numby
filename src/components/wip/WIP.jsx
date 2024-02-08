import React from "react";

const WIP = ({title}) => {
    return (
        <div className="flex items-center justify-center min-h-[inherit]">
            <img className="w-64" src={"./wip/Screwllum_Sticker_01.webp"} alt="ScrewllumWIP"/>
            <h1 className="text-4xl">{title}</h1>
        </div>
    );
}

export default WIP;