import { useState } from "react"
import { bookStateProps } from "../interfaces"
import { useParams } from 'react-router-dom'
import styled from "styled-components"

import { Detail } from "../components/tabs/Detail"
import { Posts } from "../components/tabs/Posts"
import { MyPosts } from "../components/tabs/MyPosts"

//to use for Tab
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { TabPanel, allyProps } from '../components/TabPanel';
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiBox-root': {
      padding: '0px',
    },
  },
}));
//　メ　モ
//reloadするとstateの値が消えてしまうのでエラーになる
//そこを余裕が出た時localstrageとか使って改善したい


const Image = styled.img`

`


export const DetailBook = (props: bookStateProps) => {

  const classes = useStyles(props);

  const params = useParams<{ id: string }>()
  //const book = props.books[params.id]

  const [value, setValue] = useState(0)
  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  return (

    <Paper>
      <Tabs
        value={value}
        onChange={handleChange}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="登録" {...allyProps(0)}></Tab>
        <Tab label="みんなの感想" {...allyProps(1)}></Tab>
        <Tab label="自分の感想" {...allyProps(2)}></Tab>
      </Tabs>

      <TabPanel className={classes.root} value={value} index={0}>
        <Detail />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Posts />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <MyPosts />
      </TabPanel>

    </Paper>


  )
}
