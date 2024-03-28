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
import { useEffect } from "react";
import { Controller, useForm } from "react-hook-form";
import { toast } from "sonner";

function ProjectNewPage() {
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
  } = useForm({
    defaultValues: {
      title: "",
      description: "",
    },
  });
  const router = useRouter();
  const params = useParams() as { id: string };

  const onSubmit = handleSubmit(async (data) => {
    if (!params.id) {
      const response = await axios.post("/api/projects", data);

      if (response.status === 201) {
        toast.success("Project created successfully");
        router.push("/dashboard");
        router.refresh();
      }
    } else {
      const response = await axios.put(`/api/projects/${params.id}`, data);

      if (response.status === 200) {
        toast.success("Project updated successfully");
        router.push("/dashboard");
        router.refresh();
      }
    }
  });

  const handleDelete = async (id: string) => {
    const response = await axios.delete(`/api/projects/${id}`);

    if (response.status === 200) {
      toast.success("Project deleted successfully");
    }

    router.push("/dashboard");
    router.refresh();
  };

  useEffect(() => {
    if (params.id) {
      axios.get(`/api/projects/${params.id}`).then((response) => {
        if (response.status === 200) {
          const { title, description } = response.data;
          setValue("title", title);
          setValue("description", description);
        }
      });
    }
  }, [params.id, setValue]);

  return (
    <Container size={"1"} height={"100%"} className="p-3 md:p-0">
      <Flex className="h-screen w-full" align={"center"} justify={"center"}>
        <Card className="p-4 w-full md:w-3/4">
          <Heading className="my-4">
            {params.id ? "Edit" : "Create"} Project
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
              {params.id ? "Update" : "Create"} Project
            </Button>
          </form>
          {params.id && (
            <Flex justify={"end"} className="mt-4">
              <Button color="red" onClick={() => handleDelete(params.id)}>
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
