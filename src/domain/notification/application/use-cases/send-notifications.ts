import { Either, right } from "@/core/either";
import { NotificationsRepository } from "../repositories/notifications-repository";
import { UniqueEntityId } from "@/core/entities/unique-entity-id";
import { Notification } from "../../enterprise/notification";

interface SendNotificationuseCaseRequest {
  recipientId: string;
  title: string;
  content: string;
}

type SendNotificationuseCaseResponse = Either<
  null,
  { notification: Notification }
>;

export class SendNotificationUseCase {
  constructor(private notificationRepository: NotificationsRepository) {}

  async execute({
    recipientId,
    title,
    content,
  }: SendNotificationuseCaseRequest): Promise<SendNotificationuseCaseResponse> {
    const notification = Notification.create({
      recipientId: new UniqueEntityId(recipientId),
      title,
      content,
    });

    await this.notificationRepository.create(notification);

    return right({
      notification,
    });
  }
}
