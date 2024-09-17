import { MiddlewareConsumer, Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { DbModule } from './db/db.module';
import { getConfig } from './services/app-config/configuration';
import { AppCacheModule } from './app-cache/app-cache.module';
import { LoggerModule } from './logger/logger.module';
import { AsyncStorageMiddleware } from './global/middleware/async-storage/async-storage.middleware';
import { GlobalModule } from './global/global.module';
import { HealthModule } from './health/health.module';
import { ContestModule } from './contest/contest.module';
import { WorkoutModule } from './workout/workout.module';
import { PartWorkoutModule } from './part_workout/part_workout.module';
import { CategoryModule } from './category/category.module';
import { ExerciseModule } from './exercise/exercise.module';
import { TeamModule } from './team/team.module';
import { TeamUserModule } from './team_user/team_user.module';
@Module({
  imports: [
    GlobalModule,
    ConfigModule.forRoot({
      cache: true,
      load: [getConfig],
    }),
    DbModule,
    AppCacheModule,
    UserModule,
    ConfigModule,
    LoggerModule,
    HealthModule,
    PartWorkoutModule,
    CategoryModule,
    ExerciseModule,
    WorkoutModule,
    ContestModule,
    TeamModule,
    TeamUserModule,
  ],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(AsyncStorageMiddleware).forRoutes('*');
  }
}
