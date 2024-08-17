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

        createMany: procedure.input($Schema.FollowInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).follow.createMany(input as any))),

        create: procedure.input($Schema.FollowInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).follow.create(input as any))),

        deleteMany: procedure.input($Schema.FollowInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).follow.deleteMany(input as any))),

        delete: procedure.input($Schema.FollowInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).follow.delete(input as any))),

        findFirst: procedure.input($Schema.FollowInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).follow.findFirst(input as any))),

        findMany: procedure.input($Schema.FollowInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).follow.findMany(input as any))),

        findUnique: procedure.input($Schema.FollowInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).follow.findUnique(input as any))),

        updateMany: procedure.input($Schema.FollowInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).follow.updateMany(input as any))),

        update: procedure.input($Schema.FollowInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).follow.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.FollowCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.FollowCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.FollowCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.FollowCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.FollowCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.FollowCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.FollowGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.FollowGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.FollowCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.FollowCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.FollowGetPayload<T>, Context>) => Promise<Prisma.FollowGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.FollowDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.FollowDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.FollowDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.FollowDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.FollowDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.FollowDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.FollowGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.FollowGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.FollowDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.FollowDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.FollowGetPayload<T>, Context>) => Promise<Prisma.FollowGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.FollowFindFirstArgs, TData = Prisma.FollowGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.FollowFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.FollowGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.FollowFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.FollowFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.FollowGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.FollowGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.FollowFindManyArgs, TData = Array<Prisma.FollowGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.FollowFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.FollowGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.FollowFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.FollowFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.FollowGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.FollowGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.FollowFindUniqueArgs, TData = Prisma.FollowGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.FollowFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.FollowGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.FollowFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.FollowFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.FollowGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.FollowGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.FollowUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.FollowUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.FollowUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.FollowUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.FollowUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.FollowUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.FollowGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.FollowGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.FollowUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.FollowUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.FollowGetPayload<T>, Context>) => Promise<Prisma.FollowGetPayload<T>>
            };

    };
}
