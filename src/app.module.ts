import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BasketModule } from './basket/basket.module';
import { StripeModule } from './stripe/stripe.module';

@Module({
  imports: [BasketModule, StripeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
