import React from "react";
import Container from "../components/layouts/Container";
import Button from "../components/Button";
import FormInput from "../components/FormInput";
import PhoneFooter from "../icons/PhoneFooter";
import EnvelopeFooter from "../icons/EnvelopeFooter";
import LocationFooter from "../icons/LocationFooter";
import { Link } from "react-router-dom";

const Contact = () => {
  return (
    <Container>
      <div className="mt-8 ">
        <div className="map">
          <iframe className="rounded-[15px] " src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3017.040526049933!2d-73.46055742345877!3d40.8709848278666!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e8280419cd4c1d%3A0x5998e7a90d1a03f0!2s123%20NY-25A%2C%20Cold%20Spring%20Harbor%2C%20NY%2011724%2C%20USA!5e0!3m2!1sen!2sbd!4v1751920039848!5m2!1sen!2sbd" width="100%" height="600" style={{border:0}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="flex gap-4 items-center text-black font-montserrat text-base leading-6 mt-16 ">
          <span>Home</span> <span>|</span>
          <span className="font-bold ">Contact</span>
        </div>

        <div className="mt-12">
          <div className="flex mb-20 mt-12 justify-between ">
            <div className="">
              <h2 className=" font-poppins text-4xl font-semibold leading-[46px] text-black mb-2 ">
                Contact Us
              </h2>
              <p className="font-montserrat text-black text-xl leading-[30px] ">
                Have any questions for us? Don’t hesitate to contact us.
              </p>

              <div className="mt-12 flex flex-wrap gap-x-4 gap-y-8 w-[870px]  ">
                <div className="w-full ">
                  <FormInput
                    label={"Name"}
                    star={true}
                    placeholder={"Amelia Robert Watson"}
                  />
                </div>

                <div className="w-[424px] ">
                  <FormInput
                    label={"Phone Number"}
                    star={true}
                    placeholder={"+123 456 7890"}
                  />
                </div>

                <div className="w-[424px] ">
                  <FormInput
                    label={"Email Address"}
                    star={true}
                    placeholder={"amelia.watson@eshop.com"}
                  />
                </div>

                <div className="w-full ">
                  <FormInput
                    textAria={true}
                    label={"Message"}
                    star={true}
                    placeholder={"Enter your message ..."}
                    height={"242px"}
                  />
                </div>
                <Button text={"Submit"} />
              </div>
            </div>
            <div className="w-[594px] ">
              <div className="bg-[#F4F4F4] rounded-[25px] p-10   ">
                <h3 className="font-poppins text-2xl leading-[30px] font-semibold text-black mb-4 ">
                  Let’s Keep in Touch!
                </h3>
                <p className="font-montserrat text-black text-xl leading-[30px] mb-10 ">
                  We would love to hear from you. Contact us for any inquiries
                  you might have for us.
                </p>

                <ul className="text-base leading-6 font-bold flex flex-col gap-3 font-montserrat ">
                  <li className="relative pl-8 ">
                    <Link className="hover:text-[#FF624C]" to={"tel:161352163"}>
                      <span className="absolute top-1/2 -translate-1/2 left-2 text-[#646464] ">
                        <PhoneFooter />
                      </span>{" "}
                      +1 (555) 123-4567
                    </Link>
                  </li>
                  <li className="relative pl-8 ">
                    <Link
                      className="hover:text-[#FF624C]"
                      to={"mailto:fahimahmad123go@gmail.com"}
                    >
                      <span className="absolute top-1/2 -translate-1/2 left-2 text-[#646464] ">
                        <EnvelopeFooter />
                      </span>
                      information@eshop.com
                    </Link>
                  </li>
                  <li className="relative pl-8 ">
                    <Link
                      className="hover:text-[#FF624C]"
                      to={"https://maps.app.goo.gl/GLKtcy2x3Lo6XxJq5"}
                    >
                      <span className="absolute top-1/2 -translate-1/2 left-2 text-xl text-[#646464] ">
                        <LocationFooter />
                      </span>
                      123 Main Street, Suite 105, Anytown USA
                    </Link>
                  </li>
                </ul>

                <div className="mt-14 ">
                  <h5 className="font-bold text-xl leading-[30px] font-montserrat text-black inline-block ">Opening Hours
                    <span className="h-1 w-full block mt-1 bg-orange"></span>
                  </h5>

                  <ul className="font-montserrat text-base leading-6 text-black flex flex-col gap-2 mt-6 ">
                    <li><b>MON to FRI:</b> <time datetime="08:00 AM - 04:00 PM">08:00 AM - 04:00 PM</time> </li>
                    <li><b>MON to FRI:</b> <time datetime="SAT to SUN:">SAT to SUN:</time> </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Contact;
