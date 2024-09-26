import { Type } from 'class-transformer';
import { IsOptional, IsUUID, ValidateNested } from 'class-validator';
import e from 'express';

export class BasketElement {
  @IsUUID()
  productId: string;
  @IsOptional()
  quantity?: number;
}

export class AddBasketRequest {
  @ValidateNested({ each: true })
  @Type(() => BasketElement)
  elements: BasketElement[];
}

export class AddBasketResponse {
  success: boolean;
  elements: BasketElement[];
}

export class GetBasketResponse {
  elements: BasketElement[];
}
