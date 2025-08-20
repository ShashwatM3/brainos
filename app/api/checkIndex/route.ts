import pc from '@/lib/pinecone';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { indexName } = body;
  
    const des = await pc.describeIndex(`${indexName}`);
    // console.log(des)
  
    return NextResponse.json({ exists: true, description: des });
  } catch(error: any) {
    return NextResponse.json({ exists: false, description: null })
  }
}