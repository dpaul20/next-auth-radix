import { EnvelopeClosedIcon, LockClosedIcon } from "@radix-ui/react-icons";
import { Button, Flex, TextField } from "@radix-ui/themes";

function SigninForm() {
  return (
    <Flex className="flex flex-col gap-4 p-4">
      <label htmlFor="email">Email</label>
      <TextField.Root
        id="email"
        className="w-full"
        type="email"
        placeholder="email@domain.com"
        autoFocus
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

      <Button className="w-full">Sign In</Button>
    </Flex>
  );
}

export default SigninForm;
