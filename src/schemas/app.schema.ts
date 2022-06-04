


import * as mongoose from 'mongoose';

export const OAuthTokensSchema = new mongoose.Schema({
    accessToken: { type: String },
    accessTokenExpiresOn: { type: Date },
    client: { type: Object },  // `client` and `user` are required in multiple places, for example `getAccessToken()`
    clientId: { type: String },
    refreshToken: { type: String },
    refreshTokenExpiresOn: { type: Date },
    user: { type: Object },
    userId: { type: String },
})

export const OAuthClientsSchema = new mongoose.Schema({
    clientId: { type: String },
    clientSecret: { type: String },
    redirectUris: { type: Array }
})

export const OAuthUsersSchema = new mongoose.Schema({
    email: { type: String, default: '' },
    firstname: { type: String },
    lastname: { type: String },
    password: { type: String },
    username: { type: String }
})


