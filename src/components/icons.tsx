import React from 'react';

const defaultIconClass = "h-6 w-6";

export const MenuIcon: React.FC<{ className?: string }> = ({ className = defaultIconClass }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" className={className}>
        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
    </svg>
);

export const SearchIcon: React.FC<{ className?: string }> = ({ className = defaultIconClass }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" className={className}>
        <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
    </svg>
);

export const UserIcon: React.FC<{ className?: string }> = ({ className = defaultIconClass }) => (
    <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M13.986 0.666504C6.62602 0.666504 0.666016 6.63984 0.666016 13.9998C0.666016 21.3598 6.62602 27.3332 13.986 27.3332C21.3593 27.3332 27.3327 21.3598 27.3327 13.9998C27.3327 6.63984 21.3593 0.666504 13.986 0.666504ZM13.9993 24.6665C8.10602 24.6665 3.33268 19.8932 3.33268 13.9998C3.33268 8.1065 8.10602 3.33317 13.9993 3.33317C19.8927 3.33317 24.666 8.1065 24.666 13.9998C24.666 19.8932 19.8927 24.6665 13.9993 24.6665Z" fill="currentColor"></path>
        <path d="M13.9993 5.99984C15.8438 5.99984 17.3327 7.53486 17.3327 9.43646C17.3327 11.3381 15.8438 12.8731 13.9993 12.8731C12.1549 12.8731 10.666 11.3381 10.666 9.43646C10.666 7.53486 12.1549 5.99984 13.9993 5.99984ZM13.9993 22.2665C11.2216 22.2665 8.76602 20.8002 7.33268 18.5779C7.36602 16.2982 11.7771 15.0496 13.9993 15.0496C16.2105 15.0496 20.6327 16.2982 20.666 18.5779C19.2327 20.8002 16.7771 22.2665 13.9993 22.2665Z" fill="currentColor"></path>
    </svg>
);

export const CartIcon: React.FC<{ className?: string }> = ({ className = defaultIconClass }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" className={className}>
        <path d="M280-80q-33 0-56.5-23.5T200-160v-480q0-33 23.5-56.5T280-720h120q0-83 58.5-141.5T600-920q83 0 141.5 58.5T800-720h120q33 0 56.5 23.5T1000-640v480q0 33-23.5 56.5T920-80H280Zm0-80h640v-480H280v480Zm120-560h400q0-66-47-113t-113-47q-66 0-113 47t-47 113Zm-120 80v-80 80Z" />
    </svg>
);

export const ChevronLeftIcon: React.FC<{ className?: string }> = ({ className = defaultIconClass }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" className={className}>
        <path d="M560-240 320-480l240-240 56 56-184 184 184 184-56 56Z" />
    </svg>
);

export const ChevronRightIcon: React.FC<{ className?: string }> = ({ className = defaultIconClass }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" className={className}>
        <path d="M400-240 344-296l184-184-184-184 56-56 240 240-240 240Z" />
    </svg>
);

export const ChevronDownIcon: React.FC<{ className?: string }> = ({ className = "h-5 w-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" className={className}>
        <path d="M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z" />
    </svg>
);

export const StarIcon: React.FC<{ className?: string }> = ({ className = "h-4 w-4" }) => (
    <svg viewBox="0 0 96 96" version="1.1" xmlns="http://www.w3.org/2000/svg" className={className}>
        <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g>
                <rect fill="#00B67A" fillRule="nonzero" x="0" y="0" width="96" height="96"></rect>
                <path d="M48,64.7 L62.6,61 L68.7,79.8 L48,64.7 Z M81.6,40.4 L55.9,40.4 L48,16.2 L40.1,40.4 L14.4,40.4 L35.2,55.4 L27.3,79.6 L48.1,64.6 L60.9,55.4 L81.6,40.4 Z" fill="#FFFFFF" fillRule="nonzero"></path>
            </g>
        </g>
    </svg>
);

export const XIcon: React.FC<{ className?: string }> = ({ className = defaultIconClass }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export const ResetIcon: React.FC<{ className?: string }> = ({ className = "h-5 w-5" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0011.664 0M2.985 19.644A8.25 8.25 0 0116.023 9.348" />
    </svg>
);

export const ThumbsUpIcon: React.FC<{ className?: string }> = ({ className = "h-4 w-4" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.633 10.25c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 0 1 2.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 0 0 .322-1.672V2.75a.75.75 0 0 1 .75-.75 2.25 2.25 0 0 1 2.25 2.25c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282m0 0h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 0 1-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 0 0-1.423-.23H5.904m10.598-9.75H14.25M5.904 18.5c.083.205.173.405.27.602.398.815 1.027 1.398 1.873 1.398h1.283c.746 0 1.391-.463 1.613-1.161a3.504 3.504 0 0 0 .139-1.36c0-.259-.014-.522-.042-.783.019-.053.026-.109.026-.165v-1.25c0-.41-.336-.75-.75-.75h-2.25c-.73 0-1.35.527-1.462 1.237-.084.533-.191 1.061-.33 1.581v.161z" />
    </svg>
);

export const ClockIcon: React.FC<{ className?: string }> = ({ className = "h-4 w-4" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
    </svg>
);

export const PaletteIcon: React.FC<{ className?: string }> = ({ className = "h-4 w-4" }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.098 19.902a3.75 3.75 0 0 0 5.304 0l6.401-6.402M6.75 21A3.75 3.75 0 0 1 3 17.25V4.125C3 3.504 3.504 3 4.125 3h5.25c.621 0 1.125.504 1.125 1.125v4.072M6.75 21a3.75 3.75 0 0 0 3.75-3.75V8.197M6.75 21h13.125c.621 0 1.125-.504 1.125-1.125v-5.25c0-.621-.504-1.125-1.125-1.125h-4.072M10.5 8.197l2.88-2.88c.438-.439 1.15-.439 1.59 0l3.712 3.713c.44.44.44 1.152 0 1.592l-2.879 2.88M6.75 17.25h.008v.008H6.75v-.008Z" />
    </svg>
);

export const CloseIcon: React.FC<{ className?: string }> = ({ className = defaultIconClass }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
);

export const FilterIcon: React.FC<{ className?: string }> = ({ className = defaultIconClass }) => (
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={className}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096v1.044a2.25 2.25 0 0 1-.659 1.591l-5.432 5.432a2.25 2.25 0 0 0-.659 1.591v2.927a2.25 2.25 0 0 1-1.244 2.013L9.75 21v-6.568a2.25 2.25 0 0 0-.659-1.591L3.659 7.409A2.25 2.25 0 0 1 3 5.818V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0 1 12 3Z" />
    </svg>
);