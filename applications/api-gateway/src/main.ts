import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { productionPort, serverName, serverVersion } from './common/contants/server';

const logger: Logger = new Logger(`${serverName}@${serverVersion}`);
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(productionPort, () => {
    logger.log(`app running at http://localhost:${productionPort}`);
  });
}
bootstrap().catch((error) => {
  logger.log(error);
  process.exit(1);
});
