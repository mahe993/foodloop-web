import { useEffect, useState } from 'react';
import { isRouteErrorResponse, useNavigate, useRouteError } from 'react-router-dom';
import FLBox from '../../components/box/FLBox';

export default function FLErrorPage(): JSX.Element {
    const [seconds, setSeconds] = useState(5);

    const navigate = useNavigate();
    const error = useRouteError();

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds => seconds - 1);
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (seconds === 0) {
            navigate('/');
        }
    }, [seconds]);

    return (
        <FLBox flexDirection="column">
            {isRouteErrorResponse(error) ? (
                <>
                    <h1>Oops! {error.status}</h1>
                    <p>{error.statusText}</p>
                </>
            ) : (
                <>
                    <h1>Oops! Unexpected Error</h1>
                    <p>Something went wrong.</p>
                </>
            )}

            {isRouteErrorResponse(error) ? (
                <p>
                    <i>{error.data}</i>
                </p>
            ) : (error as unknown) instanceof Error ? (
                <p>
                    <i>{(error as Error).message}</i>
                </p>
            ) : null}

            {seconds <= 3 && <p>You will be redirected to home page in {seconds} seconds.</p>}
        </FLBox>
    );
}
