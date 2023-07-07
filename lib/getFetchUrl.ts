export const getFetchUrl = (route: string) =>
  `${`https://${process.env.VERCEL_URL!}`}/${route}`;
