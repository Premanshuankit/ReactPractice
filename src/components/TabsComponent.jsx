import { useState } from "react";

function TabsComponent() {
  const [activeTab, setActiveTab] = useState("Home");

  const tabs = [
    {
      title: "Home",
      content: "Welcome to Home Page",
    },
    {
      title: "Profile",
      content: "this is Profile Page",
    },
    {
      title: "Settings",
      content: "go to Settings Page",
    },
  ];

    return (
        <div>
        <h2>Tabs Component</h2>

        {tabs.map((tab) => {
            return (
                <button
                    key={tab.title}
                    style={{
                    marginRight: "10px",
                    color: activeTab === tab.title ? "red" : "black",
                    fontWeight: activeTab === tab.title ? "bold" : "normal",
                    }}
                    onClick={() => setActiveTab(tab.title)}>
                    {tab.title}
                </button>
            );
        })}

        <hr />

        {tabs.map((tab) => {
            if (tab.title === activeTab) {
                return (
                    <div key={tab.title}>
                    <h3>{tab.content}</h3>
                    </div>
                );
            }
        })}
        </div>
    );
}

export default TabsComponent;
