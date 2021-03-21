import React, {FunctionComponent} from 'react';
import {Column, RowData} from './types';
import {TableHead} from './TableHead';
import {TableBody} from './TableBody';


export type TableProps = {
    columns: Column[],
    rows: RowData[]
};

export const Table: FunctionComponent<TableProps> = React.memo(function Table(
    {columns, rows}) {

    return (
        <table>
            <TableHead columns={columns}/>
            <TableBody columns={columns} rows={rows}/>
        </table>
    );
});