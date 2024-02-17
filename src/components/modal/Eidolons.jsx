import React from "react";

const Eidolons = ({data}) => {
    return (
        <>
            {
                data.map((rank, index) => {
                    return (
                        <div key={index}>
                            {rank.name}
                        </div>
                    )
                })
            }
        </>
    )
}

export default Eidolons;