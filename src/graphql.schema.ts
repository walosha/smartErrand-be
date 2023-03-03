
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class OrderByParams {
    field?: Nullable<string>;
    direction?: Nullable<string>;
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
    abstract users(): Nullable<User>[] | Promise<Nullable<User>[]>;

    abstract user(id: string): Nullable<User> | Promise<Nullable<User>>;
}

export abstract class IMutation {
    abstract createUser(createUserInput: CreateUserInput): User | Promise<User>;

    abstract updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;

    abstract removeUser(id: string): Nullable<User> | Promise<Nullable<User>>;
}

type Nullable<T> = T | null;
