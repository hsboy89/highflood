export interface PortfolioItem {
    id: number;
    title: string;
    category: 'Web' | 'System' | 'Dashboard';
    tech: string[];
    description: string;
    image: string;
    link?: string;
}

export interface ContactFormData {
    name: string;
    company: string;
    phone: string;
    email: string;
    projectType: string;
    budget: string;
    description: string;
    privacyConsent: boolean;
}
