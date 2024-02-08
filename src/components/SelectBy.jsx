import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";

// Icon
import {FiChevronDown, FiChevronUp} from "react-icons/fi";

// Data
const SelectBy = ({data, callback}) => {
    const [t, i18n] = useTranslation();
    const [active, setActive] = useState(false);
    const [option, setOption] = useState(undefined);

    const options = data.options;


    return (
        <div
            className="flex flex-col justify-center relative px-4 w-full h-[inherit] rounded-xl"
            onClick={() => setActive(!active)}
            style={!active ? null : {outline: "2px solid rgb(233 73 87 / 1)"}}>

            <div className="flex flex-row items-center">
                <div className="grow">
                    {
                        !option ? t(data.title) : t("sorter." + option)
                    }
                </div>
                <FiChevronDown
                    className="text-2xl ease-in font-bold duration-150"
                    style={{transform: active ? "rotate(180deg)" : "rotate(0deg)"}}
                />
            </div>
            {
                !active ?
                        null
                    :
                        <div className="absolute flex flex-col p-4 w-full bg-darkBg rounded-xl right-0 top-[72px] z-10 gap-4">
                            {
                                options.map((option, index) => {
                                    return (
                                        <div
                                            key={index}
                                            className="p-3 hover:bg-gg rounded-xl cursor-pointer"
                                            onClick={() => {
                                                setOption(option)
                                                callback({type: "UPDATE_FILTER_OPTION", payload: option})
                                            }}
                                        >
                                            {t("sorter." + option)}
                                        </div>
                                    )
                                })
                            }
                        </div>
            }
        </div>
    )
}

export default SelectBy;