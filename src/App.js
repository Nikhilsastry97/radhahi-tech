import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from './HomePage/HomePage';
import AboutUs from './AboutUs/AboutUs';
import LocationOverview from "./Location&Overview/Location&Overview";
import ModuleIndoor from "./ModuleIndoor/ModuleIndoor";
import ModuleOutdoor from "./ModuleOutdoor/ModuleOutdoor";
import SignFix from "./SignFix/SignFix";
import ModularPylon from "./ModularPylon/ModularPylon";
import SignFlexLite from "./SignFlexLite/SignFlexLite";
import Strato from './Strato/Strato';
import Totem from './Totem/Totem';
import ExitSigns from "./ExitSigns/ExitSigns";
import LightBox from './LightBox/lightbox';
import OptiFrame from './OptiFrame/OptiFrame';
import ArtFrame from './ArtFrame/ArtFrame';
import FabricFrame from './FabricFrame/FabricFrame';
import LedThinLite from './LedThinLite/LedThinlite';
import Banking from './Banking/Banking';
import Retail from "./Retail/Retail";
import Hospital from "./Hospital/Hospital";
import Education from "./Education/Education";
import CorporateOffices from './CorporateOffices/CorporateOffices';
import IndustrySignages from './IndustrySignages/IndustrySignages';
import PublicInfrastructure from './PublicInfrastructure/PublicInfrastructure';
import ResidentialRealEstate from "./ResidentialRealEstate/ResidentialRealEstate";
import LEDSignages from "./LEDSignages/LEDSignages";
import ContactUs from './ContactUs/ContactUs';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/location-overview" element={<LocationOverview />} />
        <Route path="/module-plus-indoor" element={<ModuleIndoor />} />
        <Route path="/module-plus-outdoor" element={<ModuleOutdoor />} />
        <Route path="/i-sign-fix" element={<SignFix />} />
        <Route path="/modular-pylon" element={<ModularPylon />} />
        <Route path="/i-sign-flex-lite" element={<SignFlexLite />} />
        <Route path="/strato" element={<Strato />} />
        <Route path="/totem" element={<Totem />} />
        <Route path="/illuminated-exit-signs" element={<ExitSigns />} />
        <Route path="/light-box" element={<LightBox />} />
        <Route path="/opti-frame" element={<OptiFrame />} />
        <Route path="/art-frame" element={<ArtFrame />} />
        <Route path="/fabric-frame" element={<FabricFrame />} />
        <Route path="/led-thinlite" element={<LedThinLite />} />
        <Route path="/banking" element={<Banking />} />
        <Route path="/retail" element={<Retail />} />
        <Route path="/hospital" element={<Hospital />} />
        <Route path="/education" element={<Education />} />
        <Route path="/corporate-offices" element={<CorporateOffices />} />
        <Route path="/industry-signages" element={<IndustrySignages />} />
        <Route path="/public-infrastructure" element={<PublicInfrastructure />} />
        <Route path="/residential-real-estate" element={<ResidentialRealEstate />} />
        <Route path="/led-signages" element={<LEDSignages />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;