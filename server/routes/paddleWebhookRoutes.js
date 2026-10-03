import express from "express";
import { Paddle, Environment } from "@paddle/paddle-node-sdk";
import { db } from "../utils/firebaseAdmin.js";

const router = express.Router();

const paddle = new Paddle(process.env.PADDLE_API_KEY, {
  environment: Environment.sandbox,
});

router.post(
  "/",
  express.raw({ type: "application/json" }),
  async (req, res) => {
    try {
      const signature = req.headers["paddle-signature"];

      if (!signature) {
        return res.status(400).json({
          success: false,
          error: "Missing Paddle signature.",
        });
      }

      const rawRequestBody = req.body.toString();

      const event = await paddle.webhooks.unmarshal(
        rawRequestBody,
        process.env.PADDLE_WEBHOOK_SECRET,
        signature
      );

      console.log("========== PADDLE WEBHOOK ==========");
      console.log("Event:", event.eventType);
      console.log("Event ID:", event.eventId);

      if (
        event.eventType === "subscription.created" ||
        event.eventType === "subscription.updated"
      ) {
        const subscription = event.data;

        const firebaseUid = subscription.customData?.firebaseUid;

        if (!firebaseUid) {
          console.error("No Firebase UID found in Paddle custom data.");

          return res.status(200).json({
            success: true,
            received: true,
            provisioned: false,
          });
        }

        const status = subscription.status;

        const hasProAccess =
          status === "trialing" || status === "active";

        const priceId =
          subscription.items?.[0]?.price?.id || null;

        await db.collection("users").doc(firebaseUid).set(
          {
            plan: hasProAccess ? "pro" : "free",
            subscriptionStatus: status,
            paddleSubscriptionId: subscription.id,
            paddlePriceId: priceId,
            paddleCustomerId: subscription.customerId || null,
            nextBilledAt: subscription.nextBilledAt || null,
           currentBillingPeriod: subscription.currentBillingPeriod
  ? {
      startsAt: subscription.currentBillingPeriod.startsAt || null,
      endsAt: subscription.currentBillingPeriod.endsAt || null,
    }
  : null,
            updatedAt: new Date().toISOString(),
          },
          { merge: true }
        );

        console.log("Firebase user updated:", firebaseUid);
        console.log("Plan:", hasProAccess ? "pro" : "free");
        console.log("Subscription status:", status);
      }

      return res.status(200).json({
        success: true,
        received: true,
      });
    } catch (error) {
      console.error("Paddle webhook verification/processing failed:", error);

      return res.status(400).json({
        success: false,
        error: "Invalid Paddle webhook.",
      });
    }
  }
);

export default router;