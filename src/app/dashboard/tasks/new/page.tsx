"use client";
import {
  Button,
  Card,
  Container,
  Flex,
  Heading,
  TextArea,
  TextField,
} from "@radix-ui/themes";
import { Controller, useForm } from "react-hook-form";

function TaskNewPage() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
    },
  });

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
  });
  return (
    <Container size={"1"} height={"100%"} className="p-3 md:p-0">
      <Flex className="h-screen w-full" align={"center"} justify={"center"}>
        <Card className="p-4 w-full md:w-3/4">
          <Heading className="my-4">Create Task</Heading>
          <form className="flex flex-col gap-y-4" onSubmit={onSubmit}>
            <label htmlFor="title">Title</label>
            <Controller
              name="title"
              control={control}
              render={({ field }) => {
                return (
                  <TextField.Root
                    id="title"
                    type="text"
                    placeholder="Task title"
                    {...field}
                  />
                );
              }}
            />
            <label htmlFor="description">Description</label>
            <Controller
              name="description"
              control={control}
              render={({ field }) => {
                return (
                  <TextArea
                    id="description"
                    placeholder="Task description"
                    {...field}
                  />
                );
              }}
            />

            <Button type="submit">Create Task</Button>
          </form>
        </Card>
      </Flex>
    </Container>
  );
}

export default TaskNewPage;
