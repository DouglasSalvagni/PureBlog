import React, { Component } from 'react'
import Preloader from './components/Preloader'
import MobileSidenavTest from './components/MobileSidenavTest'
import NavigationTest from './components/NavigationTest'
import ContentOverlay from './components/ContentOverlay'
import Subscribe from './components/Subscribe'
import Main from './components/Main'




class App extends Component {
    render() {

        return(
            <React.Fragment>
                <ContentOverlay />
                <Preloader />
                <Subscribe />
                <MobileSidenavTest />
                <NavigationTest />
                <Main />
            </React.Fragment>
        )
    }
}

export default App