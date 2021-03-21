import React, {FunctionComponent} from 'react';

export type ReactComponent = React.Component | FunctionComponent;

export enum FilterType {
    TEXT,
    DATE,
    NUMERIC
}

export type Column = {
    id: string,
    header?: string | ReactComponent,
    component: ReactComponent,
    filter?: FilterType,
    sort?: boolean
};