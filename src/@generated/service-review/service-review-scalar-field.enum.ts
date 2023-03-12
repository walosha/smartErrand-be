import { registerEnumType } from '@nestjs/graphql';

export enum ServiceReviewScalarFieldEnum {
    id = "id",
    User = "User",
    serviceId = "serviceId",
    comments = "comments",
    Rating = "Rating",
    Photos = "Photos"
}


registerEnumType(ServiceReviewScalarFieldEnum, { name: 'ServiceReviewScalarFieldEnum', description: undefined })
