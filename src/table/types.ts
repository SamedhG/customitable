import {FunctionComponent} from 'react';

type CellComponentProps = {
    id: string,
    row: object
}

type HeadCellComponentProps = {

}

export type CellComponent = FunctionComponent<CellComponentProps>;
export type HeadCellComponent = FunctionComponent<HeadCellComponentProps>

export enum FilterType {
    TEXT,
    DATE,
    NUMERIC
}

export type Column = {
    id: string,
    header?: string | HeadCellComponent,
    component: CellComponent,
    filter?: FilterType,
    sort?: boolean
};