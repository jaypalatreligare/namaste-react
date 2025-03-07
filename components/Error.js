import { useRouteError } from "react-router-dom";
const ErrorPage = () => {
    const err = useRouteError();
    console.log("Error---",err);
    return (<div>
        <h1>Error Page</h1>
        <p>Oops {err.statusText}</p>
        <p>{err.status}</p>
    </div>);
}
export default ErrorPage;