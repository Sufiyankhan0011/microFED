import React, { Suspense, useEffect, useState, useCallback} from "react";
import { useStore } from 'Shell/store'

import "./App.scss";
import report from './reports.jpg';

export default function () {
  const { menuData } = useStore()
  const [menuSelectionText, setMenuSelectionText] = useState('')
  
  useEffect(() => {
    console.log('arun3 detail app menuData ( from shell) updated global state data shared ', menuData)
    setMenuSelectionText(menuData.selectedMenu)
  }, [menuData.selectedMenu])

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <h2>   Menu Selection Global State update: 
      <spam> { menuSelectionText }</spam>
      </h2>
      
      <section>
        <img src={report} width={1000} />
      </section>
    </Suspense>
  );
}