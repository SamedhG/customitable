import React, {FunctionComponent, ReactNode, useMemo} from 'react';
import {Column, Order} from './types';

export type HeadCellProps = {
    column: Column,
    onSort: (id: string, order: Order) => void
}

const classes = {
    arrow: {
        borderStyle: 'solid',
        borderWidth: '0 3px 3px 0',
        borderColor: 'black',
        display: 'inline-block',
        padding: 3
    },
    up: {
        transform: 'rotate(-135deg)',
        WebkitTransform: 'rotate(-135deg)'
    },
    down: {
        transform: 'rotate(45deg)',
        WebkitTransform: 'rotate(45deg)'
    }
}

export const HeadCell: FunctionComponent<HeadCellProps> = React.memo(function HeadCell({column, onSort}) {

    const { sort: sortable = true } = column;

    const arrowUpStyle = useMemo(() => ({...classes.arrow, ...classes.up}), []);
    const arrowDownStyle = useMemo(() => ({...classes.arrow, ...classes.down}), []);

    let rendered: ReactNode;
    //TODO: figure out how to best default the header name using the id
    if (typeof column.header === 'undefined') {
        rendered = <span>{column.id}</span>
    } else if (typeof column.header === 'string') {
        rendered = <span>{column.header}</span>;
    } else {
        rendered = column.header;
    }

    return (
        <th>
            <div>
                {rendered}
                { sortable && <div>
                    <button style={arrowUpStyle} onClick={() => onSort(column.id, Order.ASC)}/>
                    <button style={arrowDownStyle} onClick={() => onSort(column.id, Order.DESC)}/>
                </div> }
            </div>
        </th>
    );
});