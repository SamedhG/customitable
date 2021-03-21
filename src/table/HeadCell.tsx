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
    const arrowUpStyle = useMemo(() => ({...classes.arrow, ...classes.up}), []);
    const arrowDownStyle = useMemo(() => ({...classes.arrow, ...classes.down}), []);

    const { id, sort: sortable = true, header } = column;

    let rendered: ReactNode;
    //TODO: figure out how to best default the header name using the id
    if (typeof header === 'undefined') {
        rendered = <span>{id}</span>
    } else if (typeof header === 'string') {
        rendered = <span>{header}</span>;
    } else {
        rendered = header;
    }

    return (
        <th>
            <div>
                {rendered}
                { sortable && <div>
                    <button style={arrowUpStyle} onClick={() => onSort(id, Order.ASC)}/>
                    <button style={arrowDownStyle} onClick={() => onSort(id, Order.DESC)}/>
                </div> }
            </div>
        </th>
    );
});