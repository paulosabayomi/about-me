import React from "react";

const TechStackPill = React.memo(({name, image}: {name: string; image: string}) => {
    return (
        <div className="tech-stack-container">
            <div className="tech-stack-image">
                <img src={image} alt="" />
            </div>
            <div className="tech-stack-name">
                {name}
            </div>
        </div>
    )
});

export default TechStackPill;