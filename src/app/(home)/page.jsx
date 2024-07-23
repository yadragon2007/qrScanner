"use client"
import { Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';

const App = () => {
  const [decoded, setDecoded] = useState("")
  return <div>
    <Scanner onScan={(result) => setDecoded(result)} />
    <p>{decoded}</p>
  </div>
}
export default App


