import React, { Suspense, useEffect, useState, useCallback, useRef} from "react";
import { useStore } from 'Shell/store'

import "./App.scss";
import report from './reports.jpg';
const LeftNavComponent = React.lazy(() => import("SharedModules/LeftNav"));

export default function () {
  const menuList = useRef(['Executive Summary', 'Product Mix'])
  const { menuData } = useStore()
  const [menuSelectionText, setMenuSelectionText] = useState('')
  
  useEffect(() => {
    console.log('arun3 detail app menuData ( from shell) updated global state data shared ', menuData)
    setMenuSelectionText(menuData.selectedMenu)
  }, [menuData.selectedMenu])

  const menuItemHandler = useCallback((item) => {
      console.log('arun3 shell app ', item)
      const event = new CustomEvent('menuSelect', { detail: item, bubbles: true, isTrusted: true})
      window.dispatchEvent(event)
    }, [menuList.current])
  
    const menuHandler = useCallback((evt) => {
      console.log('arun3 shell app ', evt)
    }, [])

  return (
  <div className="app-container">
    <Suspense fallback={<div>Loading...</div>}>
      <div className="layout-wrapper">
        <LeftNavComponent 
          menuList={menuList.current} 
          itemClickHandler={menuItemHandler} 
        />

        <div className="main-content">
          <h2>
            Menu Selection Global State update: 
            <span> {menuSelectionText} </span>
          </h2>
          <section>
            <img src={report} width={1000} />
          </section>
        </div>
      </div>
    </Suspense>
  </div>
);

}