import {
  EnvelopeClosedIcon,
  LockClosedIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { Button, Flex, TextField } from "@radix-ui/themes";

function SignupForm() {
  return (
    <Flex className="flex flex-col gap-4 p-4">
      <label htmlFor="name">Name</label>
      <TextField.Root
        id="name"
        className="w-full"
        type="text"
        placeholder="John Doe"
        autoFocus
      >
        <TextField.Slot>
          <PersonIcon className="w-4 h-4" />
        </TextField.Slot>
      </TextField.Root>

      <label htmlFor="email">Email</label>
      <TextField.Root
        id="email"
        className="w-full"
        type="email"
        placeholder="email@domain.com"
      >
        <TextField.Slot>
          <EnvelopeClosedIcon className="w-4 h-4" />
        </TextField.Slot>
      </TextField.Root>

      <label htmlFor="password">Password</label>
      <TextField.Root
        id="password"
        className="w-full"
        type="password"
        placeholder="******"
      >
        <TextField.Slot>
          <LockClosedIcon className="w-4 h-4" />
        </TextField.Slot>
      </TextField.Root>

      <label htmlFor="confirm-password">Confirm Password</label>
      <TextField.Root
        id="confirm-password"
        className="w-full"
        type="password"
        placeholder="******"
      >
        <TextField.Slot>
          <LockClosedIcon className="w-4 h-4" />
        </TextField.Slot>
      </TextField.Root>

      <Button className="w-full">Sign Up</Button>
    </Flex>
  );
}

export default SignupForm;
