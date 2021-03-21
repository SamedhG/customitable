import React, {FunctionComponent} from 'react';
import {Column, RowData} from './types';
import {TableRow} from './TableRow';

type TableBodyProps = {
    columns: Column[],
    rows: RowData[]
}

export const TableBody: FunctionComponent<TableBodyProps> = React.memo(function TableBody({columns, rows}) {

    return (
        <tbody>
        {rows.map((row, i) => <TableRow key={i} columns={columns} row={row}/>)}
        </tbody>
    );
});
