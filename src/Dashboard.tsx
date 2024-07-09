import './styles/styles.css'

export const Dashboard: React.FC = () => {
  return (
    <div className="dashboard">
      <header className="header">
        <h1>Dashboard Header</h1>
      </header>
      <div className="main">
        <aside className="sidebar">
          <ul>
            <li>Home</li>
            <li>Profile</li>
            <li>Settings</li>
          </ul>
        </aside>
        <main className="content">
          <h2>Main Content Area</h2>
          <p>This is where the main content will go.</p>
        </main>
      </div>
      <footer className="footer">
        <p>Dashboard Footer</p>
      </footer>
    </div>
  )
}

