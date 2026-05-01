import { NextResponse } from 'next/server'
import { readdir } from 'fs/promises'
import { join } from 'path'

export async function GET() {
  const files = await readdir(join(process.cwd(), 'public', 'uploads'))
  return NextResponse.json({ files })
}