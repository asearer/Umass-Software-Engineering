 it('should calculate the monthly rate correctly', function () {
    const values = {
      amount: 10000,
      years: 5,
      rate: 3
    };
    expect(calculateMonthlyPayment(values)).toEqual('179.69');
  })

  it('should calculate the monthly rate correctly', function () {
    const values = {
      amount: 30000,
      years: 6.5,
      rate: 3.7
    };
    expect(calculateMonthlyPayment(values)).toEqual('433.31');
  })

  it('should calculate the monthly rate correctly', function () {
    const values = {
      amount: 3563829.584312783128735,
      years: 7,
      rate: 25
    };
    expect(calculateMonthlyPayment(values)).toEqual('90206.36');
  })

  it("should return a result with 2 decimal places", function () {
    const values = {
      amount: 10043,
      years: 8,
      rate: 5.8
    };
    expect(calculateMonthlyPayment(values)).toEqual('131.00');
  })

  it('should return a result with 2 decimal places', function () {
    const values = {
      amount: 60723,
      years: 4.5,
      rate: 6.3
    };
    expect(calculateMonthlyPayment(values)).toEqual('1294.35');
  })
  
  it('should return 0 when "amount" is empty', function () {
    const values = {
      amount: '',
      years: 4,
      rate: 27
    };
    expect(calculateMonthlyPayment(values)).toEqual('0.00');
  })


