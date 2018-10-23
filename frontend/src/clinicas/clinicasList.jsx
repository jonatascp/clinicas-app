import React from 'react'

import IconButton from '../template/iconButton'

export default props =>  {
    
    const renderRows = () => {
        const list = props.list || []
        return list.map(clinica => (
            <tr key={clinica._id}>
                <td>{clinica.name}</td>
                <td>
                    <IconButton style='danger' icon='trash-o'
                        onClick={() => props.handleRemove(clinica)}></IconButton>
                </td>
            </tr>
        ))
    }
    
    return (
        <table className='table'>
            <thead>
                <tr>
                    <th>Nome Clínica</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                { renderRows() }
            </tbody>
        </table>
    )
}