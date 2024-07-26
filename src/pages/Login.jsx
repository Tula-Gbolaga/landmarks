import { Button, Input } from "../components";

const Login = () => {
  return (
    <div class="bg-gray-100 px-2">
      <div class="flex items-center justify-center min-h-screen">
        <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-center text-2xl font-bold mb-6">
            Login to your Account
          </h2>
          <h3 className="text-center">
            Don't have an account?
            <span className="text-blue-500"> Create Account</span>
          </h3>
          <form>
            <Input label={"Email"} type="email" placeholder={"Enter Email"} />
            <Input
              label={"Password"}
              type="password"
              placeholder={"Enter Passsword"}
            />
            <p className="text-blue-500 italic">Forgot Password?</p>
            <div class="flex items-center justify-center my-2">
              <Button title="Sign In" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export { Login };
