import React, { useState } from 'react'
// eslint-disable-next-line no-unused-vars
import langContext from './LangContext'
import i18n from '../../i18n'


const LangContextProvider = ({children}) => {
  const [lang, setLang] = useState('english')
  const [springSaleEnd, setSpringSaleEnd] = useState('')
  
  React.useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <langContext.Provider value={{lang, setLang, springSaleEnd, setSpringSaleEnd}}>
      {children}
    </langContext.Provider>
  )
}

export default LangContextProvider