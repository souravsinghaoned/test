import NextAuth from "next-auth";
import GitHubProvider from "next-auth/providers/github";

export default NextAuth({
  providers: [
    GitHubProvider({
      clientId: '42a295225d654228ab8f',
      clientSecret: 'bd25a1b39189f3a54b1ecf3bdcd6fdb2aa4abcc5',
    }),
    // Add other providers if needed
  ],
});
