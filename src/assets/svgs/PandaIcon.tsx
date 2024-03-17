type PandaIconProps = {
    opacity?: number;
    width?: string;
};

export default function PandaIcon({ opacity, width = '28' }: PandaIconProps): JSX.Element {
    return (
        <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 40 40"
            width={width}
            height={width}
            data-testid="brand-icon-icon"
            aria-hidden="true"
            focusable="false"
            opacity={opacity}
        >
            <path
                d="M35 0H5C2.24 0 0 2.24 0 5v30c0 2.76 2.24 5 5 5h30c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5Z"
                fill="#ff2b85"
            />
            <path
                d="M14.58 17.53c.41-.04.71-.4.68-.81a.756.756 0 0 0-.81-.68c-.39.03-.68.35-.68.74.02.43.38.76.81.75Zm10.44-1.33c.12-.09.25-.14.4-.16.43-.02.79.32.81.75 0 .41-.33.75-.75.75s-.75-.33-.75-.75c0-.23.11-.45.29-.59Z"
                fill="#fff"
            />
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M33.51 14.52v-.03c-.15-.3-.1-.65.12-.9a4.983 4.983 0 0 0 .89-4.78c-.06-.19-.34-.24-.61-.29-.26-.05-.52-.09-.62-.26-.09-.15-.06-.38 0-.63.02-.07.03-.13.04-.2.05-.26.07-.51-.06-.64s-.28-.26-.42-.37l-.09-.07c-1-.74-2.23-1.1-3.47-1.03-1.08.05-2.23.41-3.06 1.14-.4.29-.92.37-1.39.22l-.07-.02c-.84-.3-1.7-.52-2.58-.66a14.28 14.28 0 0 0-6.95.66h-.05c-.45.18-.96.1-1.35-.19-1.55-1.37-4.68-1.71-6.72.01-2.23 1.88-2.36 5.17-.71 7.1.22.25.26.6.12.9-.98 2-1.5 4.2-1.51 6.43 0 7.97 6.72 13.77 15 13.77 8.28 0 15-5.8 15-13.77 0-2.22-.52-4.41-1.49-6.41 0 0 0 .02-.01.02h-.01ZM19.9 20.19c1.19 0 2.15.26 2.15.72 0 .46-.96 1.5-2.15 1.5s-2.15-1.04-2.15-1.5c0-.46.96-.72 2.15-.72ZM7.86 11.8a.578.578 0 0 1-.18-.2c-.02-.03-.04-.07-.06-.1-.36-.66-.45-1.44-.23-2.16.42-1.41 1.92-2.24 3.35-2.05.37.05.74.17 1.07.35.14.08.26.17.37.28.04.04.08.09.1.15.02.09 0 .18-.07.25-.06.06-.14.11-.22.15-1.37.8-2.49 1.95-3.52 3.14-.17.19-.35.37-.61.19Zm3.66 11.33c-1.24-.14-2.32-1.45-2.73-2.77-.18-.58-.61-3.26 1.31-5.2.64-.64 1.54-1.21 2.79-1.59.41-.1.82-.15 1.24-.15.62 0 1.36.1 1.95.53 1.24.91 1.26 2.44.52 3.23s-2.4 2.59-2.83 4.06c-.42 1.47-1.01 2.04-2.26 1.9 0 0 .01-.01.01 0v-.01Zm8.4 4.43h-.04c-2.39-.01-4.32-1.7-4.32-3.4 0-.59.26-.89.89-.73.37.09 1.89.48 3.27.48h.35c1.35 0 2.82-.37 3.24-.48h.03c.64-.16.89.14.89.72 0 1.7-1.93 3.39-4.32 3.4h.01v.01Zm11.09-7.22c-.41 1.32-1.49 2.63-2.73 2.77-1.24.14-1.83-.42-2.26-1.9-.43-1.47-2.09-3.28-2.83-4.07-.74-.78-.72-2.32.52-3.23.58-.43 1.33-.53 1.95-.53.42 0 .83.05 1.24.15 1.25.38 2.15.94 2.79 1.58 1.92 1.94 1.49 4.62 1.31 5.2 0 0 .01.03 0 .03h.01Zm1.37-8.84-.06.1a.86.86 0 0 1-.18.2c-.26.18-.44 0-.61-.19-1.03-1.19-2.15-2.34-3.52-3.14a1.07 1.07 0 0 1-.22-.15.33.33 0 0 1-.08-.25c.02-.06.05-.11.1-.15.11-.11.23-.21.37-.28.33-.18.7-.3 1.07-.35 1.43-.19 2.93.64 3.35 2.05.21.72.13 1.5-.23 2.16h.01Z"
                fill="#fff"
            />
        </svg>
    );
}
