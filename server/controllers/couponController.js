const COUPONS = {
  FIRSTPAY:  { discount: 10, type: 'percent' },
  SAVE20:    { discount: 20, type: 'percent' },
  FLAT50:    { discount: 50, type: 'fixed' },
};

export const validateCoupon = (req, res) => {
  const { code } = req.body;
  if (!code) return res.status(400).json({ message: 'Coupon code required' });
  const coupon = COUPONS[code.toUpperCase()];
  if (!coupon) return res.status(404).json({ message: 'Invalid coupon code' });
  res.json({ code: code.toUpperCase(), ...coupon, message: 'Coupon applied' });
};
