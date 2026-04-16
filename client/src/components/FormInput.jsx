const FormInput = ({
  inpType = "text",
  label,
  placeholder,
  star = false,
  textAria = false,
  height,
  value,
  onChange,
  name,
}) => {
  return (
    <>
      <label className="font-montserrat text-base lg:text-xl font-bold leading-6 lg:leading-[30px] text-black">
        {label} <span className="text-green">{star && "*"}</span>
      </label>
      {textAria ? (
        <textarea
          className="font-montserrat text-base lg:text-xl leading-6 lg:leading-[30px] text-black rounded-10p px-4 lg:px-8 py-3 lg:py-6 w-full border border-[#CBCBCB] mt-2 lg:mt-3"
          placeholder={placeholder}
          style={{ height }}
          value={value}
          onChange={onChange}
          name={name}
        />
      ) : (
        <input
          className="font-montserrat text-base lg:text-xl leading-6 lg:leading-[30px] text-black rounded-10p px-4 lg:px-8 py-3 lg:py-6 w-full border border-[#CBCBCB] mt-2 lg:mt-3"
          type={inpType}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          name={name}
        />
      )}
    </>
  );
};

export default FormInput;
