import React, { ReactNode } from "react";
import { Action } from "./CardAction";
import { PrimaryButton, SecondaryButton, TertiaryButton } from "@fremtind/jkl-button-react";

type Media = {
    src?: string;
    label?: string;
};

interface Props {
    title: string;
    children?: ReactNode;
    className?: string;
    media?: Media;
    action?: Action;
    dark?: boolean;
}

export const Card = ({ title, children, className, media, action, dark }: Props) => {
    const componentClassName = "jkl-card".concat(dark ? " jkl-card--dark" : "", className ? ` ${className}` : "");

    let Button = PrimaryButton;
    if (action) {
        switch (action.type) {
            case "secondary":
                Button = SecondaryButton;
                break;
            case "tertiary":
                Button = TertiaryButton;
                break;
            default:
                break;
        }
    }

    return (
        <div className={componentClassName}>
            {media && <img className="jkl-card__media" src={media.src} alt={media.label}></img>}
            <div>
                <span className="jkl-card__title">{title}</span>
            </div>
            <div className="jkl-card__children">{children}</div>
            <div className="jkl-card__action">{action && <Button onClick={action.onClick}>{action.name}</Button>}</div>
        </div>
    );
};
