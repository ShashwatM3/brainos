import pc from '@/lib/pinecone';
import { NextRequest, NextResponse } from 'next/server';

export const dynamic = "force-dynamic";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { indexName } = body;

    if (!indexName) {
      return NextResponse.json(
        { error: "indexName is required" }, 
        { status: 400 }
      );
    }

    const result = await pc.createIndexForModel({
      name: indexName,
      cloud: 'aws',
      region: 'us-east-1',
      embed: {
        model: 'llama-text-embed-v2',
        fieldMap: { text: 'chunk_text' },
      },
    });
  
    return NextResponse.json({ created: true, result });

  } catch(error: any) {
    console.error("Error in createIndex API:", error);
    
    if (error.message?.includes('already exists') || error.message?.includes('duplicate')) {
      return NextResponse.json({ created: true, message: "Index already exists" });
    }
    
    return NextResponse.json(
      { error: "Failed to create index: " + error.message }, 
      { status: 500 }
    );
  }
}