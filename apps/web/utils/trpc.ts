import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import type { AppRouter } from '@shared/router';

const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: '/api/trpc',
    }),
  ],
});

export default trpc;
