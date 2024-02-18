import React, {Fragment} from "react";
import styled from "@emotion/styled";

const StyledEidolonImage = styled.img`
    transition: all ease-in 400ms;
    opacity: ${props => props.current ? "1" : ".4"};
    scale: ${props => props.current ? "1.2" : null};
    &:hover {
        opacity: 1;
        scale: 1.15;
        cursor: pointer;
    }
`;

let availableEidolons = ["10010", "13070"]

const Eidolon = ({rank}) => {

    // TODO: Need to remove it when I've added each eidolons images to the project
    let eidolonImageURL = "";

    // if rank.id corresponds to 13070 without the X, then it's a special case
    // delete the last digi
    if(availableEidolons.includes(rank.id.slice(0, -1))){
        eidolonImageURL = `./hsr/image/eidolons/${rank.id}.webp`;
    } else {
        eidolonImageURL = `./hsr/image/eidolons/130701.webp`;
    }


    return (
        <div className="flex flex-row items-center gap-4 bg-darkBg rounded-xl p-4">
            <img className="w-32 h-32 hover:scale-110 hover:cursor-pointer duration-300 ease-in" src={eidolonImageURL} alt="Eidolon"/>
            <div className="flex flex-col gap-2 max-w-2xl">
                <h2 className="text-md font-semibold tracking-wide leading-5">{rank.name}</h2>
                <span className="text-sm tracking-tighter">
                    {rank.desc}
                </span>

            </div>
        </div>
    )
}

export default Eidolon;