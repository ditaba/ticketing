import { Publisher, Subjects, TicketUpdatedEvent } from '@tbdtickets/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
