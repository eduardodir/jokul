import React from "react";
import ReactDOM from "react-dom";

// Import core styles, webfonts and tab listener (same for all components):
import { initTabListener } from "@fremtind/jkl-core";
import "@fremtind/jkl-core/core.scss";
import "../../webfonts/documentation/internal.scss";

// Imports required for showing example (same for all components):
import { DevExample } from "@fremtind/jkl-portal-components";
import "@fremtind/jkl-portal-components/dev-example.min.css";
import "@fremtind/jkl-radio-button/radio-button.min.css";
import "@fremtind/jkl-checkbox/checkbox.min.css";
import "@fremtind/jkl-icon-button/icon-button.min.css";

// Import actual example and component stylesheet (specific for this component):
import { Example } from "./Example";
import "@fremtind/jkl-datepicker/datepicker.css";

initTabListener();

ReactDOM.render(
    <DevExample
        component={Example}
        knobs={{
            boolProps: ["Utvidet velger", "Kompakt", "Med feil", "Med hjelpetekst"],
            choiceProps: [
                {
                    name: "Variant",
                    values: ["small", "medium", "large"],
                    defaultValue: 1,
                },
            ],
        }}
    />,
    document.getElementById("app"),
);
