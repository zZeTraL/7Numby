import React, {Fragment} from "react";
import styled from "@emotion/styled";
import * as path from "path";

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

function processEidolonText(text){
    let originalTextSplit = text.split(" ").map(word => {
        return word.includes("\\") ? word.replace("\\n", " LineBreak ").split(" ") : word;
    }).flat();

    let str = "";
    return originalTextSplit.reduce((accumulator, word, index) => {
        if (word.includes("LineBreak")) {
            accumulator.push(str.trim(), <br/>);
            str = "";
        } else if(word.includes("+") || !isNaN(word) || word.includes("%")){
            accumulator.push(str.trim(), <span className="text-7"> {word} </span>);
            str = "";
        } else {
            str += word + " ";
            if (index === originalTextSplit.length - 1) accumulator.push(str.trim());
        }
        return accumulator;
    }, []);
}

function getEidolonImageURL(id){
    return availableEidolons.includes(id.slice(0, -1)) ? `./hsr/image/eidolons/${id}.webp` : `./hsr/image/eidolons/130701.webp`;
}

const Eidolon = ({rank}) => {

    let eidolonImageURL = getEidolonImageURL(rank.id);
    let desc = processEidolonText(rank.desc)

    return (
        <div className="flex flex-row items-center gap-4 bg-darkBg rounded-xl p-4">
            <img className="size-32 hover:scale-110 hover:cursor-pointer duration-300 ease-in" src={eidolonImageURL} alt="Eidolon"/>
            <div className="flex flex-col gap-2 max-w-2xl">
                <h2 className="text-md font-semibold tracking-wide leading-5">{rank.name}</h2>
                <span className="text-sm tracking-tighter">
                    {
                        desc.map((part, index) => {
                            return (
                                <Fragment key={index}>
                                    {part}
                                </Fragment>
                            )
                        })
                    }
                </span>

            </div>
        </div>
    )
}

export default Eidolon;