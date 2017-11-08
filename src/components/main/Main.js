import React from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../home/Home';
import AllCheckLists from '../list/AllCheckLists';
import CheckListManager from '../manager/CheckListManager';

const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/list' component={AllCheckLists}/>
            <Route exact path='/checklist' component={CheckListManager}/>
            <Route path='/checklist/:id' component={CheckListManager}/>
        </Switch>
    </main>
);

export default Main;