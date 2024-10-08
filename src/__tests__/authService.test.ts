import { registerUser, loginUser } from "../services/authService";

describe("Auth Service", () => {
  const email = "eduardo@gmail.com";
  const password = "senha@44";

  // Testa o registro de um usuário novo
  it("should register a new user", async () => {
    const newUser = await registerUser(email, password);
    expect(newUser.email).toBe(email);
  });

  // Testa o login do usuário registrado
  it("should login the registered user", async () => {
    const newUser = await loginUser(email, password);
    expect(newUser.email).toBe(email);
  })
})