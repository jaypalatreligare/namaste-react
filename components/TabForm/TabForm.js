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
  const [errors, setErrors] = useState({});
  const tabs = [
    {
      name: "Profile",
      component: Profile,
      validate: () => {
        const err = {};
        if(!data.name || data.name.length < 2){
          err.name = "Name is not valid";
        }
        if(!data.age || data.age < 12){
          err.name = "Age is not valid";
        }
        if(!data.email || data.email.length < 2){
          err.name = "Email is not valid";
        }
        setErrors(err);
        return err.name || err.age || err.email ? false : true;
      }
    },
    {
      name: "Interest",
      component: Interest,
      validate: () => {
        const err = {};
        if(data.interest.length < 1){
          err.interests = "Select atlest one Option"
        }
        setErrors(err);
        return err.interests ? false: true;        
      }
    },
    {
      name: "Settings",
      component: Settings,
      validate: () => {
        return true;
      }
    },
  ];
  const ActiveTabComponent = tabs[activeTab].component;

  const handleNextClick = () => {
    if(tabs[activeTab].validate()){
      setActiveTab((prev) => prev + 1);
    }   
  };

  const handlePrevClick = () => {
    if(tabs[activeTab].validate()){
    setActiveTab((prev) => prev - 1);
    }
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
            onClick={() => tabs[activeTab].validate() && setActiveTab(index)}
          >
            {tabname.name}
          </div>
        ))}
      </div>
      <div className="tab-body">
        <ActiveTabComponent data={data} setData={setData} errors={errors} />
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
