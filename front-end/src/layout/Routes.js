import React from "react";

import { Redirect, Route, Switch} from "react-router-dom";
import Dashboard from "../dashboard/Dashboard";
import NotFound from "./NotFound";
import { today } from "../utils/date-time";
import NewReservation from "../reservations/NewReservation"
import NewTable from "../tables/NewTable"
import SeatTable from "../tables/SeatTable";
import SearchByNumber from "../search";
import EditReservation from "../reservations/EditReservation";
import useQuery from "../utils/useQuery"


/**
 * Defines all the routes for the application.
 *
 * You will need to make changes to this file.
 *
 * @returns {JSX.Element}
 */
function Routes() {

  const query = useQuery()
  const queryDate = query.get("date")

  return (
    <Switch>
      <Route exact={true} path="/">
        <Redirect to={"/dashboard"} />  
        {/* <Dashboard date={today()} /> */}
      </Route>
      <Route exact={true} path="/reservations">
        <Redirect to={"/dashboard"} />
      </Route>
      {/* <Route exact={true} path="/dashboard">
        <Dashboard date={today()} />
      </Route> */}
      <Route path="/dashboard">
        <Dashboard date={!queryDate ? today() : queryDate } />
        {/* <Dashboard date={today()} /> */}
      </Route>
      <Route path="/reservations/new">
        <NewReservation />
      </Route>
      <Route path="/reservations/:reservation_id/seat">
        <SeatTable />
      </Route>
      <Route path="/tables/new">
        <NewTable />
      </Route>
      <Route path="/search">
        <SearchByNumber />
      </Route>
      <Route path="/reservations/:reservation_id/edit">
        <EditReservation />
      </Route>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  );
}

export default Routes;
