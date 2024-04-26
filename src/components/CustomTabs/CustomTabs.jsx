import React from "react";
import { Tabs, TabsHeader, TabsBody, Tab } from "@material-tailwind/react";

function CustomTabs({ activeTab, onChange }) {
  const data = [
    {
      label: "Cajas de cartón",
      value: "Cajas de cartón",
    },
    {
      label: "Productos",
      value: "Productos",
    },
  ];

  const handleTabClick = (value) => onChange(value);

  return (
    <Tabs value={activeTab}>
      <TabsHeader>
        {data.map(({ label, value }) => (
          <Tab key={value} value={value} onClick={() => handleTabClick(value)}>
            {label}
          </Tab>
        ))}
      </TabsHeader>
    </Tabs>
  );
}

export default CustomTabs;
