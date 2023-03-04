
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export enum QueryMode {
    Default = "Default",
    Insensitive = "Insensitive"
}

export enum SortOrder {
    Asc = "Asc",
    Desc = "Desc"
}

export class StringFilter {
    equals?: Nullable<string>;
    in?: Nullable<string[]>;
    notIn?: Nullable<string[]>;
    lt?: Nullable<string>;
    lte?: Nullable<string>;
    gt?: Nullable<string>;
    gte?: Nullable<string>;
    contains?: Nullable<string>;
    startsWith?: Nullable<string>;
    endsWith?: Nullable<string>;
    mode?: Nullable<QueryMode>;
    not?: Nullable<string>;
}

export class StringNullableFilter {
    equals?: Nullable<string>;
    in?: Nullable<string[]>;
    notIn?: Nullable<string[]>;
    lt?: Nullable<string>;
    lte?: Nullable<string>;
    gt?: Nullable<string>;
    gte?: Nullable<string>;
    contains?: Nullable<string>;
    startsWith?: Nullable<string>;
    endsWith?: Nullable<string>;
    mode?: Nullable<QueryMode>;
    not?: Nullable<string>;
}

export class UserWhereUniqueInput {
    id: string;
}

export class DateTimeNullableFilter {
    equals?: Nullable<DateTime>;
    in?: Nullable<DateTime[]>;
    notIn?: Nullable<DateTime[]>;
    lt?: Nullable<DateTime>;
    lte?: Nullable<DateTime>;
    gt?: Nullable<DateTime>;
    gte?: Nullable<DateTime>;
    not?: Nullable<DateTime>;
}

export class UserWhereInput {
    id?: Nullable<StringFilter>;
    email?: Nullable<string>;
    phone?: Nullable<string>;
    firstname?: Nullable<string>;
    lastname?: Nullable<string>;
    from?: Nullable<StringNullableFilter>;
    to?: Nullable<StringNullableFilter>;
    createdAt?: Nullable<DateTimeNullableFilter>;
    updatedAt?: Nullable<DateTimeNullableFilter>;
}

export class UserOrderByInput {
    id?: Nullable<SortOrder>;
    firstname?: Nullable<SortOrder>;
    lastname?: Nullable<SortOrder>;
    email?: Nullable<SortOrder>;
    phone?: Nullable<SortOrder>;
    from?: Nullable<SortOrder>;
    to?: Nullable<SortOrder>;
    createdAt?: Nullable<SortOrder>;
    updatedAt?: Nullable<SortOrder>;
}

export class CreateUserInput {
    email?: Nullable<string>;
    phone?: Nullable<string>;
    firstname?: Nullable<string>;
    lastname?: Nullable<string>;
    password?: Nullable<string>;
    referralCode?: Nullable<string>;
}

export class UpdateUserInput {
    firstname?: Nullable<string>;
    lastname?: Nullable<string>;
    phone?: Nullable<string>;
}

export class User {
    id?: Nullable<string>;
    firstname?: Nullable<string>;
    lastname?: Nullable<string>;
    email?: Nullable<string>;
    phone?: Nullable<string>;
    referralCode?: Nullable<string>;
}

export abstract class IQuery {
    abstract users(where?: Nullable<UserWhereInput>, orderBy?: Nullable<UserOrderByInput[]>, skip?: Nullable<number>, take?: Nullable<number>): User[] | Promise<User[]>;

    abstract user(where?: Nullable<UserWhereUniqueInput>): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(where: UserWhereUniqueInput, data: UpdateUserInput): User | Promise<User>;

    abstract removeUser(where: UserWhereUniqueInput): Nullable<User> | Promise<Nullable<User>>;
}

export type DateTime = any;
type Nullable<T> = T | null;
