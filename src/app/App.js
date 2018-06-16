import React from 'react';
import {Route, Switch} from "react-router-dom";

import NavBar from "./common/navbar/NavBar";
import TubeLinesContainer from "./tube/tube-lines/TubeLinesContainer";
import TubeLineItemContainer from "./tube/tube-line-item/TubeLineItemContainer";

const App = () => (
    <div>
        <header>
            <NavBar/>
        </header>
        <div>
            <Switch>
                <Route path="/tube-lines" component={TubeLines}/>
            </Switch>
        </div>
    </div>
);

const TubeLines = ({match}) => (
    <div>
        <Route path={`${match.url}/:tubeLineId`} component={TubeLineItemContainer}/>
        <Route path={`${match.url}/:tubeLineId/:tubeStopPointId`} component={TubeLineItemContainer}/>
        <Route exact path={match.url} component={TubeLinesContainer}/>
    </div>
);

export default App;
