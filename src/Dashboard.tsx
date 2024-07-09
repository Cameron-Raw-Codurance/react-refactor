import { useState } from 'react'
import './styles/styles.css'

export const Dashboard: React.FC = () => {

  const [confirmedValue, setConfirmedValue] = useState("");
  const [inputValue, setInputValue] = useState("");

  function updateValue() {
    setConfirmedValue(inputValue);
    setInputValue("");
  }

  return (
    <div className="dashboard">
      <header className="header">
        <h1>Dashboard Header</h1>
      </header>
      <div className="main">
        <div className="sidebar">
          <ul>
            <li>Home</li>
            <li>Profile</li>
            <li>Settings</li>
          </ul>
        </div>
        <main className="content">
          <h2>Main Content Area</h2>
          <p>This is where the main content will go.</p>
          <div className="interactive">
            <div>{confirmedValue}</div>
            <input placeholder='Add new value here' onChange={(e) => setInputValue(e.target.value)}></input>
            <button onClick={() => updateValue()}>Update</button>
          </div>
        </main>
      </div>
      <footer className="footer">
        <p>Dashboard Footer</p>
      </footer>
    </div>
  )
}

