import { useState } from 'react';

type useModalPages = {
    page: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
    modalLoading: boolean;
    setModalLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function useModalPages(): useModalPages {
    const [page, setPage] = useState<number>(1);
    const [load, setLoad] = useState<boolean>(false);

    return { page, setPage, modalLoading: load, setModalLoading: setLoad };
}
