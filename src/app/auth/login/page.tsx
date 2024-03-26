import SigninForm from "@/app/components/auth/SigninForm";
import { Card, Container, Flex, Heading } from "@radix-ui/themes";
import Link from "next/link";

function LoginPage() {
  return (
    <>
      <Container size={"1"} height={"100%"} className="p-3 md:p-0">
        <Flex className="h-screen w-full items-center">
          <Card className="w-full p-7">
            <Heading>Sign In</Heading>
            <SigninForm />

            <Flex justify={"between"} className="mt-4 px-4">
              <Link href="/auth/forgot-password">Forgot password?</Link>
              <Link href="/auth/register">Sign up</Link>
            </Flex>
          </Card>
        </Flex>
      </Container>
    </>
  );
}

export default LoginPage;
