/*!

=========================================================
* Argon Dashboard PRO React - v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-pro-react
* Copyright 2021 Creative Tim (https://www.creative-tim.com)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Alternative from "views/pages/dashboards/Alternative.js";
import Calendar from "views/pages/Calendar.js";
import Cards from "views/pages/components/Cards.js";
import Charts from "views/pages/Charts.js";
import Components from "views/pages/forms/Components.js";
import Dashboard from "views/pages/dashboards/Dashboard.js";
import Elements from "views/pages/forms/Elements.js";
import Login from "views/pages/examples/Login.js";
import Pricing from "views/pages/examples/Pricing.js";
import Profile from "views/pages/examples/Profile.js";
import ReactBSTables from "views/pages/tables/ReactBSTables.js";
import Sortable from "views/pages/tables/Sortable.js";
import Tables from "views/pages/tables/Tables.js";
import Timeline from "views/pages/examples/Timeline.js";
import Validation from "views/pages/forms/Validation.js";
import Widgets from "views/pages/Widgets.js";
import CampaignCatalog from "views/pages/CampaignCatalog.jsx";
import CampaignPage from "views/pages/CampaignPage.jsx";
import Checkout from "views/pages/Checkout.jsx";
import ConfirmPayment from "views/pages/ConfirmPayment.jsx";
import Finished from "views/pages/Finished.jsx";
import NoEntry from "views/pages/NoEntry.jsx";

const routes = [
  {
    collapse: true,
    name: "Dashboards",
    icon: "ni ni-shop text-primary",
    state: "dashboardsCollapse",
    views: [
      {
        path: "/dashboard",
        name: "Dashboard",
        miniName: "D",
        component: Dashboard,
        layout: "/admin",
      },
      {
        path: "/alternative-dashboard",
        name: "Alternative",
        miniName: "A",
        component: Alternative,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    name: "Examples",
    icon: "ni ni-ungroup text-orange",
    state: "examplesCollapse",
    views: [
      {
        path: "/pricing",
        name: "Pricing",
        miniName: "P",
        component: Pricing,
        layout: "/auth",
      },
      {
        path: "/login",
        name: "Login",
        miniName: "L",
        component: Login,
        layout: "/auth",
      },
      {
        path: "/timeline",
        name: "Timeline",
        miniName: "T",
        component: Timeline,
        layout: "/admin",
      },
      {
        path: "/profile",
        name: "Profile",
        miniName: "P",
        component: Profile,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    name: "Components",
    icon: "ni ni-ui-04 text-info",
    state: "componentsCollapse",
    views: [
      {
        path: "/cards",
        name: "Cards",
        miniName: "C",
        component: Cards,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    name: "Forms",
    icon: "ni ni-single-copy-04 text-pink",
    state: "formsCollapse",
    views: [
      {
        path: "/elements",
        name: "Elements",
        miniName: "E",
        component: Elements,
        layout: "/admin",
      },
      {
        path: "/components",
        name: "Components",
        miniName: "C",
        component: Components,
        layout: "/admin",
      },
      {
        path: "/validation",
        name: "Validation",
        miniName: "V",
        component: Validation,
        layout: "/admin",
      },
    ],
  },
  {
    collapse: true,
    name: "Tables",
    icon: "ni ni-align-left-2 text-default",
    state: "tablesCollapse",
    views: [
      {
        path: "/tables",
        name: "Tables",
        miniName: "T",
        component: Tables,
        layout: "/admin",
      },
      {
        path: "/sortable",
        name: "Sortable",
        miniName: "S",
        component: Sortable,
        layout: "/admin",
      },
      {
        path: "/react-bs-table",
        name: "React BS Tables",
        miniName: "RBT",
        component: ReactBSTables,
        layout: "/admin",
      },
    ],
  },
  {
    path: "/widgets",
    name: "Widgets",
    icon: "ni ni-archive-2 text-green",
    component: Widgets,
    layout: "/admin",
  },
  {
    path: "/charts",
    name: "Charts",
    icon: "ni ni-chart-pie-35 text-info",
    component: Charts,
    layout: "/admin",
  },
  {
    path: "/calendar",
    name: "Calendar",
    icon: "ni ni-calendar-grid-58 text-red",
    component: Calendar,
    layout: "/admin",
  },
  {
    path: "/all-campaigns",
    name: "CampaignCatalog",
    icon: "ni ni-calendar-grid-58 text-red",
    component: CampaignCatalog,
    layout: "/home",
  },
  {
    path: "/single-campaign/:campaignId",
    name: "CampaignPage",
    icon: "ni ni-calendar-grid-58 text-red",
    component: CampaignPage,
    layout: "/home",
  },
  {
    path: "/checkout",
    name: "Checkout",
    icon: "ni ni-calendar-grid-58 text-red",
    component: Checkout,
    layout: "/home",
  },
  {
    path: "/payment-confirmation",
    name: "Confirm Payment",
    icon: "ni ni-calendar-grid-58 text-red",
    component: ConfirmPayment,
    layout: "/home",
  },
  {
    path: "/finished",
    name: "Finish",
    icon: "ni ni-calendar-grid-58 text-red",
    component: Finished,
    layout: "/home",
  },
  {
    path: "/no-entry",
    name: "NoEntry",
    icon: "ni ni-calendar-grid-58 text-red",
    component: NoEntry,
    layout: "/admin",
  },
  
];

export default routes;
