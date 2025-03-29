import Interest from "./Interest";
import Profile from "./Profile";
import Settings from "./Settings";
import { useState } from "react";

const TabForm = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState({
    name: "Jaypal",
    age: 35,
    email: "jpsagar@gmail.com",
    interest: ["coding", "music"],
    theme: "dark",
  });
  const [errors,setErrors] = useState({
    name: "Name is not valid."
  }) 
  const tabs = [
    {
      name: "Profile",
      component: Profile,
    },
    {
      name: "Interest",
      component: Interest,
    },
    {
      name: "Settings",
      component: Settings,
    },
  ];
  const ActiveTabComponent = tabs[activeTab].component;

  const handleNextClick = () => {
    setActiveTab((prev) => prev + 1);
  };

  const handlePrevClick = () => {
    setActiveTab((prev) => prev - 1);
  };
  const handleSubmitClick = () => {
    console.log("handleSubmitClick");
  };
  return (
    <div className="tabform">
      <div className="heading-container">
        {tabs.map((tabname, index) => (
          <div
            key={tabname.name}
            className="heading"
            onClick={() => setActiveTab(index)}
          >
            {tabname.name}
          </div>
        ))}
      </div>
      <div className="tab-body">
        <ActiveTabComponent data={data} setData={setData} errors= {errors} />
      </div>
      <div>
        {activeTab > 0 && <button onClick={handlePrevClick}>Prev</button>}
        {activeTab < tabs.length - 1 && (
          <button onClick={handleNextClick}>Next</button>
        )}
        {activeTab === tabs.length - 1 && (
          <button onClick={handleSubmitClick}>Submit</button>
        )}
      </div>
    </div>
  );
};
export default TabForm;
