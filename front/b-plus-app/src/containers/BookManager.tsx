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

import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiBox-root': {
      padding: '0px',
    },
  },
}));

interface Props {
  log: 0 | 1 | 2 | 3;
  readBook: 0 | 1 | 2 | 3;
  favoriteBook: 0 | 1 | 2 | 3;
  bookWantToRead: 0 | 1 | 2 | 3;
}

export const BookManager = (props: Props) => {
  const [value, setValue] = useState(0)
  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };
  const que = []
  que[props.log] = "記録"
  que[props.readBook] = "読んだ本"
  que[props.favoriteBook] = "人生の本"
  que[props.bookWantToRead] = "読みたい本"

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
        <Tab label={que[0]} {...allyProps(props.log)}></Tab>
        <Tab label={que[1]} {...allyProps(props.readBook)}></Tab>
        <Tab label={que[2]} {...allyProps(props.favoriteBook)}></Tab>
        <Tab label={que[3]} {...allyProps(props.bookWantToRead)}></Tab>
      </Tabs>

      <TabPanel value={value} index={props.log}>
        <BookLog />
      </TabPanel>
      <TabPanel className={classes.root} value={value} index={props.readBook}>
        <BookUserRead />
      </TabPanel>
      <TabPanel value={value} index={props.favoriteBook}>
        <BookUserFavorite />
      </TabPanel>
      <TabPanel value={value} index={props.bookWantToRead}>
        <BookWantToRead />
      </TabPanel>

    </Paper>
  )
}
