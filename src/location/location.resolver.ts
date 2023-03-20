import { Resolver, Query, Mutation, Args } from "@nestjs/graphql";
import { LocationService } from "./location.service";

@Resolver("Location")
export class LocationResolver {
  constructor(private readonly locationService: LocationService) {}

  @Mutation("createLocation")
  create(@Args("createLocationInput") createLocationInput: any) {
    return this.locationService.create(createLocationInput);
  }

  @Query("locations")
  findAll() {
    return this.locationService.findAll();
  }

  @Query("location")
  findOne(@Args("id") id: number) {
    return this.locationService.findOne(id);
  }

  @Mutation("updateLocation")
  update(@Args("updateLocationInput") updateLocationInput: any) {
    return this.locationService.update(updateLocationInput.id);
  }

  @Mutation("removeLocation")
  remove(@Args("id") id: number) {
    return this.locationService.remove(id);
  }
}
