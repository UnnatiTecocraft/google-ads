import React, { useEffect } from "react";

const GoogleAds = ({ slot }) => {
    useEffect(() => {
        console.log(window.canRunAds === undefined);
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (err) {
            console.error(err);
        }
    }, []);

    return (
        <ins
            className="adsbygoogle"
            style={{ display: "block", border: "1px solid red" }}
            data-ad-client="ca-pub-8459868996316801"
            data-ad-slot="7775470470"
            data-ad-format="auto"
            data-full-width-responsive="true"
        ></ins>
    );
};

export default GoogleAds;
