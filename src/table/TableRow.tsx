import React, {FunctionComponent} from 'react';
import {Column, RowData} from './types';

type TableRowProps = {
    columns: Column[],
    row: RowData
}

export const TableRow: FunctionComponent<TableRowProps> = React.memo(function TableRow({columns, row}) {

    return (
        <tr>
            {columns.map(({id, component: Component}) => <td key={id}><Component id={id} row={row}/></td>)}
        </tr>
    );
});
