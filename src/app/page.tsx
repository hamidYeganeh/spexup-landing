// services
import { getBlogs } from "@/api/blogs.api";
import { getProjects } from "@/api/projects.api";
import { getServices } from "@/api/services.api";
// sections
import {
  HomePageBlogs,
  HomePageClientReviews,
  HomePageGetStarted,
  HomePageHeroSection,
  HomePageProjects,
  HomePageServices,
  HomePageWhoWeWork,
} from "@/containers/Pages/HomePage";

export default async function Home() {
  const services = await getServices({ page: 1, limit: 10, title: "" });
  const projects = await getProjects({
    page: 1,
    limit: 10,
    name: "",
    owner: "",
  });
  // const blogs = await getBlogs({ page: 1, limit: 10 });

  return (
    <main>
      <HomePageHeroSection />
      <HomePageServices data={services} />
      <HomePageProjects data={projects} />
      {/* <HomePageBlogs data={blogs} /> */}
      <HomePageWhoWeWork />
      <HomePageClientReviews />
      <HomePageGetStarted />
    </main>
  );
}
