import React, { Component } from 'react'

import PageHeader from '../template/pageHeader'
import ClinicasForm from './clinicasForm'
import ClinicasList from './clinicasList'

export default class Clinicas extends Component {
    
    constructor(props) {
        super(props)
        this.state = { clinicName: '', list: [] }

        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleAdd() {
        console.log(this.state.clinicName)
    }

    handleChange(e) {
        this.setState({...this.state, clinicName: e.target.value })
    }
    
    render() {
        return (
            <div>
                <PageHeader name='Clínicas' small='Cadastro'></PageHeader>
                <ClinicasForm clinicName={this.state.clinicName}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd} />
                <ClinicasList />
            </div>
        )
    }
}