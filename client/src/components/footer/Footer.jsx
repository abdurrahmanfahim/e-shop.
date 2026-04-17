import Container from '../layouts/Container';
import FooterTop from './FooterTop';
import FooterBottom from './FooterBottom';

const Footer = () => {
  return (
    <div className="mt-12 lg:mt-20 pb-6">
      <Container>
        <FooterTop />
        <FooterBottom />
      </Container>
    </div>
  );
};

export default Footer;
