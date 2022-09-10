const isNestComponent = (object: any): boolean => {
  if (object.provide) return true;
  return Reflect.getMetadataKeys(object).length > 0;
};

const isTypeORMEntity = (ob: any) => ob.prototype?.constructor;

export const scanComponents = (object: any): any[] => Object.values(object).filter(isNestComponent);

export const scanEntities = (object: any): any[] => Object.values(object).filter(isTypeORMEntity);
