'use client';

export default function PayButton() {
  const handlePayment = async () => {
    const paymentDetails = {
      order_id: `order_${Date.now()}`,
      amount: '2500.00',
      currency: 'LKR',
      first_name: 'Charith',
      last_name: 'Wickramasinghe',
      email: 'charith@zhake.live',
      phone: '01162234050',
      address: '123 Main St',
      city: 'Colombo',
      country: 'Sri Lanka',
    };

    try {
      // Get hash from backend
      const response = await fetch('/api/payment?action=start', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(paymentDetails),
      });

      if (!response.ok) throw new Error('Failed to initiate payment');

      const { hash, merchant_id } = await response.json();

      // Initialize PayHere payment
      const payment = {
        sandbox: true, // Set to false for production
        merchant_id,
        return_url: `${window.location.origin}/payment/success`,
        cancel_url: `${window.location.origin}/payment/cancel`,
        notify_url: `${window.location.origin}/api/payment?action=notify`,
        order_id: paymentDetails.order_id,
        items: 'Class Fees',
        amount: paymentDetails.amount,
        currency: paymentDetails.currency,
        ...paymentDetails,
        hash,
      };

      // Launch PayHere checkout
      if (window.payhere) {
        window.payhere.startPayment(payment);
      } else {
        console.error('PayHere SDK not loaded');
      }
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment initialization failed');
    }
  };

  return (
    <button
      onClick={handlePayment}
      className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
    >
      Pay with PayHere
    </button>
  );
}
