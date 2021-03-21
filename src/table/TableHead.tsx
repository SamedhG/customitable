import React, {FunctionComponent} from 'react';
import {Column, Order} from './types';
import {HeadCell} from './HeadCell';

export type TableHeadProps = {
    columns: Column[],
    onSort: (id: string, order: Order) => void
}

export const TableHead: FunctionComponent<TableHeadProps> = React.memo(function ({columns, onSort}) {

    return (
        <thead>
        <tr>
            {columns.map(column => <HeadCell key={column.id} column={column} onSort={onSort}/>)}
        </tr>
        </thead>
    );
});