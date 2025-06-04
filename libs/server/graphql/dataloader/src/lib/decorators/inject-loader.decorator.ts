import { createParamDecorator } from '@nestjs/common';

export const InjectLoader = createParamDecorator((data: string, ctx) => {
  const [request] = ctx.getArgs();
  const loader = request?.loaders?.[data];
  if (!loader) {
    throw new Error(`Loader with name "${data}" not found`);
  }
  return loader;
});
