import { initializePaddle } from "@paddle/paddle-js";

let paddlePromise;

export function getPaddle() {
  console.log(
    "Paddle token loaded:",
    Boolean(import.meta.env.VITE_PADDLE_CLIENT_TOKEN)
  );

  if (!paddlePromise) {
    paddlePromise = initializePaddle({
      token: import.meta.env.VITE_PADDLE_CLIENT_TOKEN,
      environment: "sandbox",
    });
  }

  return paddlePromise;
}