"use client";
import { Button, Flex, Heading } from "@radix-ui/themes";
import { useRouter } from "next/navigation";

function HeaderDashboard() {
  const router = useRouter();
  return (
    <>
      <Flex align={"center"} justify={"between"} py={"4"}>
        <Heading>Projects</Heading>
        <Button onClick={() => router.push("/dashboard/projects/new")}>
          Add Project
        </Button>
      </Flex>
    </>
  );
}

export default HeaderDashboard;
