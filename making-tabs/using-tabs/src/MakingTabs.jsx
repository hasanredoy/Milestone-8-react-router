import { useState } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';

const MakingTabs = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <div>
      <h1>tabs</h1>

      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>tab 1</Tab>
          <Tab>tab 2</Tab>
          <Tab>tab 3</Tab>
        </TabList>
        <TabPanel>
          <h1>from tab 1</h1>
        </TabPanel>
        <TabPanel>
        <h1>from tab 2 </h1>
        </TabPanel>
        <TabPanel>
        <h1>from tab 3</h1>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default MakingTabs;