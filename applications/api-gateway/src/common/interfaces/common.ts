import * as express from 'express';

export interface CustomHttpRequest extends express.Request {
  tenantId: string;
  userUuis: string;
  username: string;
  role: string;
}
