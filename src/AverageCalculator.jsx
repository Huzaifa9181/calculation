import React, { useState } from 'react';

const AverageCalculator = () => {
  const [amount1, setAmount1] = useState('');
  const [price1, setPrice1] = useState('');
  const [amount2, setAmount2] = useState('');
  const [price2, setPrice2] = useState('');
  const [averageCost, setAverageCost] = useState('');

  const calculateAverage = () => {
    const totalCost1 = parseFloat(amount1) * parseFloat(price1);
    const totalCost2 = parseFloat(amount2) * parseFloat(price2);
    const totalUnits = parseFloat(amount1) + parseFloat(amount2);
    const averageCostValue = (totalCost1 + totalCost2) / totalUnits;
    setAverageCost(averageCostValue.toFixed(2));
  };

  // Handle keyup event to calculate average dynamically
  const handleKeyUp = () => {
    calculateAverage();
  };

  return (
    <div className="container">
      <div className="form-group">
        <label htmlFor="amount1">Amount Bought (1st Purchase):</label>
        <input type="number" className="form-control" id="amount1" placeholder="Enter amount" value={amount1} onChange={(e) => setAmount1(e.target.value)} onKeyUp={handleKeyUp} />
      </div>
      <div className="form-group">
        <label htmlFor="price1">Price per Unit (1st Purchase):</label>
        <input type="number" className="form-control" id="price1" placeholder="Enter price" value={price1} onChange={(e) => setPrice1(e.target.value)} onKeyUp={handleKeyUp} />
      </div>
      <div className="form-group">
        <label htmlFor="amount2">Amount Bought (2nd Purchase):</label>
        <input type="number" className="form-control" id="amount2" placeholder="Enter amount" value={amount2} onChange={(e) => setAmount2(e.target.value)} onKeyUp={handleKeyUp} />
      </div>
      <div className="form-group">
        <label htmlFor="price2">Price per Unit (2nd Purchase):</label>
        <input type="number" className="form-control" id="price2" placeholder="Enter price" value={price2} onChange={(e) => setPrice2(e.target.value)} onKeyUp={handleKeyUp} />
      </div>
      <div className="mt-3">
        <h4>Average Cost per Unit: <span id="averageCost">{averageCost}</span></h4>
      </div>
    </div>
  );
}

export default AverageCalculator;
