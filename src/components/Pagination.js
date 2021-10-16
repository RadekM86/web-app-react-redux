import React from 'react';
import './Pagination.css';

const buttons = [1,2,3,4,5,6,7,8,9,10]

export default function Pagination({setOffset, offset, pageSize, setPageSize}) {
    return (
        <div className="pagination-container">
            <button className="pag-button" onClick={()=>offset >= 1 ? setOffset(offset-1) : null}>-</button>
            {buttons.map(but => <button className="pag-button" onClick={()=>setOffset(but-1)}>{but}</button>)}
            <button className="pag-button" onClick={()=>setOffset(offset+1)}>+</button>
            <select value={pageSize} onChange={(e)=> setPageSize(e.target.value)}>
                <option value={5}>5</option>
                <option value={10}>10</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
            </select>
        </div>
    )
}
