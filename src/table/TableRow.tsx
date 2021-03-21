import React, {FunctionComponent} from 'react';
import {Column} from './types';

type TableRowProps = {
    columns: Column[],
    row: object
}

export const TableRow: FunctionComponent<TableRowProps> = React.memo(function TableRow({columns, row}) {

    return (
        <tr>
            {columns.map(({id, component: Component}) => <Component id={id} row={row}/>)}
        </tr>
    );
});
