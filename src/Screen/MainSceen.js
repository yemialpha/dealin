import React, {Component} from 'react';
import {Router, Scene } from 'react-native-router-flux';
import Header from '../Component/index';
import FirstSrceen from './FirstSrceen';



export default class Screen extends Component{
    render() {
        return(
           <Router>
               <Scene key="root">
                     <Scene 
                        initial
                        hideNavBar
                        key='home'
                        component={Header}
                        title='home'
                    />
                       <Scene 
                        hideNavBar
                        key='first'
                        component={FirstSrceen}
                        title='first'
                    />
               </Scene>
           </Router>
        );
    }
}