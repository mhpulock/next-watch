import React from "react";
import { Route } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import { Switch } from "react-router-dom";
import AddProduct from "../AddProduct/AddProduct";
import Dashboardbar from "../Dashboardbar/Dashboardbar";
import Makeadmin from "../Makeadmin/Makeadmin";
import ManageOrder from "../ManageOrder/ManageOrder";
import ManageProduct from "../ManageProduct/ManageProduct";
import MyOrder from "../MyOrder/MyOrder";
import Payment from "../Payment/Payment";
import "./Dashboardhome.css";

const Dashboardhome = () => {
  let { path } = useRouteMatch();
  return (
    <div>
      <div className="row ">
        <div className="col-lg-2 dashboard_menu">
          <div className="p-3">
            <Dashboardbar></Dashboardbar>
          </div>
        </div>
        <div className="col-lg-10 dashboard_show">
          <div className="p-5">
            <Switch>
              <Route exact path={path}>
                <h1>Welcome to Your Dashboard</h1>
              </Route>
              <Route path={`${path}/payment`}>
                <Payment></Payment>
              </Route>
              <Route path={`${path}/myorder`}>
                <MyOrder></MyOrder>
              </Route>
              <Route path={`${path}/myorder/:_ID`}>
                <MyOrder></MyOrder>
              </Route>

              <Route path={`${path}/manageorder`}>
                <ManageOrder></ManageOrder>
              </Route>
              <Route path={`${path}/addproduct`}>
                <AddProduct></AddProduct>
              </Route>
              <Route path={`${path}/makeadmin`}>
                <Makeadmin></Makeadmin>
              </Route>
              <Route path={`${path}/manageproduct`}>
                <ManageProduct></ManageProduct>
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboardhome;
