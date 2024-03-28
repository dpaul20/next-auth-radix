import HeaderDashboard from "@/components/dashboard/HeaderDashboard";
import prisma from "@/libs/prisma";
import { Container, Grid } from "@radix-ui/themes";
import { getServerSession } from "next-auth";
import { authOptions } from "../api/auth/[...nextauth]/route";
import ProjectCard from "@/components/projects/ProjectCard";

async function LoadProjects() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return [];
  }
  return await prisma.project.findMany({
    where: {
      userId: session.user.id,
    },
  });
}
async function DashboardPage() {
  const projects = await LoadProjects();
  return (
    <Container>
      <HeaderDashboard />
      <Grid columns={"3"} gap={"4"} py={"4"}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Grid>
    </Container>
  );
}

export default DashboardPage;
