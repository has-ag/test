import { getAccessToken, withApiAuthRequired } from '@auth0/nextjs-auth0';
import { NextResponse } from 'next/server';

export const GET = withApiAuthRequired(async function getToken() {
  const { accessToken } = await getAccessToken();
  console.log(accessToken, 'Hadouken');
  return NextResponse.json(accessToken);
});
