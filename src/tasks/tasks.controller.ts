import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Param,
  Query,
  Body,
} from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Get()
  getAllTasks(@Query('projectId') projectId?: string) {
    return this.tasksService.getAll(projectId);
  }

  @Post()
  createTask(@Body() dto: any) {
    return this.tasksService.create(dto);
  }

  @Get(':id')
  getTaskById(@Param('id') id: string) {
    return this.tasksService.getById(id);
  }

  @Put(':id')
  updateTask(@Param('id') id: string, @Body() dto: any) {
    return this.tasksService.update(id, dto);
  }

  @Delete(':id')
  deleteTask(@Param('id') id: string) {
    return this.tasksService.delete(id);
  }

  @Post(':taskId/time-entries')
  addTimeEntry(@Param('taskId') taskId: string, @Body() dto: any) {
    return this.tasksService.addTimeEntry(taskId, dto);
  }

  @Get(':taskId/time-entries')
  getTimeEntries(@Param('taskId') taskId: string) {
    return this.tasksService.getTimeEntries(taskId);
  }
}
