export const handlerPath = (context: string, handler: string) => {
  return `${context.split(process.cwd())[1].substring(1).replace(/\\/g, '/')}/${handler}`;
};
