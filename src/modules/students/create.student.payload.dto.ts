import { ApiProperty } from "@nestjs/swagger";

export class CreateStudentPayloadDto {
  @ApiProperty({example: 'John', description: 'The name of the student'})
  name: string;

  @ApiProperty({example: 9.99, description: 'The average mark of the student', maximum: 10, minimum: 1})
  average_mark: number;
}
