import { Schema } from "mongoose"

export interface OAuthTokens extends Document {
    accessToken: string
    accessTokenExpiresOn: Date
    client: Schema.Types.Mixed // `client` and `user` are required in multiple places, for example `getAccessToken()`
    clientId: string
    refreshToken: string
    refreshTokenExpiresOn: Date,
    user: Schema.Types.Mixed
    userId: string
}

export interface OAuthClients extends Document {
    clientId: string
    clientSecret: string
    redirectUris: any[]
}

export interface OAuthUsers extends Document {
    email: string
    firstname: string
    lastname: string
    password: string
    username: string
}