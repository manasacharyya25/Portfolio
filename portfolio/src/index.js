
import React from 'react';
import ReactDom from 'react-dom'

import { Banner } from './components/banner/banner';
import { Skill } from './components/skill/skill';
import { Summary } from './components/summary/summary'


import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'

function Home() {
    return (
        <div className="container">
            <div className="banner-container">
                <Banner />
            </div>
            <div className="body-container">
                <Summary />
                <Skill />
            </div>
        </div>
    )
}

ReactDom.render(<Home />, document.getElementById('root'));