use client
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleApple from '@/components/navigation/NavbarStyleApple/NavbarStyleApple';
import SplitHero from '@/components/sections/layouts/hero/SplitHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import ExpandingGridTokenomics from '@/components/sections/layouts/tokenomics/ExpandingGridTokenomics';
import CentralFAQ from '@/components/sections/layouts/faq/CentralFAQ';
import FooterBase from '@/components/footer/FooterBase';

export default function Home() {
  return (
    <SiteThemeProvider theme={{
      styleVariant: 'futuristicAndOutOfBox',
      colorTemplate: 2,
      textAnimation: 'highlight',
    }}>
      <NavbarStyleApple
        navItems={[
          { name: 'Hero', id: 'hero' },
          { name: 'About', id: 'about' },
          { name: 'How to Buy', id: 'how-to-buy' },
          { name: 'Tokenomics', id: 'tokenomics' },
          { name: 'FAQ', id: 'faq' },
          { name: 'Footer', id: 'footer' },
        ]}
        logoSrc="/images/logo.svg"
        logoAlt="NebulaFlow"
        brandName="NebulaFlow"
      />
      <div id="hero" data-section="hero" className="scroll-mt-24">
        <SplitHero
          title="Welcome to NebulaFlow"
          subtitle="Your futuristic SaaS solution"
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
        />
      </div>
      <div id="about" data-section="about" className="scroll-mt-24">
        <SocialsAbout
          title="About NebulaFlow"
          descriptions={[
            "NebulaFlow brings you the latest in SaaS technologies.",
            "Join us as we revolutionize the industry with innovation.",
            "Explore diverse features tailored for your needs.",
          ]}
        />
      </div>
      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D
          variant="simple"
        />
      </div>
      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <ExpandingGridTokenomics
          title="Tokenomics Overview"
          description="Discover the economic structure behind NebulaFlow."
          cardItems={[
            { id: 1, title: 'Supply', description: '10 million tokens' },
            { id: 2, title: 'Liquidity', description: '30% allocated for liquidity' },
            { id: 3, title: 'Team', description: '20% reserved for the core team' },
          ]}
        />
      </div>
      <div id="faq" data-section="faq" className="scroll-mt-24">
        <CentralFAQ
          items={[
            { title: 'What is NebulaFlow?', content: 'NebulaFlow is a SaaS platform.' },
            { title: 'How can I get started?', content: 'Sign up for a demo on our homepage.' },
            { title: 'What are the pricing models?', content: 'We offer tiered pricing.' },
          ]}
        />
      </div>
      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterBase
          logoSrc="/images/logo.svg"
          logoWidth={120}
          logoHeight={40}
          columns={[
            { title: 'Company', items: [
              { label: 'About', onClick: () => {} },
              { label: 'Careers', onClick: () => {} },
            ] },
            { title: 'Support', items: [
              { label: 'FAQ', onClick: () => {} },
              { label: 'Contact', onClick: () => {} },
            ] },
            { title: 'Legal', items: [
              { label: 'Privacy Policy', onClick: () => {} },
            ] },
          ]}
          copyrightText="© 2023 NebulaFlow. All rights reserved."
          onPrivacyClick={() => {}}
        />
      </div>
    </SiteThemeProvider>
  );
}