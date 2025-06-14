import { Controller, Get, Query } from '@nestjs/common';
import { AnalyticsService } from './analytics.service';

@Controller('analytics')
export class AnalyticsController {
  constructor(private readonly analyticsService: AnalyticsService) {}

  @Get('dashboard')
  getDashboardStats() {
    return this.analyticsService.getDashboardStats();
  }

  @Get('projects')
  getProjectStats(@Query('projectId') projectId?: string) {
    return this.analyticsService.getProjectStats(projectId);
  }

  @Get('time-entries')
  getAnalyticsTimeEntries(@Query() query: any) {
    return this.analyticsService.getTimeEntries(query);
  }
}
