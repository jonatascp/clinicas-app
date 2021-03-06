import React from 'react'

export default props => (
    <nav className='navbar navbar-inverse bg-inverse'>
        <div className='container'>
            <div className='nav-header'>
                <a className='navbar-brand' href='#'>
                    <i className='fa fa-calendar-check-o'></i>Clínicas-App
                </a>
            </div>

            <div className='navbar-collapse collapse'>
                <ul className='nav navbar-nav'>
                    <li><a href='#/clinicas'>Clínicas</a></li>
                    <li><a href='#/about'>Sobre</a></li>
                </ul>
            </div>
        </div>
    </nav>
)