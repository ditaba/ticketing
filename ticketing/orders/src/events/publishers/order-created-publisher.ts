import { Publisher, OrderCreatedEvent, Subjects } from '@tbdtickets/common';

export class OrderCreatedPublisher extends Publisher<OrderCreatedEvent> {
  subject: Subjects.OrderCreated = Subjects.OrderCreated;
}
