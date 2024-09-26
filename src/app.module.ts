import { Module } from '@nestjs/common';
import { StudentsModule } from "./modules/students/students.module";

@Module({
  imports: [StudentsModule]
})
export class AppModule {}
