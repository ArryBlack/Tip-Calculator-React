/* eslint-disable react/prop-types */
import "../index.css";

function Input({
  label,
  id,
  className,
  initialValue,
  changeHandler,
  placeholder,
  type,
}) {
  return (
    <>
      {label && <label className="label">{label}</label>}
      <input
        id={id}
        className={className}
        value={initialValue}
        type={type}
        placeholder={placeholder}
        onChange={changeHandler}
      />
    </>
  );
}

export default Input;
