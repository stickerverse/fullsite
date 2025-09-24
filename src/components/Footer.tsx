
import React from 'react';
import { InstagramIcon, FacebookIcon, YoutubeIcon, LinkedinIcon, XIcon, PinterestIcon, TiktokIcon } from './icons/Icons';

const FooterLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <li>
        <a href={href} className="text-white hover:text-yellow-300 transition-colors leading-loose">
            {children}
        </a>
    </li>
);

const FooterSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 mb-8">
        <h4 className="font-semibold text-white mb-4 uppercase tracking-wider">{title}</h4>
        <ul>
            {children}
        </ul>
    </div>
);

const SocialLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
     <a href={href} target="_blank" rel="noopener noreferrer" className="text-white hover:text-yellow-300 transition-colors">
        {children}
    </a>
)

const Footer: React.FC = () => {
    return (
        <footer className="bg-zinc-900 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="flex flex-wrap">
                    <FooterSection title="Useful links">
                        <FooterLink href="#">Usages</FooterLink>
                        <FooterLink href="#">Add-Ons</FooterLink>
                        <FooterLink href="#">Our Sticker Packs</FooterLink>
                        <FooterLink href="#">Order Samples</FooterLink>
                        <FooterLink href="#">Shop</FooterLink>
                        <FooterLink href="#">Blog</FooterLink>
                    </FooterSection>
                     <FooterSection title="Support">
                        <FooterLink href="#">Contact us</FooterLink>
                        <FooterLink href="#">Quote</FooterLink>
                        <FooterLink href="#">FAQs</FooterLink>
                        <FooterLink href="#">How to's</FooterLink>
                        <FooterLink href="#">Shipping</FooterLink>
                        <FooterLink href="#">Payments</FooterLink>
                    </FooterSection>
                     <FooterSection title="Company">
                        <FooterLink href="#">About us</FooterLink>
                        <FooterLink href="#">Legal</FooterLink>
                        <FooterLink href="#">Reviews</FooterLink>
                        <FooterLink href="#">Press</FooterLink>
                        <FooterLink href="#">Cookies</FooterLink>
                        <FooterLink href="#">Accessibility</FooterLink>
                    </FooterSection>
                    <div className="w-full md:w-2/4 lg:w-2/5">
                        <h4 className="font-semibold text-white mb-4 uppercase tracking-wider">Stay connected</h4>
                        <p className="mb-4">Sign up to our email list for insider deals, tips and inspiration.</p>
                        <div className="flex">
                            <input type="email" placeholder="Email" className="w-full p-2 rounded-l-md border-0 text-zinc-800" />
                            <button className="bg-yellow-400 text-zinc-900 font-bold px-4 py-2 rounded-r-md hover:bg-yellow-500 transition-colors">SUBSCRIBE</button>
                        </div>
                    </div>
                </div>

                <div className="mt-12 pt-8 border-t border-gray-700 flex flex-col md:flex-row items-center justify-between">
                    <div className="flex gap-6 mb-6 md:mb-0">
                        <SocialLink href="https://www.instagram.com/stickerapp/"><InstagramIcon className="w-6 h-6" /></SocialLink>
                        <SocialLink href="https://www.facebook.com/StickerApp/"><FacebookIcon className="w-6 h-6" /></SocialLink>
                        <SocialLink href="https://www.youtube.com/StickerApp"><YoutubeIcon className="w-6 h-6" /></SocialLink>
                        <SocialLink href="https://www.linkedin.com/company/stickerapp/"><LinkedinIcon className="w-6 h-6" /></SocialLink>
                        <SocialLink href="https://x.com/StickerApp"><XIcon className="w-6 h-6" /></SocialLink>
                        <SocialLink href="https://se.pinterest.com/stickerapp/"><PinterestIcon className="w-6 h-6" /></SocialLink>
                        <SocialLink href="https://www.tiktok.com/@stickerapp"><TiktokIcon className="w-6 h-6" /></SocialLink>
                    </div>
                     <p className="text-sm text-gray-400">&copy; StickerApp 2025</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
