import React, { useContext } from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import { appContext } from '../../context'

const Index = (props) => {

   const {
      description,
      url,
      IconButton
   } = props

   const { context, setContext } = useContext(appContext)

   const handleOnClick = (url) => {
      setContext({ dashboard: { ...context.dashboard, url } })
   }

   return (
      <ListItem
         button
         onClick={() => handleOnClick(url)}
      >
         <ListItemIcon>
            <IconButton style={{ 'font-size': '2rem' }} />
         </ListItemIcon>
         <ListItemText primary={description} />
      </ListItem>
   )
}

export default Index;