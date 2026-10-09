import { NextResponse } from 'next/server';
import { getPortfolioData, savePortfolioData } from '@/lib/data-service';

export async function GET() {
  try {
    const data = getPortfolioData();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch portfolio data' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // In production, verify session/auth token here
    const success = savePortfolioData(body);
    if (!success) {
      return NextResponse.json({ error: 'Failed to save changes' }, { status: 500 });
    }
    
    return NextResponse.json({ success: true, data: body });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid request data' }, { status: 400 });
  }
}
