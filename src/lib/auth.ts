import { betterAuth } from "better-auth";
import { prismaAdapter } from "better-auth/adapters/prisma";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const auth = betterAuth({
    database: prismaAdapter(prisma, {
        provider: "mysql",
    }),
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID as string,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
        },
        reddit: {
            clientId: process.env.REDDIT_CLIENT_ID as string,
            clientSecret: process.env.REDDIT_CLIENT_SECRET as string,
            duration: "permanent",
            scopes: ["identity", "read", "submit"]
        },
    },
    debug: true, // Enable debugging
    // session: {
    //     expiresIn: 60 * 60 * 24 * 7, // 7 days
    //     updateAge: 60 * 60 * 24, // 1 day (every 1 day the session expiration is updated)
    //     cookieCache: {
    //         enabled: true,
    //         maxAge: 7 * 60 // Cache duration in seconds
    //     }
    // }
});