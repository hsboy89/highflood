// Navigation & Footer Links
export const NAV_LINKS = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Tech Stack', href: '#tech' },
    { name: 'Contact', href: '#contact' },
] as const;

export const FOOTER_LINKS = [
    { name: 'Home', href: '#home' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Contact', href: '#contact' },
] as const;

// Contact Information
export const CONTACT_INFO = {
    email: 'highflood.video@gmail.com',
    phone: '010-6567-6625',
    address: '경상북도 포항시',
} as const;

// Company Information
export const COMPANY_INFO = {
    name: 'HighFlood',
    description: '데이터와 기술의 파도를 제어하여 비즈니스 가치를 극대화하는 HighFlood. 웹 어플리케이션, 산업용 시스템, AI 솔루션까지 토탈 서비스를 제공합니다.',
} as const;
