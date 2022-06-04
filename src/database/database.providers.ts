import * as mongoose from 'mongoose';
// npm install --save @nestjs/mongoose mongoose
export const databaseProviders = [
  {
    provide: 'DATABASE_CONNECTION',
    useFactory: async (): Promise<typeof mongoose> =>
      await mongoose.connect('mongodb://ims-api.icar.vn/auth'),
  },
];