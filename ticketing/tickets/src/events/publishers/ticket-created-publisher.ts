import { Publisher, Subjects, TicketCreatedEvent } from '@tbdtickets/common';

export class TicketCreatedPublisher extends Publisher<TicketCreatedEvent> {
  readonly subject = Subjects.TicketCreated;
}
