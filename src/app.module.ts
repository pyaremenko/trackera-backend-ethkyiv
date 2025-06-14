import { Module } from '@nestjs/common';
import { NitroModule } from './nitro/nitro.module';
import { TasksModule } from './tasks/tasks.module';
import { AnalyticsModule } from './analytics/analytics.module';
import { ProjectsModule } from './project/project.module';

@Module({
  imports: [NitroModule, ProjectsModule, TasksModule, AnalyticsModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
