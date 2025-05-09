import clientPromise from '@/lib/mongodb';
import { NextRequest, NextResponse } from 'next';

export async function middleware(req:NextRequest){
    const token = req.cookies.get("token")?.value;  
    if(!token) {
        return NextResponse.redirect(new URL('/login', req.url));
    }
    const client = await clientPromise;
    const db = client.db('threads');
    const session = await db.collection('sessions').findOne({token});
    if(!session) {
        return NextResponse.redirect(new URL('/login', req.url));
    }

    return NextResponse.next();
}