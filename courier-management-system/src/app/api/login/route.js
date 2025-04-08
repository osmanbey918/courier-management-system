import { serialize } from "cookie";

export default function handler(req, res) {
  const { email, password } = req.body;

  const users = [
    { email: "admin@test.com", password: "123456", role: "admin" },
    { email: "staff@test.com", password: "123456", role: "staff" },
    { email: "delivery@test.com", password: "123456", role: "delivery" },
  ];

  const user = users.find(
    (u) => u.email === email && u.password === password
  );

  if (user) {
    const tokenPayload = {
      email: user.email,
      role: user.role,
    };

    const token = Buffer.from(JSON.stringify(tokenPayload)).toString("base64");

    res.setHeader(
      "Set-Cookie",
      serialize("token", `header.${token}.sig`, {
        path: "/",
        httpOnly: true,
        maxAge: 60 * 60 * 24, // 1 day
      })
    );

    return res.status(200).json({ role: user.role });
  } else {
    return res.status(401).json({ message: "Invalid credentials" });
  }
}
