import NextAuth, { type NextAuthOptions } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

function sleep(duration: number) {
  return new Promise(resolve => setTimeout(resolve, duration));
}

const emailCredsProvider = CredentialsProvider({
  credentials: {
    username: { label: 'Username', type: 'username' },
    password: { label: 'Password', type: 'password' },
  },
  async authorize(credentials) {
    const { username, password } = credentials as {
      username: string;
      password: string;
    }

    if (!username || !password) {
      throw new Error('Missing username or password');
    }

    if (username !== 'admin' || password !== 'admin') {
      throw new Error('Invalid username or password');
    }

    // Induce some delay.
    await sleep(2000)

    return {
      id: '123',
      username: 'admin',
    };
  },
})

const authOptions: NextAuthOptions = {
  session: { strategy: 'jwt' },
  providers: [emailCredsProvider],
};

export default NextAuth(authOptions);

