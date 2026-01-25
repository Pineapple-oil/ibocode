import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Layout } from './components/Layout';
import { QuoteModalProvider } from './components/QuoteModal';
import Home from './pages/Home';

// About Pages
import AboutIndex from './pages/About/AboutIndex';
import CompanyProfile from './pages/About/CompanyProfile';
import WhyUs from './pages/About/WhyUs';
import Team from './pages/About/Team';

// Manufacturing Pages
import ManufacturingIndex from './pages/Manufacturing/ManufacturingIndex';
import FactoryOverview from './pages/Manufacturing/FactoryOverview';
import CapacityLeadTime from './pages/Manufacturing/CapacityLeadTime';
import ProductionLines from './pages/Manufacturing/ProductionLines';
import EngineeringLab from './pages/Manufacturing/EngineeringLab';

// OEM/ODM Pages
import OemOdmIndex from './pages/Solutions/OemOdmIndex';
import CustomizationOptions from './pages/Solutions/CustomizationOptions';
import OemOdmProcess from './pages/Solutions/OemOdmProcess';

// Quality Pages
import QualityIndex from './pages/Quality/QualityIndex';
import QualityControl from './pages/Quality/QualityControl';
import Reliability from './pages/Quality/Reliability';
import Certifications from './pages/Quality/Certifications';

// Other
import Faq from './pages/Faq';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogSingle from './pages/BlogSingle';
import ProductsIndex from './pages/Products/ProductsIndex';
import ProductDetail from './pages/Products/ProductDetail';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <QuoteModalProvider>
              <Layout />
            </QuoteModalProvider>
          }
        >
          <Route index element={<Home />} />

          {/* About Section */}
          <Route path="about" element={<AboutIndex />} />
          <Route path="about/profile" element={<CompanyProfile />} />
          <Route path="about/why-us" element={<WhyUs />} />
          <Route path="about/team" element={<Team />} />

          {/* Manufacturing Section */}
          <Route path="manufacturing" element={<ManufacturingIndex />} />
          <Route path="manufacturing/factory" element={<FactoryOverview />} />
          <Route path="manufacturing/capacity" element={<CapacityLeadTime />} />
          <Route path="manufacturing/lines" element={<ProductionLines />} />
          <Route path="manufacturing/engineering" element={<EngineeringLab />} />

          {/* OEM/ODM Section */}
          <Route path="oem-odm" element={<OemOdmIndex />} />
          <Route path="oem-odm/customization" element={<CustomizationOptions />} />
          <Route path="oem-odm/process" element={<OemOdmProcess />} />

          {/* Quality Section */}
          <Route path="quality" element={<QualityIndex />} />
          <Route path="quality/process" element={<QualityControl />} />
          <Route path="quality/reliability" element={<Reliability />} />
          <Route path="quality/certifications" element={<Certifications />} />

          <Route path="faq" element={<Faq />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/single" element={<BlogSingle />} />
          <Route path="products" element={<ProductsIndex />} />
          <Route path="products/phone-mounts/magnetic-wireless-charger-pro" element={<ProductDetail />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
