import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { HiArrowRight } from "react-icons/hi";
import toast from 'react-hot-toast';

const FooterTop = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const handleSubscribe = () => {
    if (!email.trim()) {
      toast.error('Please enter your email address.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      toast.error('Please enter a valid email address.');
      return;
    }
    toast.success('Redirecting to contact page...');
    navigate(`/contact?email=${encodeURIComponent(email)}`);
  };

  return (
    <div className="bg-green rounded-2xl lg:rounded-3xl px-6 sm:px-10 lg:px-16 py-10 lg:py-14">
      <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 lg:gap-12">
        <div className="text-center lg:text-left">
          <h2 className="font-poppins text-2xl lg:text-3xl font-semibold text-white leading-tight mb-2">
            {t("Get_Our_Updates")}
          </h2>
          <p className="font-montserrat text-sm lg:text-base text-white/70 max-w-md mx-auto lg:mx-0">
            {t("Newsletter_Description")}
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-3 w-full lg:w-auto lg:min-w-[480px]">
          <input
            className="flex-1 font-montserrat text-sm text-black placeholder:text-black/40 px-5 py-3 lg:py-4 rounded-10p bg-white outline-none border-2 border-transparent focus:border-white/30"
            type="email"
            placeholder="Enter your email address ..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSubscribe()}
          />
          <button
            onClick={handleSubscribe}
            className="flex items-center justify-center gap-2 font-montserrat font-bold text-sm lg:text-base text-green bg-white px-6 py-3 lg:py-4 rounded-10p hover:bg-white/90 transition-all whitespace-nowrap"
          >
            {t("Subscribe")} <HiArrowRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FooterTop;
