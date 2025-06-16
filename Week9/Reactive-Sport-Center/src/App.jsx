import './App.css'
import HeaderSection from './components/Header/HeaderSection';
import HeroSection from './components/Hero/HeroSection'
import StatsSection from './components/Stats/StatsSection';
import ClassesSection from "./components/Classes/ClassesSection";
import BMISection from './components/BMI/BMISection';
import TrainersSection from './components/Trainers/TrainersSection';
import PurchaseSection from './components/Purchase/PurchaseSection';
import ReviewSection from './components/Review/ReviewSection';
import ContactSection from './components/Contact/ContactSection';
import FooterSection from './components/Footer/FooterSection';

function App() {

  return (
    <>
      <HeaderSection/>
      <HeroSection/>
      <StatsSection/>
      <ClassesSection/>
      <BMISection/>
      <TrainersSection/>
      <PurchaseSection/>
      <ReviewSection/>
      <ContactSection/>
      <FooterSection/>
    </>
  );
}

export default App;
