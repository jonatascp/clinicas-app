import React from 'react'

import Grid from '../template/grid'
import IconButton from '../template/iconButton'

export default props => (
    <div role='form' className='clinicasForm'>
        <Grid cols='12 9 10'>
            <input id='name' className='form-control' placeholder='Adicione uma clínica'></input>
        </Grid>
        <Grid cols='12 3 2'>
            <IconButton style='primary' icon='plus'
                onClick={props.handleAdd}></IconButton>
        </Grid>
    </div>
)