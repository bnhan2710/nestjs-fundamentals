import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SongsModule } from './songs/songs.module';
import { LoggerMiddleware } from './common/middleware/logger/logger.middleware';
import { SongsController } from './songs/songs.controller';


@Module({
  imports: [SongsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule{
    configure(consumer: MiddlewareConsumer) {
      //Option no 1
      // consumer.apply(LoggerMiddleware).forRoutes('songs');
      //Option no 2
      // consumer.apply(LoggerMiddleware)
      // .forRoutes({path:'songs', method: RequestMethod.POST})
      //Option no 3
      consumer.apply(LoggerMiddleware).forRoutes(SongsController)
    }
}
