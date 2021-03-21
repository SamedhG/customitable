import React, {FunctionComponent} from 'react';
import {Column} from './types';

export type HeadCellProps = {
    column: Column
}

export const HeadCell: FunctionComponent<HeadCellProps> = React.memo(function HeadCell({column}) {

    let rendered;
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
            {rendered}
        </th>
    );
});