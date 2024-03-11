import React, {Fragment, useEffect, useState} from "react";
import {getDefaultLevel, getParamsByLevel} from "../../data/utils.js";

const Skill = ({skill}) => {
    const [parts, setParts] = useState([]);
    const [level, setLevel] = useState(getDefaultLevel(skill));

    useEffect(() => {
        const desc = skill.desc.replaceAll("\n", " LineBreak ").split(" ");
        const param = getParamsByLevel(skill, level);

        let str = "";
        const updatedParts = desc.reduce((accumulator, text, index) => {
            if (text.includes("LineBreak")) {
                // If it's a line break, push the string and the line break
                accumulator.push(str.trim(), <br/>, <br/>);
                str = "";
            } else if (!text.includes("#")) {
                str += text + " ";
                // If it's the last element, push the string
                if (index === desc.length - 1) accumulator.push(str.trim());
            } else {
                // This is a number either #1[i]% or #1[i]
                // get the number after the #
                const num = text.match(/#(\d+)/)[1];
                let value = param[num - 1]
                if(text.includes("%")) {
                    value *= 100;
                    value = `${value % 1 === 0 ? value.toFixed(0) : value.toFixed(1)}%`;
                }
                accumulator.push(str.trim(), <span className="text-7"> {value} </span>);
                str = "";
            }
            return accumulator;
        }, []);
        setParts(updatedParts);
    }, [skill.desc, level]);

    const handleState = (value = 1) => {
        let levelLimit;
        if(level === 0 && value === -1) return;
        switch (skill.type) {
            case "Normal":
                levelLimit = 8;
                break;
            case "BPSkill": case "Ultra": case "Talent":
                levelLimit = 14;
                break;
            default:
                return;
        }
        setLevel(level === levelLimit ? 0 : level + value);
    }

    return (
        <>
            <div className="flex flex-col gap-3 bg-darkBg rounded-xl py-8 px-5">
                <div className="flex justify-center">
                    <img className="w-16" src={"./hsr/" + skill.icon} alt=""/>
                </div>
                <div className="flex flex-col items-center my-2 gap-1">
                    <h2 className="text-md font-semibold tracking-wide leading-5">{skill.name}</h2>
                    <span className="text-sm opacity-65">{skill.type_text}</span>
                </div>
                <div className="grow flex flex-col">
                    <span className="grow text-md tracking-tighter">
                        {
                            parts.map((part, index) => {
                                return (
                                    <Fragment key={index}>
                                        {part === " LineBreak " ? <br/> : part}
                                    </Fragment>
                                )
                            })
                        }
                    </span>
                    <div className="mt-8 flex flex-row justify-center items-center gap-3">
                        <button
                            className="text-md opacity-65 hover:cursor-pointer"
                            onClick={() => {handleState(-1)}}
                        >
                            -
                        </button>
                        <button
                            className="text-xs ease-in duration-300 hover:cursor-pointer hover:text-gg"
                            onClick={() => {handleState()}}
                        >
                            Lv. {level + 1}
                        </button>
                        <button
                            className="text-md opacity-65 hover:cursor-pointer"
                            onClick={() => {handleState()}}
                        >
                            +
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Skill;