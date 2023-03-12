import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { StringFilter } from '../prisma/string-filter.input';
import { FloatFilter } from '../prisma/float-filter.input';
import { DateTimeFilter } from '../prisma/date-time-filter.input';

@InputType()
export class ServiceScalarWhereInput {

    @Field(() => [ServiceScalarWhereInput], {nullable:true})
    AND?: Array<ServiceScalarWhereInput>;

    @Field(() => [ServiceScalarWhereInput], {nullable:true})
    OR?: Array<ServiceScalarWhereInput>;

    @Field(() => [ServiceScalarWhereInput], {nullable:true})
    NOT?: Array<ServiceScalarWhereInput>;

    @Field(() => StringFilter, {nullable:true})
    id?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    errandId?: StringFilter;

    @Field(() => StringFilter, {nullable:true})
    clientId?: StringFilter;

    @Field(() => FloatFilter, {nullable:true})
    startLocation?: FloatFilter;

    @Field(() => FloatFilter, {nullable:true})
    endLocation?: FloatFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    startTime?: DateTimeFilter;

    @Field(() => DateTimeFilter, {nullable:true})
    endTime?: DateTimeFilter;
}
