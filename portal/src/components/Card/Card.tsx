import React from "react";
// @ts-ignore
import AniLink from "gatsby-plugin-transition-link/AniLink";

import "./card.scss";

interface Props {
    heading: string;
    link: string;
}

export const Card: React.FunctionComponent<Props> = ({ heading, link, children }) => {
    // right arrow for internal links, up/right for external links:
    const arrow = link.startsWith("http") ? "\u2197" : "\u2192";

    return (
        <AniLink className="jkl-portal-card" to={link} paintDrip color="black" duration={0.6}>
            <p className="jkl-portal-card__heading">{heading}</p>
            <div className="jkl-portal-card__content">{children}</div>
            <div className="jkl-portal-card__arrow">{arrow}</div>
        </AniLink>
    );
};
