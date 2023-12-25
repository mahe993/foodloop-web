import { ReactNode } from 'react';
import FLPage from '../base/FLPage';

type TestPageProps = {
    children: ReactNode;
};

function TestPage({ children }: TestPageProps): JSX.Element {
    return <FLPage sx={{ bgcolor: 'orange' }}>{children}</FLPage>;
}

export default TestPage;
