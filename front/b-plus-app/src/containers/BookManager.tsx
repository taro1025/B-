import react, { useState } from "react"

//to use for Tab
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { TabPanel, allyProps } from '../components/TabPanel';

export const BookManager = () => {
  const [value, setValue] = useState(0)
  const handleChange = (event: any) => {
    setValue(event.target.value);
  };
  return (
    <Paper>
      <Tabs
        value={value}
        onChange={(e) => handleChange(e)}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="記録" {...allyProps(0)}></Tab>
        <Tab label="読んだ本" {...allyProps(1)}></Tab>
        <Tab label="人生の本" {...allyProps(2)}></Tab>
        <Tab label="読みたい本" {...allyProps(3)}></Tab>
      </Tabs>
    </Paper>
  )
}
