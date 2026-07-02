import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { INestApplication } from '@nestjs/common';

export function configureSwagger(app: INestApplication) {
  const config = new DocumentBuilder()
    .setTitle('UzChess Backend API')
    .setVersion('v1.0.0')
    .addBearerAuth()
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document, { swaggerOptions: { persistAuthorization: true } });
}