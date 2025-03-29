const Interest = ({ data, setData,errors }) => {
  const { interest } = data;

  const handleDataChange = (e) => {
    setData((prevState) => ({ 
        ...prevState, 
        interest: e.target.checked
        ? [...prevState.interest,e.target.name]
        : prevState.interest.filter((i)=> i !== e.target.name),
    }));
  };

  return (
    <div>
      <div>
        <label>
          <input
           onChange={handleDataChange}
            type="checkbox"
            name="coding"
            checked={interest.includes("coding")}
          />{" "}
          Coding
        </label>
        
      </div>

      <div>
        <label>
          <input
           onChange={handleDataChange}
            type="checkbox"
            name="music"
            checked={interest.includes("music")}
          />{" "}
          Music
        </label>
      </div>
      <div>
        <label>
          <input
           onChange={handleDataChange}
            type="checkbox"
            name="jsvascript"
            checked={interest.includes("jsvascript")}
          />{" "}
          Music
        </label>
        {
          errors.interest && <span className="error">{errors.interest}</span>
        }
      </div>
    </div>
  );
};
export default Interest;
