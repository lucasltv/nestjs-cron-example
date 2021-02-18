import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

@Injectable()
export class CronService {
  //   @Cron('0 */30 6-23 * * *') // EVERY 30 MINUTES BETWEEN 6AM AND 11PM
  @Cron(CronExpression.EVERY_SECOND)
  runEvery10Seconds() {
    console.log('Every 1 second');
  }
}
