import React, {ReactNode} from 'react'
import * as Styled from './TableComponent.styled'

export const TableRow = ({columnValues, index}: { columnValues: (number | string | ReactNode)[]; index: number }) => (
    <Styled.TableTrBody>
        {columnValues.map((value, key) =>
                <Styled.TableTd key={`${index} ${key}`}>
                    {value}
                </Styled.TableTd>)}
    </Styled.TableTrBody>
)