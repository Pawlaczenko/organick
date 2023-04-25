import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error : any = useRouteError();

    return (
        <div>
            there's been an eror
            {error.statusText || error.message};
        </div>
    )
}

export default ErrorPage;