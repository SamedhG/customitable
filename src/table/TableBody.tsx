import React, {FunctionComponent} from 'react';
import {Column} from './types';
import {TableRow} from './TableRow';

type TableBodyProps = {
    columns: Column[],
    rows: object[]
}

export const TableBody: FunctionComponent<TableBodyProps> = React.memo(function TableBody({columns, rows}) {

    return (
        <tbody>
        {rows.map(row => <TableRow columns={columns} row={row}/>)}
        </tbody>
    );
});
