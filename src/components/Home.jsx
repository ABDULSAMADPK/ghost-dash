import React from 'react'
import { BsFillFilePostFill, BsFillPeopleFill, BsFillTagFill } from 'react-icons/bs'
import { RiPagesLine } from 'react-icons/ri'
import { Bar } from 'react-chartjs-2'
import { Link } from 'react-router-dom'

const state = {
  labels: [
    "January", "February", "March", "April", "May", "June", "July"
  ],
  datasets: [
    {
      label: 'Post Published',
      backgroundColor: 'rgba(219, 79, 142, 0.77)',
      borderColor: 'rgba(219, 79, 79, 0.77)',
      borderWidth: 2,
      data: [38, 47, 19, 20, 40, 50, 39],
    },
  ],
}


const Home = () => {
  return (
    <main className='main-container'>
      <div className='main-title'>
        <h3>GHOST DASH</h3>
      </div>

      <div className="main-cards">
        <div className="card">
          <div className="card-inner">
            <h3>Number of Posts</h3>
            <BsFillFilePostFill className='card_icon' />
          </div>
          <h1>300</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Number of Pages</h3>
            <RiPagesLine className='card_icon' />
          </div>
          <h1>15</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Number of Authors</h3>
            <BsFillPeopleFill className='card_icon' />
          </div>
          <h1>42</h1>
        </div>
        <div className="card">
          <div className="card-inner">
            <h3>Number of Tags</h3>
            <BsFillTagFill className='card_icon' />
          </div>
          <h1>10</h1>
        </div>
      </div>
      <div className='main-card'>
        <div className="card-inners">
          <h3>Posts per Month</h3>
          <Bar
            data={state}
            options={{
              title: {
                display: true,
                text: 'Post Published',
                fontSize: 20,
              },
              legend: {
                display: true,
                position: 'right',
              },
            }}
          />
        </div>
        <div className='published-post'>
          <h3>Lastest Published Posts</h3>
          <ol>
          <li className="sidebar-list-item">
            <Link to="/posts" target='_blank' > Posts</Link>
          </li>
          <li className="sidebar-list-item">
            <Link to="https://www.google.com/" target='_blank' > Posts</Link>
          </li>
          <li className="sidebar-list-item">
            <Link to="/posts" target='_blank' > Posts</Link>
          </li>
          <li className="sidebar-list-item">
            <Link to="/posts" target='_blank' > Posts</Link>
          </li>
          <li className="sidebar-list-item">
            <Link to="/posts" target='_blank' > Posts</Link>
          </li>
          </ol>
        </div>
      </div>
    </main>
  )
}

export default Home