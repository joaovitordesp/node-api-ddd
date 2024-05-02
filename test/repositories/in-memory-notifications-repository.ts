import { Notification } from "@/domain/notification/enterprise/notification";
import { NotificationsRepository } from "./../../src/domain/notification/application/repositories/notifications-repository";

export class InMemoryNotificationRepository implements NotificationsRepository {
  public items: Notification[] = [];

  async create(notification: Notification) {
    this.items.push(notification);
  }
}
