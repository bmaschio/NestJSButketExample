import { Body, Controller, Post, Put } from '@nestjs/common';
import { BasketService } from './basket.service';
import { AddBasketRequest, AddBasketResponse } from './dto/basket.dto';

@Controller('api/v1/basket')
export class BasketController {
  constructor(private readonly basketService: BasketService) {}

  @Put('update')
  async addToBasket(
    @Body() request: AddBasketRequest,
  ): Promise<AddBasketResponse> {
    return this.basketService.updateBasket();
  }
}
