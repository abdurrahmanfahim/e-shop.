import Button from "./Button";
import FormInput from "./FormInput";

const METHODS = [
  { key: "standard", label: "Standard Shipping", days: "5-7 business days", price: "$9.99" },
  { key: "express",  label: "Express Shipping",  days: "2-3 business days", price: "$19.99" },
  { key: "overnight",label: "Overnight Shipping", days: "Next business day", price: "$39.99" },
];

const ShippingAccPart = ({ shipping, setShipping, setActive }) => {
  const set = (key, val) => setShipping((prev) => ({ ...prev, [key]: val }));
  const selected = METHODS.find((m) => m.key === shipping.method) || METHODS[0];

  const handleNext = () => {
    setActive("Payment");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="flex flex-col lg:flex-row gap-8 lg:gap-0 lg:justify-between w-full">
      <div className="w-full lg:w-auto">
        <h2 className="font-poppins text-2xl lg:text-4xl font-semibold leading-[30px] lg:leading-[46px] text-black mb-2">
          Shipping Details
        </h2>

        <div className="mt-6 lg:mt-8 flex flex-wrap gap-x-4 gap-y-6 lg:gap-y-8 w-full lg:w-[870px]">
          <div className="w-full sm:w-[calc(50%-8px)] lg:w-[424px]">
            <FormInput label="Recipient Name" star={true} placeholder="John Doe" value={shipping.recipientName || ""} onChange={(e) => set("recipientName", e.target.value)} name="recipientName" />
          </div>
          <div className="w-full sm:w-[calc(50%-8px)] lg:w-[424px]">
            <FormInput label="Contact Number" star={true} placeholder="+123 456 7890" value={shipping.contactNumber || ""} onChange={(e) => set("contactNumber", e.target.value)} name="contactNumber" />
          </div>
          <div className="w-full">
            <FormInput label="Shipping Address" star={true} placeholder="123 Main Street" value={shipping.address || ""} onChange={(e) => set("address", e.target.value)} name="address" />
          </div>
          <div className="w-full sm:w-[calc(50%-8px)] lg:w-[424px]">
            <FormInput label="Country" star={true} placeholder="United States" value={shipping.country || ""} onChange={(e) => set("country", e.target.value)} name="country" />
          </div>
          <div className="w-full sm:w-[calc(50%-8px)] lg:w-[424px]">
            <FormInput label="State/Province" star={true} placeholder="California" value={shipping.state || ""} onChange={(e) => set("state", e.target.value)} name="state" />
          </div>
          <div className="w-full sm:w-[calc(50%-8px)] lg:w-[424px]">
            <FormInput label="City" star={true} placeholder="Los Angeles" value={shipping.city || ""} onChange={(e) => set("city", e.target.value)} name="city" />
          </div>
          <div className="w-full sm:w-[calc(50%-8px)] lg:w-[424px]">
            <FormInput label="ZIP/Postal Code" star={true} placeholder="90210" value={shipping.zip || ""} onChange={(e) => set("zip", e.target.value)} name="zip" />
          </div>
          <div className="w-full">
            <FormInput textAria={true} label="Delivery Instructions" placeholder="Leave at door, ring bell, etc." value={shipping.deliveryInstructions || ""} onChange={(e) => set("deliveryInstructions", e.target.value)} name="deliveryInstructions" />
          </div>
        </div>
      </div>

      <div className="w-full lg:w-[594px]">
        <div className="bg-lightGray rounded-[25px] p-6 lg:p-10">
          <h3 className="font-poppins text-xl lg:text-2xl font-semibold text-black mb-8 lg:mb-12">
            Shipping Options
          </h3>
          <div className="flex flex-col gap-4 lg:gap-5">
            <div className="bg-white p-4 lg:p-6 rounded-10p flex flex-col gap-3">
              {METHODS.map((m, i) => (
                <div key={m.key}>
                  <button
                    onClick={() => set("method", m.key)}
                    className={`w-full font-montserrat text-base lg:text-lg text-black flex justify-between items-center p-2 rounded-10p transition-all ${shipping.method === m.key ? "bg-green/5 border border-green" : "hover:bg-lightGray"}`}
                  >
                    <div className="text-left">
                      <h6 className="font-semibold">{m.label}</h6>
                      <p className="text-xs lg:text-sm text-black/50">{m.days}</p>
                    </div>
                    <p className="font-bold">{m.price}</p>
                  </button>
                  {i < METHODS.length - 1 && <hr className="border-t border-[#C3C3C3] mt-3" />}
                </div>
              ))}
            </div>

            <div className="bg-white p-4 lg:p-6 rounded-10p">
              <div className="font-montserrat font-bold text-base lg:text-xl text-black flex justify-between items-center mb-5 lg:mb-7">
                <h6 className="text-sm lg:text-base">Selected: {selected.label}</h6>
                <p>{selected.price}</p>
              </div>
              <Button text="Continue to Payment" className="w-full" flexGrow={true} onClick={handleNext} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShippingAccPart;
