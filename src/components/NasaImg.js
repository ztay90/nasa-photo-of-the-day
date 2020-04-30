import React from "react";

const NasaImg = props => {
    // if (!props.url) return <h3>Loading...</h3>;
    return (
        <img src={props.url}  alt="Nasa Photo of the Day" />
    );
};
export default NasaImg