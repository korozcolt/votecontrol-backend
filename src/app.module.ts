import { AppConfigModule } from './config/app/config.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabasePostgresConfigModule } from './config/database/postgres/config.module';
import { HttpModule } from '@nestjs/axios';
import { Module } from '@nestjs/common';
import { SupervisorsModule } from './supervisors/supervisors.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    AppConfigModule,
    DatabasePostgresConfigModule,
    SupervisorsModule,
    HttpModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
