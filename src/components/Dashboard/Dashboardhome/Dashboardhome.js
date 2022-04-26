import React from "react";
import { Route } from "react-router-dom";
import { useRouteMatch } from "react-router-dom";
import { Switch } from "react-router-dom";
import PrivateRoute from "../../PrivateRoute/PrivateRoute";
import AddProduct from "../AddProduct/AddProduct";
import Dashboardbar from "../Dashboardbar/Dashboardbar";
import Makeadmin from "../Makeadmin/Makeadmin";
import ManageOrder from "../ManageOrder/ManageOrder";
import ManageProduct from "../ManageProduct/ManageProduct";
import ManageUser from "../ManageUser/ManageUser";
import MyOrder from "../MyOrder/MyOrder";
import Payment from "../Payment/Payment";
import Subscriber from "../Subscriber/Subscriber";
import "./Dashboardhome.css";

const Dashboardhome = () => {
  let { path } = useRouteMatch();
  return (
    <div>
      <div className="row ">
        <div className="col-lg-2 dashboard_menu">
          <div className="d_bar">
            <Dashboardbar></Dashboardbar>
          </div>
        </div>
        <div className="col-lg-10 dashboard_show">
          <div className="d_board_show">
            <Switch>
              <PrivateRoute exact path={path}>
                <h1>Welcome to Your Dashboard</h1>
              </PrivateRoute>
              <PrivateRoute path={`${path}/payment`}>
                <Payment></Payment>
              </PrivateRoute>
              <PrivateRoute path={`${path}/myorder`}>
                <MyOrder></MyOrder>
              </PrivateRoute>

              <PrivateRoute path={`${path}/manageorder`}>
                <ManageOrder></ManageOrder>
              </PrivateRoute>
              <PrivateRoute path={`${path}/addproduct`}>
                <AddProduct></AddProduct>
              </PrivateRoute>
              <PrivateRoute path={`${path}/makeadmin`}>
                <Makeadmin></Makeadmin>
              </PrivateRoute>
              <PrivateRoute path={`${path}/manageproduct`}>
                <ManageProduct></ManageProduct>
              </PrivateRoute>
              <PrivateRoute path={`${path}/manageuser`}>
                <ManageUser></ManageUser>
              </PrivateRoute>
              <PrivateRoute path={`${path}/subscriber`}>
                <Subscriber></Subscriber>
              </PrivateRoute>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboardhome;
