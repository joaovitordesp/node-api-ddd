import { Notification } from "../../enterprise/notification";

export interface NotificationsRepository {
  findById(notificationId: string): Promise<Notification | null>;
  create(notifications: Notification): Promise<void>;
  save(notificaion: Notification): Promise<void>;
}
