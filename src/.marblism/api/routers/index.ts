/* eslint-disable */
import type { unsetMarker, AnyRouter, AnyRootConfig, CreateRouterInner, Procedure, ProcedureBuilder, ProcedureParams, ProcedureRouterRecord, ProcedureType } from "@trpc/server";
import type { PrismaClient } from "@prisma/client";
import createAccountRouter from "./Account.router";
import createUserRouter from "./User.router";
import createSessionRouter from "./Session.router";
import createRoleRouter from "./Role.router";
import createQuoteRouter from "./Quote.router";
import createContentTagRouter from "./ContentTag.router";
import createTagRouter from "./Tag.router";
import createSavedContentRouter from "./SavedContent.router";
import createImageRouter from "./Image.router";
import createVideoRouter from "./Video.router";
import createFollowRouter from "./Follow.router";
import createNoteRouter from "./Note.router";
import { ClientType as AccountClientType } from "./Account.router";
import { ClientType as UserClientType } from "./User.router";
import { ClientType as SessionClientType } from "./Session.router";
import { ClientType as RoleClientType } from "./Role.router";
import { ClientType as QuoteClientType } from "./Quote.router";
import { ClientType as ContentTagClientType } from "./ContentTag.router";
import { ClientType as TagClientType } from "./Tag.router";
import { ClientType as SavedContentClientType } from "./SavedContent.router";
import { ClientType as ImageClientType } from "./Image.router";
import { ClientType as VideoClientType } from "./Video.router";
import { ClientType as FollowClientType } from "./Follow.router";
import { ClientType as NoteClientType } from "./Note.router";

export type BaseConfig = AnyRootConfig;

export type RouterFactory<Config extends BaseConfig> = <
    ProcRouterRecord extends ProcedureRouterRecord
>(
    procedures: ProcRouterRecord
) => CreateRouterInner<Config, ProcRouterRecord>;

export type UnsetMarker = typeof unsetMarker;

export type ProcBuilder<Config extends BaseConfig> = ProcedureBuilder<
    ProcedureParams<Config, any, any, any, UnsetMarker, UnsetMarker, any>
>;

export function db(ctx: any) {
    if (!ctx.prisma) {
        throw new Error('Missing "prisma" field in trpc context');
    }
    return ctx.prisma as PrismaClient;
}

export function createRouter<Config extends BaseConfig>(router: RouterFactory<Config>, procedure: ProcBuilder<Config>) {
    return router({
        account: createAccountRouter(router, procedure),
        user: createUserRouter(router, procedure),
        session: createSessionRouter(router, procedure),
        role: createRoleRouter(router, procedure),
        quote: createQuoteRouter(router, procedure),
        contentTag: createContentTagRouter(router, procedure),
        tag: createTagRouter(router, procedure),
        savedContent: createSavedContentRouter(router, procedure),
        image: createImageRouter(router, procedure),
        video: createVideoRouter(router, procedure),
        follow: createFollowRouter(router, procedure),
        note: createNoteRouter(router, procedure),
    }
    );
}

export interface ClientType<AppRouter extends AnyRouter> {
    account: AccountClientType<AppRouter>;
    user: UserClientType<AppRouter>;
    session: SessionClientType<AppRouter>;
    role: RoleClientType<AppRouter>;
    quote: QuoteClientType<AppRouter>;
    contentTag: ContentTagClientType<AppRouter>;
    tag: TagClientType<AppRouter>;
    savedContent: SavedContentClientType<AppRouter>;
    image: ImageClientType<AppRouter>;
    video: VideoClientType<AppRouter>;
    follow: FollowClientType<AppRouter>;
    note: NoteClientType<AppRouter>;
}
