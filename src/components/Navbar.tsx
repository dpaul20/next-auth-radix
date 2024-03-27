"use client";
import {
  Button,
  Container,
  DropdownMenu,
  Flex,
  Heading,
  Link,
} from "@radix-ui/themes";
import { signOut, useSession } from "next-auth/react";
import NextLink from "next/link";

function Navbar() {
  const { data: session } = useSession();
  return (
    <nav className="bg-zinc-950 py-4">
      <Container>
        <Flex justify={"between"} align={"center"}>
          <NextLink href="/">
            <Heading>RadixNext</Heading>
          </NextLink>

          <ul className="flex gap-x-2 items-center">
            {!session && (
              <>
                <li>
                  <Link asChild>
                    <NextLink href="/auth/login">Login</NextLink>
                  </Link>
                </li>
                <li>
                  <Link asChild>
                    <NextLink href="/auth/register">Register</NextLink>
                  </Link>
                </li>
              </>
            )}

            {session && (
              <>
                <li>
                  <Link asChild>
                    <NextLink href="/dashboard">Dashboard</NextLink>
                  </Link>
                </li>
                <li>
                  <DropdownMenu.Root>
                    <DropdownMenu.Trigger>
                      <Button variant="soft">
                        {session?.user?.name}
                        <DropdownMenu.TriggerIcon />
                      </Button>
                    </DropdownMenu.Trigger>
                    <DropdownMenu.Content>
                      <DropdownMenu.Item>My Profile</DropdownMenu.Item>

                      <DropdownMenu.Separator />
                      <DropdownMenu.Item>Settings</DropdownMenu.Item>

                      <DropdownMenu.Separator />
                      <DropdownMenu.Item color="red" onClick={() => signOut()}>
                        Logout
                      </DropdownMenu.Item>
                    </DropdownMenu.Content>
                  </DropdownMenu.Root>
                </li>
              </>
            )}
          </ul>
        </Flex>
      </Container>
    </nav>
  );
}

export default Navbar;
