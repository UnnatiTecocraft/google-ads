import React from "react";
import logo from "../logo.svg";

export const Sample = () => {
    return (
        <div style={{ backgroundColor: "#282c34", color: "white", flex: 1 }}>
            <ul>
                <li style={{ flexDirection: "row" }}>
                    <img src={logo} style={{ width: 50 }} alt="logo" />
                </li>
                <li style={{ flexDirection: "row" }}>
                    <img src={logo} style={{ width: 50 }} alt="logo" />
                </li>
                <li style={{ flexDirection: "row" }}>
                    <img src={logo} style={{ width: 50 }} alt="logo" />
                </li>
                <li style={{ flexDirection: "row" }}>
                    <img src={logo} style={{ width: 50 }} alt="logo" />
                </li>
                <li style={{ flexDirection: "row" }}>
                    <img src={logo} style={{ width: 50 }} alt="logo" />
                </li>
            </ul>
            <ol>
                <li>ABCD</li>
                <li>ABCD</li>
                <li>ABCD</li>
                <li>ABCD</li>
                <li>ABCD</li>
            </ol>
        </div>
    );
};
