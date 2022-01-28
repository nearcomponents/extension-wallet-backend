import * as dynamoose from "dynamoose";

const NOTIFICATIONS_TABLE = `${process.env.NOTIFICATIONS_TABLE}`;

export const NOTIFICATION_TYPES = {
  OfferSent: "OfferSent",
  OfferCounterOffered: "OfferCounterOffered",
  OfferRejected: "OfferRejected",
  OfferRevoked: "OfferRevoked",
  OfferAccepted: "OfferAccepted",
};

export const NotificationSchema = new dynamoose.Schema(
  {
    id: String,
    sender_user_id: String,
    recipient_user_id: String,
    type: {
      type: String,
      enum: [
        NOTIFICATION_TYPES.OfferSent,
        NOTIFICATION_TYPES.OfferCounterOffered,
        NOTIFICATION_TYPES.OfferRejected,
        NOTIFICATION_TYPES.OfferRevoked,
        NOTIFICATION_TYPES.OfferAccepted,
      ],
    },
    read: Boolean,
    data: Object,
  },
  {
    timestamps: true,
    saveUnknown: ["data.**"],
  }
);

const NotificationModel = dynamoose.model(NOTIFICATIONS_TABLE, NotificationSchema, {
  create: false,
});

export default NotificationModel;
