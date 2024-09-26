import { ApiProperty } from "@nestjs/swagger";


export class CreateStudentResponseDto{
  @ApiProperty({example: '1', description: 'The id of the student'})
  id: string;

  @ApiProperty({example: 'John', description: 'The name of the student'})
  name: string;

  @ApiProperty({example: 9.99, description: 'The average mark of the student', maximum: 10, minimum: 1})
  average_mark: number;

  @ApiProperty({example: '2021-06-01T00:00:00.000Z', description: 'The date when the student was created'})
  created_at: Date;

  @ApiProperty({example: '2021-06-01T00:00:00.000Z', description: 'The date when the student was last updated'})
  updated_at: Date;
}
