
import React from 'react';

type IconProps = {
  className?: string;
};

export const MenuIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" className={className}>
        <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/>
    </svg>
);

export const SearchIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" className={className}>
        <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z"/>
    </svg>
);

export const UserIcon: React.FC<IconProps> = ({ className }) => (
    <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
        <path d="M13.986 0.666504C6.62602 0.666504 0.666016 6.63984 0.666016 13.9998C0.666016 21.3598 6.62602 27.3332 13.986 27.3332C21.3593 27.3332 27.3327 21.3598 27.3327 13.9998C27.3327 6.63984 21.3593 0.666504 13.986 0.666504ZM13.9993 24.6665C8.10602 24.6665 3.33268 19.8932 3.33268 13.9998C3.33268 8.1065 8.10602 3.33317 13.9993 3.33317C19.8927 3.33317 24.666 8.1065 24.666 13.9998C24.666 19.8932 19.8927 24.6665 13.9993 24.6665Z" fill="currentColor"></path>
        <path d="M13.9993 5.99984C15.8438 5.99984 17.3327 7.53486 17.3327 9.43646C17.3327 11.3381 15.8438 12.8731 13.9993 12.8731C12.1549 12.8731 10.666 11.3381 10.666 9.43646C10.666 7.53486 12.1549 5.99984 13.9993 5.99984ZM13.9993 22.2665C11.2216 22.2665 8.76602 20.8002 7.33268 18.5779C7.36602 16.2982 11.7771 15.0496 13.9993 15.0496C16.2105 15.0496 20.6327 16.2982 20.666 18.5779C19.2327 20.8002 16.7771 22.2665 13.9993 22.2665Z" fill="currentColor"></path>
    </svg>
);

export const CartIcon: React.FC<IconProps> = ({ className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 -960 960 960" fill="currentColor" className={className}>
        <path d="M280-80q-33 0-56.5-23.5T200-160v-480q0-33 23.5-56.5T280-720h120q0-66 47-113t113-47q66 0 113 47t47 113h120q33 0 56.5 23.5T840-640v480q0 33-23.5 56.5T760-80H280Zm0-80h480v-480h-80v80q0 17-11.5 28.5T640-520q-17 0-28.5-11.5T592-560v-80H368v80q0 17-11.5 28.5T328-520q-17 0-28.5-11.5T280-560v-80h-80v480Zm120-560h160q0-33-23.5-56.5T480-800q-33 0-56.5 23.5T400-720Z"/>
    </svg>
);

export const TrashIcon: React.FC<IconProps> = ({ className }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
    <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
  </svg>
);

export const CreditCardIcon: React.FC<IconProps> = ({ className }) => <img src="https://checkoutshopper-live.adyen.com/checkoutshopper/images/logos/card.svg" alt="Credit Card" className={className} />;
export const PayPalIcon: React.FC<IconProps> = ({ className }) => <img src="https://checkoutshopper-live.adyen.com/checkoutshopper/images/logos/paypal.svg" alt="PayPal" className={className} />;
export const InstagramIcon: React.FC<IconProps> = ({ className }) => <img src="https://stickerapp.com/media/32x30/0d3bac0c35/white-ic-som-instagram.svg" alt="Instagram" className={className} />;
export const FacebookIcon: React.FC<IconProps> = ({ className }) => <img src="https://stickerapp.com/media/30x28/885aa3c949/white-ic-som-facebook.svg" alt="Facebook" className={className} />;
export const YoutubeIcon: React.FC<IconProps> = ({ className }) => <img src="https://stickerapp.com/media/34x24/89ef8a3eb0/white-ic-som-youtube.svg" alt="YouTube" className={className} />;
export const LinkedinIcon: React.FC<IconProps> = ({ className }) => <img src="https://stickerapp.com/media/28x28/3649f38bad/white-ic-som-linkedin.svg" alt="LinkedIn" className={className} />;
export const XIcon: React.FC<IconProps> = ({ className }) => <img src="https://stickerapp.com/media/28x28/397b48854a/white-ic-som-x.svg" alt="X" className={className} />;
export const PinterestIcon: React.FC<IconProps> = ({ className }) => <img src="https://stickerapp.com/media/28x28/851da58739/white-ic-som-pinterest.svg" alt="Pinterest" className={className} />;
export const TiktokIcon: React.FC<IconProps> = ({ className }) => <img src="https://stickerapp.com/media/25x28/0f10792d9a/white-ic-som-tiktok.svg" alt="TikTok" className={className} />;
