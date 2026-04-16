import FormInput from "./FormInput";
import Button from "./Button";
import OrderSummary from "./OrderSummary";

const InformationAccPart = ({ billing, setBilling, setActive }) => {
  const set = (key, val) => setBilling((prev) => ({ ...prev, [key]: val }));

  const handleNext = () => {
    setActive("Shipping");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 lg:justify-between w-full">
      <div className="w-full lg:w-auto">
        <h2 className="font-poppins text-2xl lg:text-4xl font-semibold leading-[30px] lg:leading-[46px] text-black mb-2">
          Billing Details
        </h2>

        <div className="mt-6 lg:mt-8 flex flex-wrap gap-x-4 gap-y-6 lg:gap-y-8 w-full lg:w-[870px]">
          <div className="w-full sm:w-[calc(50%-8px)] lg:w-[424px]">
            <FormInput label="First Name" star={true} placeholder="Amelia" value={billing.firstName || ""} onChange={(e) => set("firstName", e.target.value)} name="firstName" />
          </div>
          <div className="w-full sm:w-[calc(50%-8px)] lg:w-[424px]">
            <FormInput label="Last Name" star={true} placeholder="Watson" value={billing.lastName || ""} onChange={(e) => set("lastName", e.target.value)} name="lastName" />
          </div>
          <div className="w-full sm:w-[calc(50%-8px)] lg:w-[424px]">
            <FormInput label="Phone Number" star={true} placeholder="+123 456 7890" inpType="tel" value={billing.phone || ""} onChange={(e) => set("phone", e.target.value)} name="phone" />
          </div>
          <div className="w-full sm:w-[calc(50%-8px)] lg:w-[424px]">
            <FormInput label="Email Address" star={true} placeholder="amelia@eshop.com" inpType="email" value={billing.email || ""} onChange={(e) => set("email", e.target.value)} name="email" />
          </div>
          <div className="w-full">
            <FormInput label="Address" star={true} placeholder="Home Address, St. 12345" value={billing.address || ""} onChange={(e) => set("address", e.target.value)} name="address" />
          </div>
          <div className="w-full sm:w-[calc(50%-8px)] lg:w-[424px]">
            <FormInput label="Country" star={true} placeholder="United States" value={billing.country || ""} onChange={(e) => set("country", e.target.value)} name="country" />
          </div>
          <div className="w-full sm:w-[calc(50%-8px)] lg:w-[424px]">
            <FormInput label="State" star={true} placeholder="California" value={billing.state || ""} onChange={(e) => set("state", e.target.value)} name="state" />
          </div>
          <div className="w-full sm:w-[calc(50%-8px)] lg:w-[424px]">
            <FormInput label="City" star={true} placeholder="Los Angeles" value={billing.city || ""} onChange={(e) => set("city", e.target.value)} name="city" />
          </div>
          <div className="w-full sm:w-[calc(50%-8px)] lg:w-[424px]">
            <FormInput label="ZIP Code" placeholder="90210" value={billing.zip || ""} onChange={(e) => set("zip", e.target.value)} name="zip" />
          </div>
          <div className="w-full">
            <FormInput textAria={true} label="Order Notes" placeholder="Enter your order notes ..." height="173px" value={billing.notes || ""} onChange={(e) => set("notes", e.target.value)} name="notes" />
          </div>
        </div>
      </div>

      <OrderSummary>
        <Button text="Continue to Shipping" className="w-full" flexGrow={true} onClick={handleNext} />
      </OrderSummary>
    </div>
  );
};

export default InformationAccPart;
