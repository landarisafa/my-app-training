import AboutSection from '../../pages/AboutSection';
import AppNavBar from '../../components/AppNavBar';
import AppFooter from '../../components/AppFooter';
import HeaderSection from '../HeaderSection';
import ServicesSection from '../ServicesSection';
import ContactSection from '../ContactSection';
import '../../styles/Home.css';

function Home() {
  return (
    <div>
      <AppNavBar appName={"Trainig App"}/>
      <HeaderSection/>
      <AboutSection/>
      <ServicesSection/>
      <ContactSection/>
      <AppFooter/>
    </div>
  );
}

export default Home;
