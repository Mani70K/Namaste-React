import React from "react";
import ReactDOM  from "react-dom";

const heading=React.createElement("h1",{
    id:"heading",
    xyz:"abc"
},"Namaste Mani From React Seperately")

const root=ReactDOM.createRoot(document.getElementById("root"))

root.render(heading);