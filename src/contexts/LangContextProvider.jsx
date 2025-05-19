import React, { useState } from 'react'
import langContext from './LangContext'
import i18n from '../../i18n'


const LangContextProvider = ({children}) => {
  const [lang, setLang] = useState('english')
  console.log(lang);
  
  React.useEffect(() => {
    i18n.changeLanguage(lang);
  }, [lang]);

  return (
    <langContext.Provider value={{lang, setLang}}>
      {children}
    </langContext.Provider>
  )
}

export default LangContextProvider