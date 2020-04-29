import React from "react";

const NasaImg = props => {
    if (!props.url) return <h3>Loading...</h3>;
    return (
        <img src={props.url} alt={props.media_type} />
    );
};
export default NasaImg