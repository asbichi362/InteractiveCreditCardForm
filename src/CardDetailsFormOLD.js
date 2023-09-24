import React, { useState } from 'react';
import Swal from 'sweetalert2';
import './style.css';
import  useMediaQuery  from 'react-responsive';
import { MaskedInput, createDefaultMaskGenerator } from 'react-hook-mask';

const maskGenerator = createDefaultMaskGenerator('9999 9999 9999 9999');

function CardDetailsForm() {
    //Start Set up responsive page 
    const isDesktopOrLaptop = useMediaQuery({
        query: '(min-width: 1224px)'
        })
        const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' });
const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });

const [cardNumber, setCardNumber] = useState('');
  const [expiryMM, setExpiryMM] = useState('');
  const [expiryYY, setExpiryYY] = useState('');
  const [cvv, setCvv] = useState('');
  const [errors, setErrors] = useState({});
  const [fname, setFname] = useState('');

  const validateInputs = () => {
    const newErrors = {};

    // Validate card number (simple validation for demonstration)
    if (!/^\d{16}$/.test(cardNumber)) {
      newErrors.cardNumber = 'Invalid card number';
    }

    // Validate expiry date (simple validation for demonstration)
    if (!/^\d{2}$/.test(expiryMM)) {
      newErrors.expiryMM = 'Invalid expiry date';
    }
    if (!/^\d{2}$/.test(expiryYY)) {
        newErrors.expiryYY = 'Invalid expiry date';
      }

    // Validate CVV (simple validation for demonstration)
    if (!/^\d{3}$/.test(cvv)) {
      newErrors.cvv = 'Invalid CVV';
    }

    setErrors(newErrors);

    // Return true if no errors, indicating a valid form
    return Object.keys(newErrors).length === 0;
  };

  

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateInputs()) {
        // Handle form submission logic here
        console.log('Form submitted');
      } else {
        console.log('Form has validation errors');
      }
  };

  return (
    <div>
<h1>Device Test!</h1>
{isDesktopOrLaptop && <p>You are a desktop or laptop</p>}
{isBigScreen && <p>You have a huge screen</p>}
{isTabletOrMobile && <p>You are a tablet or mobile phone</p>}
<p>Your are in {isPortrait ? 'portrait' : 'landscape'} orientation</p>
{isRetina && <p>You are retina</p>}
    <div className='split left'>
    
    </div>
    <div className='split center'>
    <div className="card">
      <div className="chip"></div>
      <div className="card-body">
        <div className="card-logo">
          <img src="" alt="Card Logo" />
        </div>
        <div className="card-number">
          <span>1234</span>
          <span>5678</span>
          <span>9012</span>
          <span>3456</span>
        </div>
        <div className="card-info">
          <div className="card-holder">
            <label>Card Holder</label>
            <span>John Doe</span>
          </div>
          <div className="card-expiry">
            <label>Valid Thru</label>
            <span>12/23</span>
          </div>
        </div>
      </div>
    </div>

    </div>
    <div className='split right'>
    
    <div class="container">
        <h2>Payment Card Details</h2>
        <form className="paymentForm" onSubmit={handleSubmit}>
        <div class="form-group">
                <label for="cardHolder">Card Holder:</label>
                <input type="text" id="cardHolder" placeholder="eg: John Doe" value={fname}
            onChange={(e) => setFname(e.target.value)} required />
            </div>
            <div class="form-group">
                <label for="cardNumber">Card Number:</label>
                <input type="text" placeholder="eg: 1234 5678 9012 3456"  id="cardNumber"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}  maskGenerator={maskGenerator}
              required />
             {errors.cardNumber && <div className="error">{errors.cardNumber}</div>}
            </div>

            <div class="form-row">
                <div class="form-group col">
                    <label for="expiryDate">Expiry Date:</label>
                    <input type="text" placeholder="MM"  id="expiryDate"
            value={expiryMM}
            onChange={(e) => setExpiryMM(e.target.value)} required />
             {errors.expiryMM && <div className="error">{errors.expiryMM}</div>}
                </div>
                <div class="form-group col">
                    <label for="expiryDate" id="experedYY">Expiry Date:</label>
                    <input type="text" id="expiryDate" placeholder="YY" value={expiryYY}
            onChange={(e) => setExpiryYY(e.target.value)} required />
             {errors.expiryYY && <div className="error">{errors.expiryYY}</div>}
                </div>
                <p></p>&nbsp;
                <div class="form-group col">
                    <label for="cvv">CVV:</label>
                    <input type="text" id="cvv" placeholder="123"  value={cvv}
            onChange={(e) => setCvv(e.target.value)} required />
            {errors.cvv && <div className="error">{errors.cvv}</div>}
                </div>
            </div>
            <button type="submit">Confirm</button>
        </form>
    </div>

    </div>

    </div>
  );
}

export default CardDetailsForm;