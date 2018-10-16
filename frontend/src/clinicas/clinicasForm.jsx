import React from 'react'

export default props => (
    <div role='form' className='clinicasForm'>
        <div className='col-xs-12 col-sm-9 col-md-10'>
            <input id='name' className='form-control' placeholder='Adicione uma clínica'></input>
        </div>
        <div className='col-xs-12 col-sm-3 col-md-2'>
            <button className='btn btn-primary'>
                <i className='fa fa-plus'></i>
            </button>
        </div>
    </div>
)