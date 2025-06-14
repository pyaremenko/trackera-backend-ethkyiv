import { Injectable } from '@nestjs/common';

@Injectable()
export class TasksService {
  getAll(projectId?: string) {
    return [];
  }
  create(dto: any) {
    return dto;
  }
  getById(id: string) {
    return { id };
  }
  update(id: string, dto: any) {
    return { id, ...dto };
  }
  delete(id: string) {
    return { success: true };
  }
  addTimeEntry(taskId: string, dto: any) {
    return { taskId, ...dto };
  }
  getTimeEntries(taskId: string) {
    return [];
  }
}
