import React, { ReactNode } from "react";
import { Layout } from ".";
import { GitHubLinks } from "./components";
import "../Layout/Layout.scss";

interface Props {
    location: Location;
    children: ReactNode;
    pageContext: {
        frontmatter?: {
            title: string;
            react?: string;
            scss?: string;
        };
    };
}

export const ComponentLayout = ({ location, children, pageContext }: Props) => {
    return (
        <Layout
            location={location}
            title={pageContext?.frontmatter?.title}
            isComponentPage={!!(pageContext?.frontmatter?.react || pageContext?.frontmatter?.scss)}
            isFrontpage={location.pathname === "/"}
        >
            {pageContext?.frontmatter?.title && <h1 className="jkl-title-large">{pageContext.frontmatter.title}</h1>}
            <GitHubLinks react={pageContext?.frontmatter?.react} scss={pageContext?.frontmatter?.scss} />
            {children}
        </Layout>
    );
};

export default ComponentLayout;
