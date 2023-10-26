import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoute from "./guards/PrivateRoute";
import UserSpace from "./pages/UserSpace";
import Dashboard from "./pages/UserSpace/pages/dashboard";
import ListItems from "./pages/UserSpace/pages/ListItems";
import Login from "./pages/Login";
import Home from "./pages/Home";
import { useAuth } from "./utils/custom-hooks/useAuth";
export default function RoutesApp() {

    const { isAuthenticated } = useAuth();

    return (
        <BrowserRouter>
            <Routes>
                {/* public routes */}
                <Route key="Login" path="/login" element={<Login />} ></Route>,
                <Route key="Accueil" path="/" element={<Home />} > </Route>

                {/* protected routes */}
                <Route key="layout" path="/user" element={<PrivateRoute isAuth={isAuthenticated} component={UserSpace} />}>
                    <Route key="dashboard" path="" element={<Dashboard />} />
                    <Route key="List_items" path="/user/list" element={<ListItems />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}