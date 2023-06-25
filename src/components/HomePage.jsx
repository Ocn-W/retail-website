import React from 'react';
import '../App.css';

export default function HomePage() {
  return (
  <div>
    <div className='banner1'>
        <div className='bannerInfo'>
            <h2>New Arrivals</h2>
            <button>Explore Styles</button>
        </div>
    </div>
    <div className='banner2'>
        <div className='bannerInfo'>
            <h2>Sale Items</h2>
            <button>Explore Styles</button>
        </div>
    </div>
    <div className='banner3'>
        <div className='bannerInfo'>
            <h2>Latest Collection</h2>
            <button>Explore Styles</button>
        </div>
    </div>

    <footer>
        <p>2023 Ocean Waring</p> 
    </footer>
</div>
  )
}
