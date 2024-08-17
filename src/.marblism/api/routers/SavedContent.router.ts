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

        createMany: procedure.input($Schema.SavedContentInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).savedContent.createMany(input as any))),

        create: procedure.input($Schema.SavedContentInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).savedContent.create(input as any))),

        deleteMany: procedure.input($Schema.SavedContentInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).savedContent.deleteMany(input as any))),

        delete: procedure.input($Schema.SavedContentInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).savedContent.delete(input as any))),

        findFirst: procedure.input($Schema.SavedContentInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).savedContent.findFirst(input as any))),

        findMany: procedure.input($Schema.SavedContentInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).savedContent.findMany(input as any))),

        findUnique: procedure.input($Schema.SavedContentInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).savedContent.findUnique(input as any))),

        updateMany: procedure.input($Schema.SavedContentInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).savedContent.updateMany(input as any))),

        update: procedure.input($Schema.SavedContentInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).savedContent.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.SavedContentCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SavedContentCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SavedContentCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SavedContentCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.SavedContentCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SavedContentCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SavedContentGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SavedContentGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SavedContentCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SavedContentCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SavedContentGetPayload<T>, Context>) => Promise<Prisma.SavedContentGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.SavedContentDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SavedContentDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SavedContentDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SavedContentDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.SavedContentDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SavedContentDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SavedContentGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SavedContentGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SavedContentDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SavedContentDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SavedContentGetPayload<T>, Context>) => Promise<Prisma.SavedContentGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.SavedContentFindFirstArgs, TData = Prisma.SavedContentGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.SavedContentFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.SavedContentGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SavedContentFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SavedContentFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.SavedContentGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.SavedContentGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.SavedContentFindManyArgs, TData = Array<Prisma.SavedContentGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.SavedContentFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.SavedContentGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SavedContentFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SavedContentFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.SavedContentGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.SavedContentGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.SavedContentFindUniqueArgs, TData = Prisma.SavedContentGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.SavedContentFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.SavedContentGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.SavedContentFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.SavedContentFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.SavedContentGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.SavedContentGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.SavedContentUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SavedContentUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SavedContentUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SavedContentUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.SavedContentUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.SavedContentUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.SavedContentGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.SavedContentGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.SavedContentUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.SavedContentUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.SavedContentGetPayload<T>, Context>) => Promise<Prisma.SavedContentGetPayload<T>>
            };

    };
}
