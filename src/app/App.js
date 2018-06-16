import React from 'react';
import {Route, Switch} from "react-router-dom";

import NavBar from "./common/navbar/NavBar";
import TubeLinesContainer from "./tube/tube-lines/TubeLinesContainer";
import TubeLineItemContainer from "./tube/tube-line-item/TubeLineItemContainer";
import TubeStopPointContainer from "./tube/tube-stop-point/TubeStopPointContainer";

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
        <Route exact path={`${match.url}/:tubeLineId`} component={TubeLineItemContainer}/>
        <Route exact path={`${match.url}/:tubeLineId/:tubeStopPointId`} component={TubeStopPointContainer}/>
        <Route exact path={match.url} component={TubeLinesContainer}/>
    </div>
);

export default App;
