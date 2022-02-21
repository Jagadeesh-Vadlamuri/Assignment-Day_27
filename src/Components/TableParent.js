import React from 'react'
import TableHead from './TableHead';
import TableBody from './TableBody';

function TableParent() {
  return (
    <React.Fragment>
        <table>
            <TableHead />
            <TableBody />
        </table>
    </React.Fragment>
  )
}

export default TableParent