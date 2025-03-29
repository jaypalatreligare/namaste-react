import { useEffect, useRef, useState } from "react";

const OTP_DIGIT_COUNT = 5;
const OtpInput = () => {
  const [inputArr, setInputArr] = useState(new Array(OTP_DIGIT_COUNT).fill(""));
  const refArr = useRef([]);
  const handleOnChange = (value, index) => {
    if (isNaN(value)) {
      return;
    }
    const newValue = value.trim();
    const newArr = [...inputArr];
    newArr[index] = newValue.slice(-1);
    setInputArr(newArr);
    newValue && refArr.current[index + 1]?.focus();
  };

  const handleKeyDown = (e,index) => {
    if(!e.target.value && e.key === "Backspace"){
        refArr.current[index -1]?.focus();
    }

  }
  useEffect(() => {
  refArr.current[0]?.focus();
  },[]);

  return (
    <div className="otp-container">
      {inputArr.map((input, index) => (
        <input
          className="otp-input"
          key={index}
          type="text"
          value={inputArr[index]}
          onChange={(e) => handleOnChange(e.target.value, index)}
          onKeyDown={(e) => handleKeyDown(e,index)}
          ref={(input) => (refArr.current[index] = input)}
        />
      ))}
    </div>
  );
};

export default OtpInput;
