import React, { useContext } from 'react';
import Page from './page'
import { appContext } from '../../context'
const Index = () => {

   const { context, setContext } = useContext(appContext)

   const handleOnClick = () => {
      setContext({
         sideBar: { ...context.sideBar, open: true }
      })
   }
   return (
      <Page
         handleOnClick={handleOnClick}
      />
   )
}

export default Index;