// import NextAuth from "next-auth"
// // import DuendeIdentityServer6 from 'next-auth/providers/duende-identity-server6';
// import DuendeIDS6Provider from 'next-auth/providers/duende-identity-server6';

// export const { handlers, signIn, signOut, auth } = NextAuth({
//     session: {
//         strategy: 'jwt'
//     },
//     providers: [
//         DuendeIDS6Provider({
//             id: 'duende-server',
//             clientId: 'nextApp',
//             clientSecret: "secret",
//             issuer: "http://localhost:5000",
//             authorization: { params: { scope: 'openid profile auctionApp' } },
//             idToken: true
//         })
//     ],
// })
import NextAuth, { NextAuthOptions } from "next-auth"
import DuendeIdentityServer6 from 'next-auth/providers/duende-identity-server6';

export const authOptions: NextAuthOptions = {
    session: {
        strategy: 'jwt'
    },
    providers: [
        DuendeIdentityServer6({
            id: 'duende-server',
            clientId: 'nextApp',
            // clientSecret: process.env.CLIENT_SECRET!,
            clientSecret: "secret"!,
            // issuer: process.env.ID_URL,
            issuer: "http://localhost:5000",
            authorization: { params: { scope: 'openid profile auctionApp' } },
            idToken: true
        })
    ],
    callbacks: {
        async jwt({ token, profile, user, account }) {
            console.log("TEST: ", { token, profile, user, account })
            if (profile) {
                token.username = profile.username
            }
            if (account) {
                token.access_token = account.access_token
            }
            return token;
        },
        async session({ session, token }) {
            if(token){
                session.user.username = token.username;
            }
            console.log({ session, token })
            return session
        }

    }
}

const handler = NextAuth(authOptions);
export {
    handler as GET,
    handler as POST
}