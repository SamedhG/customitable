import React, {FunctionComponent} from 'react';
import {Column} from './types';
import {TableHead} from './TableHead';


export type TableProps = {
    columns: Column[],
    rows: object[]
};

export const Table: FunctionComponent<TableProps> = React.memo(function Table(
    {columns, rows}) {



    return (
        <table>
            <TableHead columns={columns}/>
        </table>
    );
});