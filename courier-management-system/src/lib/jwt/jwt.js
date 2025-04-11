import jwt from "jsonwebtoken";

const secret = process.env.JWT_SECRET || "your_secret_key";

export const signToken = (payload) => {
  return jwt.sign(payload, secret, { expiresIn: "1d" });
};

export const verifyToken = (token) => {
  return jwt.verify(token, secret);
};
