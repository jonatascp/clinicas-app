import React, { Component } from 'react'

import PageHeader from '../template/pageHeader'
import ClinicasForm from './clinicasForm'
import ClinicasList from './clinicasList'

export default class Clinicas extends Component {
    render() {
        return (
            <div>
                <PageHeader name='Clínicas' small='Cadastro'></PageHeader>
                <ClinicasForm />
                <ClinicasList />
            </div>
        )
    }
}