import { NextResponse } from 'next/server';

const requiredFields = [
  'name',
  'fridayNight',
  'saturdayMorning',
  'saturdayLunch',
  'saturdayDrinks',
  'saturdayNight',
  'sundayRecovery',
  'budgetComfort'
];

async function getKvClient() {
  try {
    const loadKv = new Function('return import("@vercel/kv")');
    const { kv } = await loadKv();
    return kv;
  } catch {
    return null;
  }
}

export async function POST(request) {
  try {
    const body = await request.json();

    const hasMissingRequired = requiredFields.some((field) => !body[field]);
    if (hasMissingRequired) {
      return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
    }

    const vote = {
      name: body.name,
      travelNotes: body.travelNotes || '',
      hardConstraints: body.hardConstraints || '',
      fridayNight: body.fridayNight,
      saturdayMorning: body.saturdayMorning,
      saturdayLunch: body.saturdayLunch,
      saturdayDrinks: body.saturdayDrinks,
      saturdayNight: body.saturdayNight,
      sundayRecovery: body.sundayRecovery,
      budgetComfort: body.budgetComfort,
      hardNos: Array.isArray(body.hardNos) ? body.hardNos : [],
      finalComments: body.finalComments || '',
      submittedAt: new Date().toISOString()
    };

    const normalizedName = body.name.trim().toLowerCase();
    const key = `vote:${normalizedName}`;

    const kv = await getKvClient();

    if (!kv) {
      console.log('KV unavailable. Mock submit payload:', vote);
      return NextResponse.json({ success: true, mock: true });
    }

    await kv.set(key, vote);
    await kv.sadd('voters', key);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Vote submission error:', error);
    return NextResponse.json({ error: 'Failed to save vote' }, { status: 500 });
  }
}
