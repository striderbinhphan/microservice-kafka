export const isProduction = process.env.NODE_ENV === 'PROD';
export const port = process.env.PORT ?? 8000;
export const productionPort = isProduction ? port : 8000;
export const serverName = process.env.SERVER_NAME ?? 'serverName';
export const serverVersion = process.env.SERVER_NAME_VERSION ?? 'serverVersion';
export const devTenant =
  process.env.DEV_TENANT_ID ?? '73e7859d-49e3-4a4f-bff7-9b03df1da0eb';
