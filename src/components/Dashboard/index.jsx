import React, { useContext } from 'react'
import { CssBaseline } from '@material-ui/core'
import { appContext } from '../../context'
import FloatMenu from '../FloatMenu'
import SideBar from '../SideBar'
import './style.scss'

const Index = () => {
   const { context } = useContext(appContext)
   return (
      <>
         <CssBaseline />
         <FloatMenu />
         <SideBar />
         <div className='container'>
            <iframe className='container__dashboard'
               src={context.dashboard.url}
            />
         </div>
      </>
   )
}

export default Index;