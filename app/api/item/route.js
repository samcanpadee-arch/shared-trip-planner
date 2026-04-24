import { NextResponse } from 'next/server';

export const POST = async () => {
  return NextResponse.json({ result: null, mock: true }, { status: 200 });
};
