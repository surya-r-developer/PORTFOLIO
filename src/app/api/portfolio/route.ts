import { NextResponse } from 'next/server';
import { initialPortfolioData } from '@/lib/initial-data';

export async function GET() {
  return NextResponse.json(initialPortfolioData);
}
