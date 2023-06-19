import React, {ReactNode} from 'react';
import * as Styled from './TableComponent.styled'
import {TableRow} from "./TableRow";

interface TableI {
    headerColumnNames: string[];
    bodyRows: Array<(string | number | ReactNode)[]>
}

export const TableComponent = ({headerColumnNames, bodyRows}: TableI) => (
    <table className="table-auto w-full">
        <thead className="bg-gray-100">
        <Styled.TableTrHead>
            {headerColumnNames.map((name, key) =>
                    <Styled.TableTh key={key}>
                        {name}
                    </Styled.TableTh>)}
        </Styled.TableTrHead>
        </thead>
        <tbody>
        {bodyRows.map((columnValues, key) =>
            <TableRow key={key} index={key} columnValues={columnValues}/>)}
        </tbody>
    </table>
);
