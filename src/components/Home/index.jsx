import React, { useContext } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import { CssBaseline } from '@material-ui/core'
import { appContext } from '../../context'
import { Visibility } from '@material-ui/icons'
import IconButton from '@material-ui/core/IconButton'
import FloatMenu from '../FloatMenu'
import SideBar from '../SideBar'

import './style.scss'

const useStyles = makeStyles({
   root: {
      width: 350,
   },
   media: {
      height: 190,
   },
})

export default (props) => {

   const { context, setContext } = useContext(appContext)
   const { cardsUrl } = context.home

   const { history } = props

   const classes = useStyles()

   const handleOnClick = (url) => {
      setContext({ dashboard: { url } })
      history.push('/dashboard')
   }

   const card = ({ name, path }) => {
      return (
         <Card className={classes.root}>
            <CardActionArea>
               <CardMedia
                  className={classes.media}
                  title={name}
               >
                  <embed className='cards__img' src={path} />
               </CardMedia>
               <Typography
                  gutterBottom
                  variant="h5"
                  component="h2"
               >
                  {name}
               </Typography>
               <IconButton
                  onClick={() => handleOnClick(path)}
               >
                  <Visibility />
               </IconButton>
            </CardActionArea>
         </Card>
      )
   }

   return (
      <>
         <FloatMenu />
         <SideBar />
         <div className='cards'>
            <CssBaseline />
            {
               cardsUrl.map((obj, key) => (
                  <div className='cards__item'>{card(obj)}</div>
               ))
            }
         </div>
      </>
   )
}
