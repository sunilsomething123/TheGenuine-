/* eslint-disable */
import { type RouterFactory, type ProcBuilder, type BaseConfig, db } from ".";
import * as _Schema from '@zenstackhq/runtime/zod/input';
const $Schema: typeof _Schema = (_Schema as any).default ?? _Schema;
import { checkRead, checkMutate } from '../helper';
import type { Prisma } from '@prisma/client';
import type { UseTRPCMutationOptions, UseTRPCMutationResult, UseTRPCQueryOptions, UseTRPCQueryResult, UseTRPCInfiniteQueryOptions, UseTRPCInfiniteQueryResult } from '@trpc/react-query/shared';
import type { TRPCClientErrorLike } from '@trpc/client';
import type { AnyRouter } from '@trpc/server';

export default function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({

        createMany: procedure.input($Schema.QuoteInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).quote.createMany(input as any))),

        create: procedure.input($Schema.QuoteInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).quote.create(input as any))),

        deleteMany: procedure.input($Schema.QuoteInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).quote.deleteMany(input as any))),

        delete: procedure.input($Schema.QuoteInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).quote.delete(input as any))),

        findFirst: procedure.input($Schema.QuoteInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).quote.findFirst(input as any))),

        findMany: procedure.input($Schema.QuoteInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).quote.findMany(input as any))),

        findUnique: procedure.input($Schema.QuoteInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).quote.findUnique(input as any))),

        updateMany: procedure.input($Schema.QuoteInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).quote.updateMany(input as any))),

        update: procedure.input($Schema.QuoteInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).quote.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.QuoteCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.QuoteCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.QuoteCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.QuoteCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.QuoteCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.QuoteCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.QuoteGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.QuoteGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.QuoteCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.QuoteCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.QuoteGetPayload<T>, Context>) => Promise<Prisma.QuoteGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.QuoteDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.QuoteDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.QuoteDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.QuoteDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.QuoteDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.QuoteDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.QuoteGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.QuoteGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.QuoteDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.QuoteDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.QuoteGetPayload<T>, Context>) => Promise<Prisma.QuoteGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.QuoteFindFirstArgs, TData = Prisma.QuoteGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.QuoteFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.QuoteGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.QuoteFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.QuoteFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.QuoteGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.QuoteGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.QuoteFindManyArgs, TData = Array<Prisma.QuoteGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.QuoteFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.QuoteGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.QuoteFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.QuoteFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.QuoteGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.QuoteGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.QuoteFindUniqueArgs, TData = Prisma.QuoteGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.QuoteFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.QuoteGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.QuoteFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.QuoteFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.QuoteGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.QuoteGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.QuoteUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.QuoteUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.QuoteUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.QuoteUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.QuoteUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.QuoteUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.QuoteGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.QuoteGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.QuoteUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.QuoteUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.QuoteGetPayload<T>, Context>) => Promise<Prisma.QuoteGetPayload<T>>
            };

    };
}
