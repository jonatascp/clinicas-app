import React, { Component } from 'react'
import axios from 'axios'

import PageHeader from '../template/pageHeader'
import ClinicasForm from './clinicasForm'
import ClinicasList from './clinicasList'

const URL = 'http://localhost:3003/api/clinicas'

export default class Clinicas extends Component {
    
    constructor(props) {
        super(props)
        this.state = { clinicName: '', list: [] }

        this.handleAdd = this.handleAdd.bind(this)
        this.handleChange = this.handleChange.bind(this)

        this.refresh()
    }

    refresh() {
        axios.get(`${URL}?sort=-createdAt`)
            .then(resp => this.setState({ ...this.state, clinicName: '', list: resp.data})) 
    }

    handleAdd() {
        const name = this.state.clinicName
        console.log('Add Name:' + name)
        axios.post(URL, { name }).then(resp => this.refresh())
    }

    handleChange(e) {
        this.setState({...this.state, clinicName: e.target.value })
    }

    handleRemove(clinica) {
        axios.delete(`${URL}/${clinica._id}`)
            .then(resp => this.refresh())
    }
    
    render() {
        return (
            <div>
                <PageHeader name='Clínicas' small='Cadastro'></PageHeader>
                <ClinicasForm clinicName={this.state.clinicName}
                    handleChange={this.handleChange}
                    handleAdd={this.handleAdd} />
                <ClinicasList list={this.state.list} />
            </div>
        )
    }
}