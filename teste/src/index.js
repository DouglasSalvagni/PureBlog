import React from 'react'
import ReactDOM from 'react-dom'
import App from './app'

// css

import 'bootstrap/dist/css/bootstrap.css'
import './assets/css/style.css'
import './assets/css/normalize.css'
import './assets/css/font-icons.css'

//js

import 'jquery/dist/jquery.min.js'
import $ from 'jquery'
import 'bootstrap/dist/js/bootstrap.bundle'
// import 'modernizr/src/ModernizrProto.js'
// import 'modernizr/src/modernizr.min.js'
// import './assets/js/scripts.js'
import lazisizes from 'lazysizes'
import easing from 'easing'
import 'flickity/dist/flickity.pkgd.min.js'



ReactDOM.render(
    <div>
        <App />
    </div>
, document.getElementById('root'))