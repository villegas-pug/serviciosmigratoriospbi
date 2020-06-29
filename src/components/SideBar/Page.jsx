import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';

const useStyles = makeStyles({
   list: {
      width: 250,
   },
   fullList: {
      width: 'auto',
   },
})

export default function SwipeableTemporaryDrawer(props) {
   const classes = useStyles();

   const {
      context,
      setContext
   } = props

   const { open, position, components } = context.sideBar

   const toggleDrawer = (open) => (event) => {
      if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) return
      setContext({ sideBar: { ...context.sideBar, open } })
   }

   const list = (anchor) => (
      <div
         className={clsx(classes.list, {
            [classes.fullList]: anchor === 'top' || anchor === 'bottom',
         })}
         role="presentation"
         onClick={toggleDrawer(false)}
         onKeyDown={toggleDrawer(false)}
      >
         <List>
            {
               components.length > 0 ?
                  components.map((ListItem, key) => (ListItem))
                  : <h4>No hay botones...</h4>
            }
         </List>

      </div>
   )

   return (
      <SwipeableDrawer
         anchor={position}
         open={open}
         onClose={toggleDrawer(false)}
         onOpen={toggleDrawer(true)}
      >
         {list(position)}
      </SwipeableDrawer>
   )
}