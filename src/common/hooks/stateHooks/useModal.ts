import { useState } from 'react';

type useModal = {
    openModal: boolean;
    setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function useModal(): useModal {
    const [open, setOpen] = useState(false);
    return { openModal: open, setModalOpen: setOpen };
}
