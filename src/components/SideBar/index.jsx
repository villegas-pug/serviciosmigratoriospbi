import React, { useContext } from 'react'
import Page from './Page'
import { appContext } from '../../context'

const Index = () => {
   const { context, setContext } = useContext(appContext)
   return (
      <Page
         context={context}
         setContext={setContext}
      />
   )
}

export default Index;