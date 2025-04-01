import { NextResponse } from 'next/server';
import crypto from 'crypto';

export async function POST(req) {
  const { searchParams } = new URL(req.url);
  const action = searchParams.get('action');
  const body = await req.json();

  const merchant_id = process.env.MERCHANT_ID;
  const merchant_secret = process.env.MERCHANT_SECRET;

  // Generate hash for payment start
  if (action === 'start') {
    const { order_id, amount, currency } = body;

    const hash = crypto
      .createHash('md5')
      .update(
        merchant_id +
          order_id +
          amount +
          currency +
          crypto
            .createHash('md5')
            .update(merchant_secret)
            .digest('hex')
            .toUpperCase()
      )
      .digest('hex')
      .toUpperCase();

    return NextResponse.json({ hash, merchant_id });
  }

  // Verify payment notification
  if (action === 'notify') {
    const { order_id, payhere_amount, payhere_currency, status_code, md5sig } =
      body;

    const local_md5sig = crypto
      .createHash('md5')
      .update(
        merchant_id +
          order_id +
          payhere_amount +
          payhere_currency +
          status_code +
          crypto
            .createHash('md5')
            .update(merchant_secret)
            .digest('hex')
            .toUpperCase()
      )
      .digest('hex')
      .toUpperCase();

    if (local_md5sig === md5sig && status_code === '2') {
      console.log(`Payment successful for order: ${order_id}`);
      return NextResponse.json({ status: 'success' });
    }

    console.log(`Payment failed for order: ${order_id}`);
    return NextResponse.json({ error: 'Invalid payment' }, { status: 400 });
  }

  return NextResponse.json({ error: 'Invalid action' }, { status: 400 });
}
