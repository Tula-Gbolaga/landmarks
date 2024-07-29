import { Link } from "react-router-dom";
import { Button, Input } from "../components";

const Register = () => {
  return (
    <div class="bg-gray-100 px-2">
      <div class="flex items-center justify-center min-h-screen">
        <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-center text-2xl font-bold mb-6">
            Create your Account
          </h2>
          <h3 className="text-center">
            Already have an account?
            <Link to="/login" className="text-blue-500">
              {" "}
              Login{" "}
            </Link>
          </h3>
          <form>
            <Input
              label={"First Name"}
              type="text"
              placeholder={"Enter Firstname"}
            />
            <Input
              label={"Last Name"}
              type="text"
              placeholder={"Enter Lastname"}
            />
            <Input label={"Email"} type="email" placeholder={"Enter Email"} />
            <Input
              label={"Password"}
              type="password"
              placeholder={"Enter Passsword"}
            />
            <Input
              label={"Confirm Password"}
              type="password"
              placeholder={"Retype Passsword"}
            />

            <div class="flex items-center justify-center my-2">
              <Button title="Sign Up" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export { Register };
