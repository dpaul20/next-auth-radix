import SignupForm from "@/components/auth/SignupForm";
import { Card, Container, Flex, Heading, Link, Text } from "@radix-ui/themes";
import NextLink from "next/link";

function RegisterPage() {
  return (
    <>
      <Container size={"1"} height={"100%"} className="p-3 md:p-0">
        <Flex className="h-[calc(100vh)] w-full items-center">
          <Card className="w-full p-7">
            <Heading>Sign up</Heading>
            <SignupForm />
            <Flex justify={"between"} className="mt-4 px-4">
              <Text>
                Already have an account?
                <Link asChild>
                  <NextLink href="/auth/login"> Sign in</NextLink>
                </Link>
              </Text>
            </Flex>
          </Card>
        </Flex>
      </Container>
    </>
  );
}

export default RegisterPage;
