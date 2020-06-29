import React, { createContext, useReducer } from 'react'
import SideBarButton from '../components/SideBarButton'
import Home from '@material-ui/icons/Home'
import Poll from '@material-ui/icons/Poll'

import {
   AGENCIA_VIRTUAL,
   CONTROL_MIGRAORIO,
   RECURSOS_HUMANOS,
   INMIGRACION_NACIONALIZACION,
   PROCEDIMIENTO_APROBADOS
} from './helpers/sideBarButton/constUrl'

const initialState = {
   home: {
      cardsUrl: [
         { name: 'Agencia Virtual', path: AGENCIA_VIRTUAL },
         { name: 'Control Migratorio', path: CONTROL_MIGRAORIO },
         { name: 'Recursos Humanos', path: RECURSOS_HUMANOS },
         { name: 'Inmigración y Nacionalización', path: INMIGRACION_NACIONALIZACION },
         { name: 'Procedimientos Aprobados', path: PROCEDIMIENTO_APROBADOS },
      ]
   },
   sideBar: {
      open: false,
      position: 'left',
      components: [
         <SideBarButton description='Inicio' url='/inicio' IconButton={Home} />,
         <SideBarButton description='Agencia Virtual' url={AGENCIA_VIRTUAL} IconButton={Poll} />,
         <SideBarButton description='Control Migratorio' url={CONTROL_MIGRAORIO} IconButton={Poll} />,
         <SideBarButton description='Recursos Humanos' url={RECURSOS_HUMANOS} IconButton={Poll} />,
         <SideBarButton description='Inmigración y Nacionalización' url={INMIGRACION_NACIONALIZACION} IconButton={Poll} />,
         <SideBarButton description='Procedimientos Aprobados' url={PROCEDIMIENTO_APROBADOS} IconButton={Poll} />,
      ]
   },
   dashboard: {
      url: ''
   }
}

export const appContext = createContext(initialState)

export default ({ children }) => {

   const reducer = (prevState, payload) => ({ ...prevState, ...payload })

   const [context, setContext] = useReducer(reducer, initialState)

   return (
      <appContext.Provider
         value={{
            context,
            setContext
         }}
      >
         {children}
      </appContext.Provider>
   )
}