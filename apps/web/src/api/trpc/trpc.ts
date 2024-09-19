import { appRouter } from '@shared/router';
import * as trpcNext from '@trpc/server/adapters/next';
export default trpcNext.createNextApiHandler({
  router: appRouter,
  createContext: () => ({}), // Retourne un objet vide
});
