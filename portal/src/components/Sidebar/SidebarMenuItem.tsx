import React from "react";
// @ts-ignore
import AniLink from "gatsby-plugin-transition-link/AniLink";

interface SidebarMenuItemProps {
    idx: number;
    path: string;
    currentPath: string;
    title: string;
}
export function SidebarMenuItem({ idx, path, currentPath, title }: SidebarMenuItemProps) {
    return (
        <li
            style={{
                animationDelay: `${idx * 20}ms`,
            }}
            className="jkl-portal-sidebar-menu-item"
        >
            <AniLink
                activeClassName="jkl-portal-sidebar-menu-item__link--active"
                className="jkl-portal-sidebar-menu-item__link"
                style={{
                    animationDelay: `${idx * 20}ms`,
                }}
                to={path}
                state={{ lastPath: currentPath }}
                swipe
                direction="right"
            >
                {title}
            </AniLink>
        </li>
    );
}
