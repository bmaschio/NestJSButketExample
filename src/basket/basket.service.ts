import { Injectable } from '@nestjs/common';

@Injectable()
export class BasketService {
  async updateBasket() {
    return { message: 'Basket updated' };
  }
}
