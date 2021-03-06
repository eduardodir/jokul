import React from "react";
import { ExampleComponentProps } from "@fremtind/jkl-portal-components";
import { ErrorMessage, InfoMessage, SuccessMessage, WarningMessage } from "../src";

export function Example({ boolValues, choiceValues }: ExampleComponentProps) {
    const types = {
        Infomelding: InfoMessage,
        Suksessmelding: SuccessMessage,
        Advarselsmelding: WarningMessage,
        Feilmelding: ErrorMessage,
    };

    //@ts-ignore
    const C = types[choiceValues["Type"]] || InfoMessage;
    return (
        <C fullWidth={boolValues && boolValues["Full bredde"]} title={choiceValues && choiceValues["Type"]}>
            Cupidatat Lorem incididunt incididunt in non mollit cillum Lorem eiusmod sunt magna.
        </C>
    );
}

export default Example;
