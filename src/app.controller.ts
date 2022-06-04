import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  async getHello() {
    let a =  await this.appService.getAccessToken("eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6IjA5MzYzNTMwNjAiLCJhcHBJZCI6ImRzYWRhc2QiLCJyZWZyZXNoVG9rZW4iOiJleUowZVhBaU9pSktWMVFpTENKaGJHY2lPaUpJVXpJMU5pSjkuZXlKcGMzTWlPaUpvZEhSd2N6cGNMMXd2YVdOaGNtMHRZWEJwTG1sallYSXVkbTVjTDJGd2FWd3ZkakpjTDJGd2NGd3ZZM1Z6ZEc5dFpYSmNMMnh2WjJsdUlpd2lhV0YwSWpveE5qVTBNVFl4TnpZNUxDSmxlSEFpT2pFMk56QXlNekl4Tmprc0ltNWlaaUk2TVRZMU5ERTJNVGMyT1N3aWFuUnBJam9pVWpjM1V6UkdjME50VlU5QlVtNXVhQ0lzSW5OMVlpSTZNeXdpY0hKMklqb2lPRGRsTUdGbU1XVm1PV1prTVRVNE1USm1aR1ZqT1RjeE5UTmhNVFJsTUdJd05EYzFORFpoWVNKOS5YbTlPQTBTTTJRNjhhMU9SNkM0aW9MUmNvNUdYNmNhXzNRYnpRUkx3SGVVIiwidXNlcklkIjoiNjI5MDU3OGM3NGE2NjNhODMwZTJhMmNiIiwiaWF0IjoxNjU0MTYxNzY3LCJleHAiOjE2NTQ3NjY1Njd9.fTK_FroLOQg5MBG9iUN-wL-gVg3JjtUeV6s63fxwz6w");
  
    console.log(a)
  }
}
