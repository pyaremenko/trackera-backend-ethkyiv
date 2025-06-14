import { Injectable } from '@nestjs/common';

@Injectable()
export class AnalyticsService {
  getDashboardStats() {
    return {};
  }
  getProjectStats(projectId?: string) {
    return [];
  }
  getTimeEntries(query: any) {
    return [];
  }
}
