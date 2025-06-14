import { Injectable } from '@nestjs/common';

@Injectable()
export class ProjectService {
  getAll() {
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
  getTasks(id: string) {
    return [];
  }
}
