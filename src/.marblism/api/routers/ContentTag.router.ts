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

        createMany: procedure.input($Schema.ContentTagInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).contentTag.createMany(input as any))),

        create: procedure.input($Schema.ContentTagInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).contentTag.create(input as any))),

        deleteMany: procedure.input($Schema.ContentTagInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).contentTag.deleteMany(input as any))),

        delete: procedure.input($Schema.ContentTagInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).contentTag.delete(input as any))),

        findFirst: procedure.input($Schema.ContentTagInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).contentTag.findFirst(input as any))),

        findMany: procedure.input($Schema.ContentTagInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).contentTag.findMany(input as any))),

        findUnique: procedure.input($Schema.ContentTagInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).contentTag.findUnique(input as any))),

        updateMany: procedure.input($Schema.ContentTagInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).contentTag.updateMany(input as any))),

        update: procedure.input($Schema.ContentTagInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).contentTag.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.ContentTagCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ContentTagCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ContentTagCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ContentTagCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.ContentTagCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ContentTagCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ContentTagGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ContentTagGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ContentTagCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ContentTagCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ContentTagGetPayload<T>, Context>) => Promise<Prisma.ContentTagGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.ContentTagDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ContentTagDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ContentTagDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ContentTagDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.ContentTagDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ContentTagDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ContentTagGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ContentTagGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ContentTagDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ContentTagDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ContentTagGetPayload<T>, Context>) => Promise<Prisma.ContentTagGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.ContentTagFindFirstArgs, TData = Prisma.ContentTagGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ContentTagFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ContentTagGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ContentTagFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ContentTagFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ContentTagGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ContentTagGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.ContentTagFindManyArgs, TData = Array<Prisma.ContentTagGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.ContentTagFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.ContentTagGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ContentTagFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ContentTagFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.ContentTagGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.ContentTagGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.ContentTagFindUniqueArgs, TData = Prisma.ContentTagGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.ContentTagFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.ContentTagGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.ContentTagFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.ContentTagFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.ContentTagGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.ContentTagGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.ContentTagUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ContentTagUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ContentTagUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ContentTagUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.ContentTagUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.ContentTagUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.ContentTagGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.ContentTagGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.ContentTagUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.ContentTagUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.ContentTagGetPayload<T>, Context>) => Promise<Prisma.ContentTagGetPayload<T>>
            };

    };
}
