import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

// HOOKS:
import useAuth from "./hooks/useAuth";

// COMPONENTS:
const WebAppTemplate = lazy(()=>import("./components/WebAppTemplate/WebAppTemplate.jsx"));
const LoginForm = lazy(() => import("./pages/LoginPage/LoginPage.jsx"));
const ExpensesPage = lazy(() => import("./pages/ExpensesPage/ExpensesPage.jsx"));
const IncomePage = lazy(() => import("./pages/IncomePage/IncomePage.jsx"));
const ReportsPage = lazy(() => import("./pages/ReportsPage/ReportsPage.jsx"));

const App = () => {
  const {userData, isLoggedIn} = useAuth();
  console.log({userData, isLoggedIn});
  return ( 
    <>
      <Routes>
        <Route path="/" element={<WebAppTemplate/>}>
          <Route index element={<LoginForm/>}/>
          <Route path="/transactions">
            <Route path="expenses" element={<ExpensesPage/>}/>
            <Route path="income" element={<IncomePage/>}/>
          </Route>
          <Route path="/reports" element={<ReportsPage/>}/>
        </Route>

      </Routes>
    </>
   );
}
 
export default App;
