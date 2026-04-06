import { Link } from "react-router-dom";
import Button from "../components/Button";
import FormInput from "../components/FormInput";
import Container from "../components/layouts/Container";
import EnvelopeFooter from "../icons/EnvelopeFooter";
import LocationFooter from "../icons/LocationFooter";
import PhoneFooter from "../icons/PhoneFooter";

const Contact = () => {
  return (
    <Container>
      <div className="mt-6 lg:mt-8">

        <iframe
          className="rounded-15p w-full h-48 sm:h-72 lg:h-[600px]"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3017.040526049933!2d-73.46055742345877!3d40.8709848278666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e8280419cd4c1d%3A0x5998e7a90d1a03f0!2s123%20NY-25A%2C%20Cold%20Spring%20Harbor%2C%20NY%2011724%2C%20USA!5e0!3m2!1sen!2sbd!4v1751920039848!5m2!1sen!2sbd"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />

        <div className="flex gap-2 items-center text-black font-montserrat text-sm lg:text-base leading-5 lg:leading-6 mt-6 lg:mt-12">
          <span>Home</span> <span>|</span>
          <span className="font-bold">Contact</span>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 mt-8 lg:mt-12 mb-12 lg:mb-20">

          {/* Form */}
          <div className="w-full lg:flex-1">
            <h2 className="font-poppins text-2xl lg:text-4xl font-semibold leading-8 lg:leading-[46px] text-black mb-2">
              Contact Us
            </h2>
            <p className="font-montserrat text-black text-base lg:text-xl leading-6 lg:leading-[30px] mb-6 lg:mb-10">
              Have any questions for us? Don't hesitate to contact us.
            </p>

            <div className="flex flex-col gap-4 lg:gap-6">
              <FormInput label="Name" star={true} placeholder="Amelia Robert Watson" />

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="w-full sm:w-1/2">
                  <FormInput label="Phone Number" star={true} placeholder="+123 456 7890" inpType="tel" />
                </div>
                <div className="w-full sm:w-1/2">
                  <FormInput label="Email Address" star={true} placeholder="amelia.watson@eshop.com" inpType="email" />
                </div>
              </div>

              <FormInput
                textAria={true}
                label="Message"
                star={true}
                placeholder="Enter your message ..."
                height="180px"
              />

              <div>
                <Button text="Submit" className="w-full sm:w-auto" />
              </div>
            </div>
          </div>

          {/* Info Card */}
          <div className="w-full lg:w-[420px] xl:w-[500px] shrink-0">
            <div className="bg-lightGray rounded-[25px] p-6 lg:p-10 h-full">
              <h3 className="font-poppins text-xl lg:text-2xl leading-7 lg:leading-[30px] font-semibold text-black mb-3 lg:mb-4">
                Let's Keep in Touch!
              </h3>
              <p className="font-montserrat text-black text-base lg:text-xl leading-6 lg:leading-[30px] mb-6 lg:mb-10">
                We would love to hear from you. Contact us for any inquiries you might have for us.
              </p>

              <ul className="text-sm lg:text-base leading-5 lg:leading-6 font-bold flex flex-col gap-4 font-montserrat">
                <li className="relative pl-8">
                  <Link className="hover:text-orange" to="tel:+15551234567">
                    <span className="absolute top-1/2 -translate-y-1/2 left-0 text-[#646464]">
                      <PhoneFooter />
                    </span>
                    +1 (555) 123-4567
                  </Link>
                </li>
                <li className="relative pl-8">
                  <Link className="hover:text-orange" to="mailto:information@eshop.com">
                    <span className="absolute top-1/2 -translate-y-1/2 left-0 text-[#646464]">
                      <EnvelopeFooter />
                    </span>
                    information@eshop.com
                  </Link>
                </li>
                <li className="relative pl-8">
                  <Link className="hover:text-orange" to="https://maps.app.goo.gl/GLKtcy2x3Lo6XxJq5" target="_blank">
                    <span className="absolute top-1/2 -translate-y-1/2 left-0 text-xl text-[#646464]">
                      <LocationFooter />
                    </span>
                    123 Main Street, Suite 105, Anytown USA
                  </Link>
                </li>
              </ul>

              <div className="mt-8 lg:mt-12">
                <h5 className="font-bold text-lg lg:text-xl leading-7 lg:leading-[30px] font-montserrat text-black inline-block">
                  Opening Hours
                  <span className="h-1 w-full block mt-1 bg-orange"></span>
                </h5>
                <ul className="font-montserrat text-sm lg:text-base leading-5 lg:leading-6 text-black flex flex-col gap-2 mt-4 lg:mt-6">
                  <li><b>MON to FRI:</b> <time>08:00 AM - 04:00 PM</time></li>
                  <li><b>SAT to SUN:</b> <time>10:00 AM - 02:00 PM</time></li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </Container>
  );
};

export default Contact;
