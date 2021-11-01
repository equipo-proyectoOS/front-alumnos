import { Redirect, Route } from "react-router";

const usuarioT = localStorage.getItem('loggedUser');
//const user = {id: 1, username: "lenny123"}

export default function PrivateRoute2({component: Component, ...rest}) {
    return (
        <Route {...rest}>
        {usuarioT ?(<Component/>)  : (<Redirect to="/login"/>) }
        </Route>
    )
}