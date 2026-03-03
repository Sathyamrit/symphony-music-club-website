import React from 'react'

const Home = () => {
  return (
    <div>
      {/* remove the boiler code */}
        <h1>Symphony Music Club Website</h1>
        <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0&icon_names=arrow_shape_up_stack" />
        <a 
          href="https://github.com/Sathyamrit" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ textDecoration: 'none', color: 'inherit' }}
        >
          <span class="material-symbols-outlined">
            arrow_shape_up_stack
          </span>
          My Github
        </a>
    </div>
  )
}

export default Home