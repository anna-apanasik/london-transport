import React from 'react';
import {Route, Switch} from "react-router-dom";
import {Redirect} from "react-router";

import NavBar from "./common/navbar/NavBar";
import TubeLinesContainer from "./tube/tube-lines/TubeLinesContainer";
import TubeLineItemContainer from "./tube/tube-line-item/TubeLineItemContainer";
import TubeStopPointContainer from "./tube/tube-stop-point/TubeStopPointContainer";
import SearchingResults from "./common/searching-results/SearchingResults";

const App = () => (
    <div>
        <header>
            <NavBar/>
        </header>
        <div>
            <Switch>
                <Route exact path="/" render={() => (<Redirect to="/tube-lines"/>)}/>
                <Route path="/tube-lines" component={TubeLines}/>
                <Route path="/search/:query" component={SearchingResults}/>
                <Route path="/stop-point/:tubeStopPointId" component={TubeStopPointContainer}/>
            </Switch>
        </div>
    </div>
);

const TubeLines = ({match}) => (
    <div>
        <Route exact path={`${match.url}/:tubeLineId`} component={TubeLineItemContainer}/>
        <Route exact path={match.url} component={TubeLinesContainer}/>
    </div>
);

export default App;
