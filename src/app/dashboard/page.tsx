"use client";
import { Button, Container, Flex, Heading } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

function DashboardPage() {
  const router = useRouter();
  return (
    <Container>
      <Flex align={"center"} justify={"between"}>
        <Heading>Tasks</Heading>
        <Button onClick={() => router.push("/dashboard/tasks/new")}>
          Add Task
        </Button>
      </Flex>
    </Container>
  );
}

export default DashboardPage;
