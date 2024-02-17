import React, {useState} from "react";
import styled from "@emotion/styled";

const StyledEidolonImage = styled.img`
    transition: all ease-in 300ms;
    opacity: ${props => props.current ? "1" : "0.5"};
    scale: ${props => props.current ? "1.15" : null};
    &:hover {
        opacity: 1;
        scale: 1.15;
        cursor: pointer;
    }
`;

const Eidolons = ({data}) => {
    const [currentEidolon, setCurrentEidolon] = useState(data[0]);
    console.log(currentEidolon)

    return (
        <div className="flex flex-col">
            <div className="grid grid-cols-3 mx-52 gap-4">
                {
                    data.map((rank, index) => {
                        return (
                            <div className="flex justify-center" key={index}>
                                <StyledEidolonImage
                                    className="w-48 ease-in duration-300"
                                    src={"./hsr/image/eidolons/" + rank.id + ".webp"}
                                    alt={"Eidolon " + (index + 1)}
                                    current={currentEidolon.id === rank.id}
                                    onClick={() => {setCurrentEidolon(rank)}}
                                />
                            </div>
                        )
                    })
                }
            </div>
            <div className="flex flex-col gap-3 bg-darkBg rounded-xl py-8 mx-12 px-5">
                {currentEidolon.name}
            </div>
        </div>

    )
}

export default Eidolons;