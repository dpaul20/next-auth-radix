import SigninForm from "@/components/auth/SigninForm";
import { Card, Container, Flex, Heading, Link } from "@radix-ui/themes";
import NextLink from "next/link";

function LoginPage() {
  return (
    <>
      <Container size={"1"} height={"100%"} className="p-3 md:p-0">
        <Flex className="h-[calc(100vh-10rem)] w-full items-center">
          <Card className="w-full p-7">
            <Heading>Sign In</Heading>
            <SigninForm />

            <Flex justify={"between"} className="mt-4 px-4">
              <Link asChild>
                <NextLink href="/auth/forgot-password">
                  Forgot password?
                </NextLink>
              </Link>
              <Link asChild>
                <NextLink href="/auth/register">Sign up</NextLink>
              </Link>
            </Flex>
          </Card>
        </Flex>
      </Container>
    </>
  );
}

export default LoginPage;
