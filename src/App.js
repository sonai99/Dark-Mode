import React, { useState, useEffect } from 'react';

function App() {
  const [theme, setTheme] = useState('light');
  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);
  return (
    <div className='container'>
      <div className={`App ${theme}`}>
      <button className='button-39' onClick={toggleTheme}>Toggle Theme</button>
      <h1>Sample Text</h1>
      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quidem architecto accusantium voluptates hic porro dolore numquam et perspiciatis harum aliquid eum, voluptate earum facere iusto natus eligendi suscipit ad debitis?</p>
      <img src="https://wallpaperaccess.com/full/271965.jpg" alt="React Logo" class="center" className='img' />
    </div>
    </div>
  );
}
export default App;

