import PayButton from '@/components/PayButton';

export default function Home() {
  return (
    <div className="max-w-md mx-auto mt-20 p-6 bg-slate-700 rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-center mb-6">Checkout</h1>
      <div className="space-y-4">
        <div className="p-4 border rounded-lg">
          <h2 className="font-semibold">Pay Class Fees</h2>
          <p>LKR 2500.00</p>
        </div>
        <PayButton />
      </div>
    </div>
  );
}
