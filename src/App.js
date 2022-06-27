export default function App() {
  return (
    <div className='card'>
      <div className='hero'></div>

      <div className='sub-hero'>
        <h1>Order Summary</h1>
        <p>
          You can now listen to millions of songs, audiobooks, and podcasts on
          any device anywhere you like!
        </p>
        <div className='row'>
          <div>
            <p>Annual Plan</p>
            <p className='price'>$59.99/year</p>
          </div>

          <a href='/'>Change</a>
        </div>

        <div className='button primary'>Proceed to Payment</div>
        <div className='button '>Cancel Order</div>
      </div>
    </div>
  );
}
