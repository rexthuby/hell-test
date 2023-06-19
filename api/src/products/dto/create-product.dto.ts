import {
  IsInt,
  IsNotEmpty,
  IsString,
  Max,
  MaxLength,
  Min,
  MinLength,
} from 'class-validator';

export class CreateProductDto {
  @MaxLength(100)
  @MinLength(3)
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @Max(999999)
  @Min(0)
  @IsInt()
  price: number;
}
