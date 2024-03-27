import SignupForm from "@/components/auth/SignupForm ";
import { Card, Container, Flex, Heading, Text } from "@radix-ui/themes";
import Link from "next/link";

function RegisterPage() {
  return (
    <>
      <Container size={"1"} height={"100%"} className="p-3 md:p-0">
        <Flex className="h-screen w-full items-center">
          <Card className="w-full p-7">
            <Heading>Sign up</Heading>
            <SignupForm />
            <Flex justify={"between"} className="mt-4 px-4">
              <Text>
                Already have an account? <Link href="/auth/login">Sign In</Link>
              </Text>
            </Flex>
          </Card>
        </Flex>
      </Container>
    </>
  );
}

export default RegisterPage;
