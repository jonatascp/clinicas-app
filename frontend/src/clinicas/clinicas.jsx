import React, { Component } from 'react'

import PageHeader from '../template/pageHeader'
import ClinicasForm from './clinicasForm'
import ClinicasList from './clinicasList'

export default class Clinicas extends Component {
    
    constructor(props) {
        super(props)
        this.handleAdd = this.handleAdd.bind(this)
    }

    handleAdd() {
        console.log(this)
    }
    
    render() {
        return (
            <div>
                <PageHeader name='Clínicas' small='Cadastro'></PageHeader>
                <ClinicasForm handleAdd={this.handleAdd} />
                <ClinicasList />
            </div>
        )
    }
}