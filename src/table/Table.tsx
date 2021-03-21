import React, {FunctionComponent, useCallback, useState} from 'react';
import {Column, Order, RowData} from './types';
import {TableHead} from './TableHead';
import {TableBody} from './TableBody';

export type TableProps = {
    columns: Column[],
    rows: RowData[]
};

function compare(a: any, b: any) {
    if (a > b) return 1;
    else if (a < b) return -1;
    else return 0;
}

export const Table: FunctionComponent<TableProps> = React.memo(function Table(
    {columns, rows}) {

    const [renderedRows, setRenderedRows] = useState(rows);

    const onSort: (id: string, order: Order) => void = useCallback((id, order) =>
            setRenderedRows(prevRows => order === Order.ASC
                ? [...prevRows].sort((a, b) => compare(a[id], b[id]))
                : [...prevRows].sort((a, b) => compare(b[id], a[id]))), []);

    return (
        <table>
            <TableHead columns={columns} onSort={onSort}/>
            <TableBody columns={columns} rows={renderedRows}/>
        </table>
    );
});