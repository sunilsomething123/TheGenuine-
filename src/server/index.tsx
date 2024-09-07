import { createRouter } from '@/.marblism/api/routers';
import { AiRouter } from './routers/ai.router';
import { AuthenticationRouter } from './routers/authentication.router';
import { BillingRouter } from './routers/billing.router';
import { ConfigurationRouter } from './routers/configuration.router';
import { savedContentRouter } from './routers/savedContent.router';
import { UploadRouter } from './routers/upload.router';

// Create and merge all your routers
export const appRouter = createRouter()
  .merge('savedContent.', savedContentRouter) // merge custom routers
    .merge('ai.', AiRouter)
      .merge('authentication.', AuthenticationRouter)
        .merge('billing.', BillingRouter)
          .merge('configuration.', ConfigurationRouter)
            .merge('upload.', UploadRouter); // Continue merging as needed

            // Exporting appRouter type
            export type AppRouter = typeof appRouter;

            // Exporting server with the appRouter
            export const Server = {
              appRouter,
              };