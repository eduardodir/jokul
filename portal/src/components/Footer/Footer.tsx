import React from "react";
import classNames from "classnames";

import "./Footer.scss";
import { Logo } from "@fremtind/jkl-logo-react";
import { Link } from "@fremtind/jkl-typography-react";

interface Props {
    className?: string;
}

export function Footer({ className }: Props) {
    const componentClassName = classNames(
        {
            "jkl-portal-footer": true,
        },
        className,
    );
    return (
        <footer className={componentClassName}>
            <span></span>

            <div>
                <Link>Personvern</Link>
                <Link>Om oss</Link>
            </div>
            <Logo className="jkl-portal-footer__logo" isSymbol={false} />
            <span></span>
        </footer>
    );
}
