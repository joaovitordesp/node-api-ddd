import { Notification } from "../../enterprise/notification";

export interface NotificationsRepository {
  create(notifications: Notification): Promise<void>;
}
