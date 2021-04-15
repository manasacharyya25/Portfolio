
import React from 'react';
import ReactDom from 'react-dom'

import { Banner } from './components/banner/banner';
import { Skills } from './components/skill/skill';
import { Summary } from './components/summary/summary'


import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import { TriedItOnce } from './components/trieditonce/trieditonce';

function Home() {
    return (
        <div className="container">
            <div className="banner-container">
                <Banner />
            </div>
            <div className="body-container">
                <Summary />
                <Skills />
            </div>
            <TriedItOnce />
        </div>
    )
}

ReactDom.render(<Home />, document.getElementById('root'));