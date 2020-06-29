import React from 'react'
import {
   makeStyles,
   ThemeProvider,
   createMuiTheme
} from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import './style.scss'

const useStyle = makeStyles({
   appBar: {
      position: 'fixed',
      top: 5,
      zIndex: 20,
      color: 'white',
      width: '3em',
      height: '3em',
      backgroundColor: '#1E83D3',
      '&:hover': {
         backgroundColor: '#1E83D3',
      }
   },
   menuIcon: {
      fontSize: '1.5em'
   }
})

const theme = createMuiTheme({
   palette: {
      primary: {
         main: '#1E83D3'
      }
   }
})

const Page = ({ handleOnClick }) => {

   const style = useStyle()
   return (
      <ThemeProvider theme={theme}>
         <IconButton
            className={style.appBar}
            size='medium'
            onClick={() => handleOnClick()}
         >
            <MenuIcon className={style.menuIcon} />
         </IconButton>
      </ThemeProvider>
   )
}

export default Page