import React from 'react'

const Links = () => {
  return (
    
    <div className='post'>  
      <div className="post-1">
        <div className='link-inner'>
            <h3>Total Links in All Posts</h3>
            <h2>300</h2>
        </div>
        <div className='link-inner'>
            <h3>Total number of External Links</h3>
            <h2>300</h2>
        </div>
        <div className='link-inner'>
            <h3>Total number of Internal Links</h3>
            <h2>300</h2>
        </div>
        </div>
      <div className='post-1'>
        <h2  className='text'>Broken Internal Links</h2>
        <ol>
          <li className="link-item">htttps
            <p className='first-link'><span>5</span> TIMES USED</p>
          </li>
          <li className="link-item">My ID list
          <p className='first-link'><span>5</span> TIMES USED</p>
          </li>
          <li className="link-item">My ID list
          <p className='first-link'><span>5</span> TIMES USED</p>
          </li>
        </ol>
      </div>
      <div className='post-1'>
        <h2  className='text'>Broken External Links</h2>
        <ol>
          <li className="link-item">My ID list
          <p className='first-link'><span>5</span> TIMES USED</p>
          </li>
          <li className="link-item">My ID list
          <p className='first-link'><span>5</span> TIMES USED</p>
          </li>
          <li className="link-item">My ID list
          <p className='first-link'><span>5</span> TIMES USED</p>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Links