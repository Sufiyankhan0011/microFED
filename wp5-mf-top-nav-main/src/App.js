import React, { Suspense, useState, useEffect, useCallback} from "react";
import "./App.scss";
import summary from './summary.jpg';

export default function () {

  const [menuSelectionText, setMenuSelectionText] = useState('')

  const handleMenuSelection = useCallback((evt) => {
    console.log('arun3 summary app - event base', evt)
    setMenuSelectionText(evt.detail)
  })

  useEffect(() => {
    console.log('arun3 summary mount ')
    window.addEventListener('menuSelect', handleMenuSelection)

    return () => {
      window.removeEventListener('menuSelect', handleMenuSelection)
    }
  }, [])

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <h2>   Menu Selection Event update: 
      <spam> { menuSelectionText }</spam>
      </h2>
      <section>
        <img src={summary} width={1000} />
      </section>
    </Suspense>
  );
}
