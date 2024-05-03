import { UniqueEntityId } from "../entities/unique-entity-id";

export interface DomainEvent {
  // publisher
  ocurredAt: Date;
  getAggregateId(): UniqueEntityId;
}
