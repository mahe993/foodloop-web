import { ReactNode, useEffect } from 'react';
import FLBox from '../box/FLBox';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { useTheme } from '@mui/material';
import FLPage from '../../pages/base/FLPage';
import FLInput from '../input/FLInput';
import useFLInput from '../input/useFLInput';
import useDebouncer from '../../common/hooks/useDebouncer';

type SearchContentProps = {
    closeSearch: VoidFunction;
    children?: ReactNode;
};
export default function SearchContent({ closeSearch, children }: SearchContentProps): JSX.Element {
    const { value: searchValue, handleChange } = useFLInput();
    const debouncedSearchValue = useDebouncer(searchValue, 1000);
    const theme = useTheme();

    useEffect(() => {
        // TODO: network call for debounced value
        console.log(debouncedSearchValue);
    }, [debouncedSearchValue]);

    return (
        <FLPage
            sx={{
                justifyContent: 'flex-start',
                marginInlineEnd: 'auto',
            }}
        >
            <FLBox
                sx={{
                    gap: '2%',
                    justifyContent: 'flex-start',
                    width: '100%',
                    padding: '4%',
                    height: '10svh',
                    border: 1,
                }}
            >
                <FLBox onClick={closeSearch} sx={{ flex: 0.1, justifyContent: 'flex-start' }}>
                    <ArrowBackRoundedIcon sx={{ color: theme.palette.foodloop.main }} />
                </FLBox>
                <FLBox sx={{ flex: 0.9, width: '100%', height: '100%' }}>
                    <FLInput
                        autoFocus
                        handleChange={handleChange}
                        inputValue={searchValue}
                        placeholder="Search for shops & restaurants"
                        type="text"
                    />
                </FLBox>
            </FLBox>
            {children}
        </FLPage>
    );
}
