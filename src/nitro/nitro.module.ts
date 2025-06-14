import { Module } from '@nestjs/common';
import { NitroService } from './nitro.service';

@Module({
  providers: [NitroService]
})
export class NitroModule {}
