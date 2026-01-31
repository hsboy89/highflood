import MainLayout from './components/layouts/MainLayout';
import {
  Hero,
  ServiceOverview,
  PortfolioGrid,
  TechStack,
  ContactForm
} from './components/sections';

function App() {
  return (
    <MainLayout>
      <Hero />
      <ServiceOverview />
      <PortfolioGrid />
      <TechStack />
      <ContactForm />
    </MainLayout>
  );
}

export default App;

