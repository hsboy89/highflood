import Navbar from '../Navbar';
import Footer from '../Footer';

interface MainLayoutProps {
    children: React.ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
    return (
        <div className="min-h-screen bg-deep-blue">
            <Navbar />
            <main>{children}</main>
            <Footer />
        </div>
    );
}
