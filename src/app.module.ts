import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BasketModule } from './basket/basket.module';
import { StripeModule } from './stripe/stripe.module';
import { UserModule } from './user/user.module';
import { CatalogueService } from './catalogue/catalogue.service';
import { CatalogueController } from './catalogue/catalogue.controller';
import { CatalogueModule } from './catalogue/catalogue.module';

@Module({
  imports: [BasketModule, StripeModule, UserModule, CatalogueModule],
  controllers: [AppController, CatalogueController],
  providers: [AppService, CatalogueService],
})
export class AppModule {}
