"use client";
import { EnvelopeClosedIcon, LockClosedIcon } from "@radix-ui/react-icons";
import { Button, Flex, Text, TextField } from "@radix-ui/themes";
import { Controller, useForm } from "react-hook-form";

function SigninForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <form onSubmit={onSubmit}>
      <Flex className="flex flex-col gap-4 p-4">
        <label htmlFor="email">Email</label>
        <Controller
          name="email"
          control={control}
          rules={{
            required: "Email is required",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Invalid email address",
            },
          }}
          render={({ field }) => {
            return (
              <TextField.Root
                id="email"
                className="w-full"
                type="email"
                placeholder="email@domain.com"
                autoFocus
                {...field}
              >
                <TextField.Slot>
                  <EnvelopeClosedIcon className="w-4 h-4" />
                </TextField.Slot>
              </TextField.Root>
            );
          }}
        />
        {errors.email && (
          <Text color="red" className="text-xs">
            {errors.email.message}
          </Text>
        )}

        <label htmlFor="password">Password</label>
        <Controller
          name="password"
          control={control}
          rules={{
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 8 characters",
            },
          }}
          render={({ field }) => {
            return (
              <TextField.Root
                id="password"
                className="w-full"
                type="password"
                placeholder="******"
                {...field}
              >
                <TextField.Slot>
                  <LockClosedIcon className="w-4 h-4" />
                </TextField.Slot>
              </TextField.Root>
            );
          }}
        />

        {errors.password && (
          <Text color="red" className="text-xs">
            {errors.password.message}
          </Text>
        )}

        <Button type="submit" className="w-full">
          Sign In
        </Button>
      </Flex>
    </form>
  );
}

export default SigninForm;
