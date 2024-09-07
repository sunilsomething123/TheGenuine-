import { createRouter } from '@/core/trpc/server';
import { AiRouter } from './routers/ai.router';
import { AuthenticationRouter } from './routers/authentication.router';
import { BillingRouter } from './routers/billing.router';
import { ConfigurationRouter } from './routers/configuration.router';
import { UploadRouter } from './routers/upload.router';

export const appRouter = createRouter()
  .merge('ai.', AiRouter)
    .merge('authentication.', AuthenticationRouter)
      .merge('billing.', BillingRouter)
        .merge('configuration.', ConfigurationRouter)
          .merge('upload.', UploadRouter);

          export type AppRouter = typeof appRouter;