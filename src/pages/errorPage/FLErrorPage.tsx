import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import FLBox from '../../components/box/FLBox';

export default function FLErrorPage(): JSX.Element {
    const error = useRouteError();

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
        </FLBox>
    );
}
