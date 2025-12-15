import { ReactElement } from "react";

export default interface JobOpening {
    id: string,
    title: string;
    description: string;
    icon:string;
    action: {
        href?: string;
        label?: string;
    };
};