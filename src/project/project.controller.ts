import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Body,
} from '@nestjs/common';
import { ProjectService } from './project.service';

@Controller('projects')
export class ProjectController {
  constructor(private readonly projectsService: ProjectService) {}

  @Get()
  getAllProjects() {
    return this.projectsService.getAll();
  }

  @Post()
  createProject(@Body() dto: any) {
    return this.projectsService.create(dto);
  }

  @Get(':id')
  getProjectById(@Param('id') id: string) {
    return this.projectsService.getById(id);
  }

  @Put(':id')
  updateProject(@Param('id') id: string, @Body() dto: any) {
    return this.projectsService.update(id, dto);
  }

  @Delete(':id')
  deleteProject(@Param('id') id: string) {
    return this.projectsService.delete(id);
  }

  @Get(':id/tasks')
  getTasksForProject(@Param('id') id: string) {
    return this.projectsService.getTasks(id);
  }
}
