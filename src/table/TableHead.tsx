import React, {FunctionComponent} from 'react';
import {Column} from './types';
import {HeadCell} from './HeadCell';

export type TableHeadProps = {
    columns: Column[]
}

export const TableHead: FunctionComponent<TableHeadProps> = React.memo(function ({ columns }) {

    return (
        <thead>
            <tr>
                {columns.map(column => <HeadCell column={column} />)}
            </tr>
        </thead>
    );
});