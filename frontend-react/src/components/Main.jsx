import React from 'react'
import Button from './Button';
import Header from './Header';
import Footer from './Footer';

const Main = () => {
  return (
    <>
     
    <div className='container'>
      <div className='p-5 text-center bg-light-dark rounded'>
        <h1 className='text-light'>Stock Prediction Portal</h1>
        <p className="text-light lead">This stock prediction application utilizes machine learning techniques, specifically employing keras, and LSTM model, integrated within the Django framework. it forcasts future stock press by analyzing 100-day and 200-day moving averages, essential indicators widely used stock analysts to inform trading and investment decisions.</p>
        <Button text="Explore Now" class="btn-outline-info"  url="/dashboard" />
      </div>
    </div>

    </>
  )
}

export default Main