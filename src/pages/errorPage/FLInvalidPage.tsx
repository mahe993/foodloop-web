import { useEffect, useState } from 'react';
import FLBox from '../../components/box/FLBox';
import { useNavigate } from 'react-router-dom';

export default function FLInvalidPage(): JSX.Element {
    const [seconds, setSeconds] = useState(5);

    const navigate = useNavigate();

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
        <FLBox flexDirection="column" padding="4%">
            <h1>Invalid action/foodlist detected.</h1>
            <br />
            <p>You might be attempting a blocked action.</p>
            {seconds <= 3 && <p>You will be redirected to home page in {seconds} seconds.</p>}
        </FLBox>
    );
}
