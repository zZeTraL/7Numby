import React, {Fragment, useEffect, useState} from "react";

const Skill = ({skill}) => {
    const desc = skill.desc || "";
    const params = skill.params || [];

    const [text, setText] = useState([]);

    /* Todo: Need to refactor some errors on certain characters */
    useEffect(() => {
        console.log("skill", skill);
        console.log("desc", desc);
        console.log("params", params);

        let parts = desc.split(" ");
        let str = "";
        let result = [];
        for (const part of parts) {
            // # = number
            if(!part.includes("#")){
                str += part + " ";
                if(parts.indexOf(part) === parts.length - 1) result.push(str);
            } else {
                result.push(str);
                str = "";

                // from #1[i] 1 is a number ranged from 0 to 10 get me the number after the #
                let num = part.match(/#(\d+)/)[1] - 1;
                let param = params[skill.max_level - 1][num];

                if(param % 1 !== 0 || param === 1) param = Math.round(param * 100) + "%";
                result.push(<span className="text-7">{param} </span>);
            }
        }

        setText(result);

    }, [skill]);

    return (
        <>
            <div className="flex flex-col gap-3 bg-darkBg rounded-xl py-8 px-5">
                <div className="flex justify-center">
                    <img className="w-16" src={"./hsr/" + skill.icon} alt=""/>
                </div>
                <div className="flex flex-col items-center my-2">
                    <h2 className="text-lg font-semibold tracking-wide">{skill.name}</h2>
                    <span className="text-sm opacity-65">{skill.type_text}</span>
                </div>
                <span className="">
                    {
                        text.map((part, index) => {
                            return (
                                <Fragment key={index}>
                                    {part}
                                </Fragment>
                            )
                        })
                    }
                </span>
            </div>
        </>
    )
}

export default Skill;