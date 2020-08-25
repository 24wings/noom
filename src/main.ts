import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ExpressAdapter } from '@nestjs/platform-express';
import * as fs from 'fs';
import * as http from 'http';
import * as https from 'https';
import * as express from 'express';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join, resolve } from 'path';
import * as helmet from 'helmet';

// const httpsOptions = {
//   key: fs.readFileSync(resolve(__dirname, './assets/secrets/market.airuanjian.vip.key'), 'utf-8'),
//   cert: fs.readFileSync(resolve(__dirname, './assets/secrets/market.airuanjian.vip.pem'), 'utf-8'),
// };
async function bootstrap() {
  const server = express();
  const app = await NestFactory.create(AppModule, { logger: ["debug", "log", "verbose", "error"], cors: true });
  const port = 3000;

  // swagger
  const options = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('社区电商系统APi')
    .setDescription('社区电商系统描述')
    .setVersion('2.0')
    .addTag('admin')
    .setExternalDoc('', 'api/json')
    .build();
  const document = SwaggerModule.createDocument(app, options, {
    ignoreGlobalPrefix: true,
  });
  SwaggerModule.setup('api', app, document);
  await app.init();
  app.use(helmet());

  // cors
  app.enableCors();
  app.listen(3000, () => console.log('server start on port:' + port))
  // http.createServer(server).listen(3000, async () => {
  //   console.log(`Application is running on:3000`);
  // });
  // https.createServer(httpsOptions, server).listen(443, async () => {
  //   console.log(`Application is running on: 443`);
  // });

  // await app.listen(port).then(() => {
  //   console.log(`server is running on ${port}`);
  // });
}
bootstrap();
