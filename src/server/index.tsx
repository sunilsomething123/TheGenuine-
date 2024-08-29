import { createRouter } from '@/.marblism/api/routers'
import { SavedContentRouter } from '@/.marblism/api/routers/SavedContent.router'
import { Trpc } from '@/core/trpc/server'
import { AiRouter } from './routers/ai.router'
import { AuthenticationRouter } from './routers/authentication.router'
import { BillingRouter } from './routers/billing.router'
import { ConfigurationRouter } from './routers/configuration.router'
import { savedContentRouter } from './routers/savedContent.router'
import { UploadRouter } from './routers/upload.router'

export const appRouter = createRouter()
  .merge('savedContent.', savedContentRouter)
  // Merge other routers
  createRouter(Trpc.createRouter, Trpc.procedurePublic), // The generated tRPC router for all your models

  // the custom router, add your own routers here
  Trpc.createRouter({
    ai: AiRouter,
    authentication: AuthenticationRouter,
    billing: BillingRouter,
    configuration: ConfigurationRouter,
    upload: UploadRouter,
    savedContent: SavedContentRouter,
  }),
)

export type AppRouter = typeof appRouter

export const Server = {
  appRouter,
}
