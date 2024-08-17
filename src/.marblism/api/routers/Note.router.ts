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

        createMany: procedure.input($Schema.NoteInputSchema.createMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).note.createMany(input as any))),

        create: procedure.input($Schema.NoteInputSchema.create).mutation(async ({ ctx, input }) => checkMutate(db(ctx).note.create(input as any))),

        deleteMany: procedure.input($Schema.NoteInputSchema.deleteMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).note.deleteMany(input as any))),

        delete: procedure.input($Schema.NoteInputSchema.delete).mutation(async ({ ctx, input }) => checkMutate(db(ctx).note.delete(input as any))),

        findFirst: procedure.input($Schema.NoteInputSchema.findFirst).query(({ ctx, input }) => checkRead(db(ctx).note.findFirst(input as any))),

        findMany: procedure.input($Schema.NoteInputSchema.findMany).query(({ ctx, input }) => checkRead(db(ctx).note.findMany(input as any))),

        findUnique: procedure.input($Schema.NoteInputSchema.findUnique).query(({ ctx, input }) => checkRead(db(ctx).note.findUnique(input as any))),

        updateMany: procedure.input($Schema.NoteInputSchema.updateMany).mutation(async ({ ctx, input }) => checkMutate(db(ctx).note.updateMany(input as any))),

        update: procedure.input($Schema.NoteInputSchema.update).mutation(async ({ ctx, input }) => checkMutate(db(ctx).note.update(input as any))),

    }
    );
}

export interface ClientType<AppRouter extends AnyRouter, Context = AppRouter['_def']['_config']['$types']['ctx']> {
    createMany: {

        useMutation: <T extends Prisma.NoteCreateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.NoteCreateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.NoteCreateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.NoteCreateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    create: {

        useMutation: <T extends Prisma.NoteCreateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.NoteCreateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.NoteGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.NoteGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.NoteCreateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.NoteCreateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.NoteGetPayload<T>, Context>) => Promise<Prisma.NoteGetPayload<T>>
            };

    };
    deleteMany: {

        useMutation: <T extends Prisma.NoteDeleteManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.NoteDeleteManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.NoteDeleteManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.NoteDeleteManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    delete: {

        useMutation: <T extends Prisma.NoteDeleteArgs>(opts?: UseTRPCMutationOptions<
            Prisma.NoteDeleteArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.NoteGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.NoteGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.NoteDeleteArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.NoteDeleteArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.NoteGetPayload<T>, Context>) => Promise<Prisma.NoteGetPayload<T>>
            };

    };
    findFirst: {

        useQuery: <T extends Prisma.NoteFindFirstArgs, TData = Prisma.NoteGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.NoteFindFirstArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.NoteGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.NoteFindFirstArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.NoteFindFirstArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.NoteGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.NoteGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findMany: {

        useQuery: <T extends Prisma.NoteFindManyArgs, TData = Array<Prisma.NoteGetPayload<T>>>(
            input: Prisma.SelectSubset<T, Prisma.NoteFindManyArgs>,
            opts?: UseTRPCQueryOptions<string, T, Array<Prisma.NoteGetPayload<T>>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.NoteFindManyArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.NoteFindManyArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Array<Prisma.NoteGetPayload<T>>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Array<Prisma.NoteGetPayload<T>>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    findUnique: {

        useQuery: <T extends Prisma.NoteFindUniqueArgs, TData = Prisma.NoteGetPayload<T>>(
            input: Prisma.SelectSubset<T, Prisma.NoteFindUniqueArgs>,
            opts?: UseTRPCQueryOptions<string, T, Prisma.NoteGetPayload<T>, TData, Error>
        ) => UseTRPCQueryResult<
            TData,
            TRPCClientErrorLike<AppRouter>
        >;
        useInfiniteQuery: <T extends Prisma.NoteFindUniqueArgs>(
            input: Omit<Prisma.SelectSubset<T, Prisma.NoteFindUniqueArgs>, 'cursor'>,
            opts?: UseTRPCInfiniteQueryOptions<string, T, Prisma.NoteGetPayload<T>, Error>
        ) => UseTRPCInfiniteQueryResult<
            Prisma.NoteGetPayload<T>,
            TRPCClientErrorLike<AppRouter>
        >;

    };
    updateMany: {

        useMutation: <T extends Prisma.NoteUpdateManyArgs>(opts?: UseTRPCMutationOptions<
            Prisma.NoteUpdateManyArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.BatchPayload,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.BatchPayload, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.NoteUpdateManyArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.NoteUpdateManyArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.BatchPayload, Context>) => Promise<Prisma.BatchPayload>
            };

    };
    update: {

        useMutation: <T extends Prisma.NoteUpdateArgs>(opts?: UseTRPCMutationOptions<
            Prisma.NoteUpdateArgs,
            TRPCClientErrorLike<AppRouter>,
            Prisma.NoteGetPayload<T>,
            Context
        >,) =>
            Omit<UseTRPCMutationResult<Prisma.NoteGetPayload<T>, TRPCClientErrorLike<AppRouter>, Prisma.SelectSubset<T, Prisma.NoteUpdateArgs>, Context>, 'mutateAsync'> & {
                mutateAsync:
                <T extends Prisma.NoteUpdateArgs>(variables: T, opts?: UseTRPCMutationOptions<T, TRPCClientErrorLike<AppRouter>, Prisma.NoteGetPayload<T>, Context>) => Promise<Prisma.NoteGetPayload<T>>
            };

    };
}
