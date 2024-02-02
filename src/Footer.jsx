import React from "react";

let date = new Date();
let year = date.getFullYear();

function Foot() {


    return <footer><p>Copyright {year}</p></footer>
}

export default Foot;