import { Mongoose } from 'mongoose';
import { OAuthClientsSchema, OAuthTokensSchema, OAuthUsersSchema } from './schemas/app.schema';

export const appProviders = [
  {
    provide: 'OAUTHTOKEN_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('OAuthToken', OAuthTokensSchema),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'OAUTHCLIENT_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('OAuthClient', OAuthClientsSchema),
    inject: ['DATABASE_CONNECTION'],
  },
  {
    provide: 'OAUTHUSER_MODEL',
    useFactory: (mongoose: Mongoose) => mongoose.model('OAuthUser', OAuthUsersSchema),
    inject: ['DATABASE_CONNECTION'],
  },

];

