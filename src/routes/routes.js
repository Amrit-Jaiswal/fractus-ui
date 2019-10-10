import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import UserProfile from "@/pages/UserProfile.vue";
import EsgAnalytics from "@/pages/EsgAnalytics.vue";
import Screening from "@/pages/Screening.vue";
import TableList from "@/pages/TableList.vue";
import Icons from "@/pages/Icons.vue";
import Maps from "@/pages/Maps.vue";
import Notifications from "@/pages/Notifications.vue";
import CSR from "@/pages/CSR.vue";
import QUES from "@/pages/Questionnaire.vue";

const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/dashboard",
    children: [
      {
        path: "dashboard",
        name: "Dashboard",
        component: Dashboard
      },
      {
        path: "screening",
        name: "Client Screning",
        component: Screening
      },
      {
        path: "csr",
        //name: "CSR",
        component: CSR
      },
      {
        path: "user",
        name: "User Profile",
        component: UserProfile
      },
      {
        path: "clientlist",
        name: "Client Report",
        component: TableList
      },
      {
        path: "icons",
        name: "Icons",
        component: Icons
      },
      {
        path: "maps",
        name: "Maps",
        meta: {
          hideFooter: true
        },
        component: Maps
      },
      {
        path: "notifications",
        name: "Notifications",
        component: Notifications
      },
      {
        path: "analytic",
        name: "Analytics",
        component: EsgAnalytics
      },
      {
        path: "ques",
        name: "Questionnaire",
        component: QUES
      }
    ]
  }
];

export default routes;
