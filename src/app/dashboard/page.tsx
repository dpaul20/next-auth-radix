import HeaderDashboard from "@/components/dashboard/HeaderDashboard";
import prisma from "@/libs/prisma";
import { Container, Grid } from "@radix-ui/themes";
import { getServerSession } from "next-auth";
import ProjectCard from "@/components/projects/ProjectCard";
import { authOptions } from "@/libs/authOptions";

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
    <Container className="px-8 md:px-0">
      <HeaderDashboard />
      <Grid columns={{ initial: "1", md: "2", lg: "3" }} gap={"4"}>
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </Grid>
    </Container>
  );
}

export default DashboardPage;
