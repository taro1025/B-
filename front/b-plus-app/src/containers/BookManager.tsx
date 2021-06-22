import react, { useState } from "react"

//to use for Tab
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { TabPanel, allyProps } from '../components/TabPanel';

//Managed Components
import { BookLog } from "./managed/BookLog"
import { BookUserRead } from "./managed/BookUserRead"
import { BookWantToRead } from "./managed/BookWantToRead"
import { BookUserFavorite } from "./managed/BookUserFavorite"

import { makeStyles } from "@material-ui/core/styles"; import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
  nopadding: {
    padding: "0px!"
  },
});

export const BookManager = () => {
  const [value, setValue] = useState(0)
  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  const classes = useStyles();
  return (
    <Paper>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="記録" {...allyProps(0)}></Tab>
        <Tab label="読んだ本" {...allyProps(1)}></Tab>
        <Tab label="人生の本" {...allyProps(2)}></Tab>
        <Tab label="読みたい本" {...allyProps(3)}></Tab>
      </Tabs>

      <TabPanel value={value} index={0}>
        <BookLog />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <BookUserRead />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <BookUserFavorite />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <BookWantToRead />
      </TabPanel>

    </Paper>
  )
}
