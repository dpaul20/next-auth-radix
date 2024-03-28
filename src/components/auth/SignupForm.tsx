"use client";
import {
  EnvelopeClosedIcon,
  LockClosedIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { Button, Flex, Text, TextField } from "@radix-ui/themes";
import axios from "axios";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";

type FormInputs = {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
};

function SignupForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    getValues,
  } = useForm<FormInputs>({
    defaultValues: {
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
  });
  const router = useRouter();

  const onSubmit = handleSubmit(async (data) => {
    const response = await axios.post("/api/auth/register", data);

    if (response.status === 201) {
      const signin = await signIn("credentials", {
        email: response.data.email,
        password: data.password,
        redirect: false,
      });

      if (!signin?.ok) {
        console.error(signin?.error);
        return;
      }

      router.push("/dashboard");
    }
  });
  return (
    <form onSubmit={onSubmit}>
      <Flex className="flex flex-col gap-4 p-4">
        <label htmlFor="name" className="text-xs">Name</label>
        <Controller
          name="name"
          control={control}
          rules={{
            required: "Name is required",
            minLength: {
              value: 3,
              message: "Name should be at least 3 characters",
            },
          }}
          render={({ field }) => {
            return (
              <TextField.Root
                id="name"
                className="w-full"
                type="text"
                placeholder="John Doe"
                autoFocus
                {...field}
              >
                <TextField.Slot>
                  <PersonIcon className="w-4 h-4" />
                </TextField.Slot>
              </TextField.Root>
            );
          }}
        />
        {errors.name && (
          <Text color="red" className="text-xs">
            {errors.name.message}
          </Text>
        )}
        <label htmlFor="email" className="text-xs">Email</label>
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
        <label htmlFor="password" className="text-xs">Password</label>
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
        <label htmlFor="confirm-password" className="text-xs">Confirm Password</label>
        <Controller
          name="confirmPassword"
          control={control}
          rules={{
            required: "Confirm Password is required",
            validate: (value) => {
              if (value === getValues("password")) {
                return true;
              } else {
                return "Passwords do not match";
              }
            },
          }}
          render={({ field }) => {
            return (
              <TextField.Root
                id="confirm-password"
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
        {errors.confirmPassword && (
          <Text color="red" className="text-xs">
            {errors.confirmPassword.message}
          </Text>
        )}

        <Button type="submit" className="w-full">
          Sign Up
        </Button>
      </Flex>
    </form>
  );
}

export default SignupForm;
