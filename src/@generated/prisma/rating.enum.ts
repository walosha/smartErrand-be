import { registerEnumType } from '@nestjs/graphql';

export enum RATING {
    ZERO = "ZERO",
    ONE = "ONE",
    TWO = "TWO",
    THREE = "THREE",
    FOUR = "FOUR",
    FIVE = "FIVE"
}


registerEnumType(RATING, { name: 'RATING', description: undefined })
