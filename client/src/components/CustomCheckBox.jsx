import CheckMark from "../icons/CheckMark";

const CustomCheckBox = ({ text, itemCount, checked, onChange }) => {
  return (
    <label className="w-full flex items-center justify-between cursor-pointer">
      <div className="flex gap-2 items-center targetInputParen">
        <input
          type="checkbox"
          className="targetInput hidden"
          checked={checked}
          onChange={onChange}
        />
        <div className="customCheckBox size-4 rounded-xs border-black border flex justify-center items-center">
          <CheckMark />
        </div>
        {text}
      </div>
      {itemCount && <p>({itemCount})</p>}
    </label>
  );
};

export default CustomCheckBox;
