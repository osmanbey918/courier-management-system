import { serialize } from "cookie";
import { withMiddleware } from "@/lib/middleware/middleware"; // adjust path if needed

function handler(req, res) {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: "Email and password are required" });
  }

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
    console.log("api lgoin ");
    

    return res.status(200).json({ role: user.role });
  } else {
    return res.status(401).json({ message: "Invalid credentials" });
  }
}

// Export with middleware wrapper
export default withMiddleware(handler);
