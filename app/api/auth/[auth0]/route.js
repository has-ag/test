import { handleAuth, handleLogin } from '@auth0/nextjs-auth0';
export const GET = handleAuth({
  login: handleLogin({
    authorizationParams: {
      audience: 'https://dev-a05pnrz1kak8s1va.us.auth0.com/api/v2/',
      scope: 'openid profile email'
    }
  })
});
