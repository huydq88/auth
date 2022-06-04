import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
// import OAuth2Server from 'oauth2-server';
import { OAuthTokens, OAuthClients, OAuthUsers } from './interfaces/app.interface';

@Injectable()
export class AppService {
  constructor(
    @Inject('OAUTHTOKEN_MODEL')
    private readonly OAuthTokensModel: Model<OAuthTokens>,
    @Inject('OAUTHCLIENT_MODEL')
    private readonly OAuthClientsModel: Model<OAuthClients>,
    @Inject('OAUTHUSER_MODEL')
    private readonly OAuthUsersModel: Model<OAuthUsers>,

  ) {
    const OAuth2Server = require('oauth2-server');
    let oauth = new OAuth2Server({model: 'OAUTHTOKEN_MODEL'});
    
    console.log( oauth)
  }
  async getAccessToken(bearerToken:string) {
    // Adding `.lean()`, as we get a mongoose wrapper object back from `findOne(...)`, and oauth2-server complains.
    return this.OAuthTokensModel.findOne({ accessToken: bearerToken }).lean();
  };
  
  /**
   * Get client.
   */
  
 async getClient(clientId:string, clientSecret:string) {
    return this.OAuthClientsModel.findOne({ clientId: clientId, clientSecret: clientSecret }).lean();
  };
  
  /**
   * Get refresh token.
   */
  
 async getRefreshToken(refreshToken:string) {
    return this.OAuthTokensModel.findOne({ refreshToken: refreshToken }).lean();
  };
  
  /**
   * Get user.
   */
  
 async getUser(username:string, password:string) {
    return this.OAuthUsersModel.findOne({ username: username, password: password }).lean();
  };
  
  /**
   * Save token.
   */
  
 async saveToken(token:any, client:any, user:any) {
    var accessToken= this.OAuthTokensModel.create({
      accessToken: token.accessToken,
      accessTokenExpiresOn: token.accessTokenExpiresOn,
      client : client,
      clientId: client.clientId,
      refreshToken: token.refreshToken,
      refreshTokenExpiresOn: token.refreshTokenExpiresOn,
      user : user,
      userId: user._id,
    });
    // Can't just chain `lean()` to `save()` as we did with `findOne()` elsewhere. Instead we use `Promise` to resolve the data.
    return new Promise( async function(resolve,reject){
      (await accessToken).save(function(err,data){
        if( err ) reject( err );
        else resolve( data );
      }) ;
    }).then(function(saveResult:any){
      // `saveResult` is mongoose wrapper object, not doc itself. Calling `toJSON()` returns the doc.
      saveResult = saveResult && typeof saveResult == 'object' ? JSON.stringify(saveResult) : saveResult;
      
      // Unsure what else points to `saveResult` in oauth2-server, making copy to be safe
      var data = Object.assign({});
      for( var prop in saveResult ) data[prop] = saveResult[prop];
      
      // /oauth-server/lib/models/token-model.js complains if missing `client` and `user`. Creating missing properties.
      data.client = data.clientId;
      data.user = data.userId;
  
      return this.data;
    });
  };
}
