"use client";
import { TrashIcon } from "@radix-ui/react-icons";
import {
  Button,
  Card,
  Container,
  Flex,
  Heading,
  TextArea,
  TextField,
} from "@radix-ui/themes";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";

function ProjectNewPage() {
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
  const router = useRouter();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    const response = await axios.post("/api/projects", data);

    if (response.status === 201) {
      router.push("/dashboard");
      router.refresh();
    }
  });
  return (
    <Container size={"1"} height={"100%"} className="p-3 md:p-0">
      <Flex className="h-screen w-full" align={"center"} justify={"center"}>
        <Card className="p-4 w-full md:w-3/4">
          <Heading className="my-4">
            {params ? "Edit" : "Create"} Project
          </Heading>
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
                    placeholder="Project title"
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
                    placeholder="Project description"
                    {...field}
                  />
                );
              }}
            />

            <Button type="submit">
              {params ? "Update" : "Create"} Project
            </Button>
          </form>
          {params.id && (
            <Flex justify={"end"} className="mt-4">
              <Button color="red">
                <TrashIcon />
                Delete
              </Button>
            </Flex>
          )}
        </Card>
      </Flex>
    </Container>
  );
}

export default ProjectNewPage;
