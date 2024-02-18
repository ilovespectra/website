import { allProjects } from "contentlayer/generated";
import Link from "next/link";
import AvatarImage from "@/components/AvatarImage";
import { ArrowRightIcon } from "@heroicons/react/24/solid";
import ProjectCard from "@/components/ProjectCard";
import { Metadata } from "next";
// import SocialIcons from "@/components/SocialIcons";

export const metadata: Metadata = {
  title: "Nick Frostbutter",
  // titleTemplate: "%s",
  description:
    "Hi! I'm Nick, a full stack developer and submariner working on various projects. In my free time I write software, technical articles, and build things.",
};

export default function Page() {
  const projects = allProjects
    .filter((item) => item?.homepage == true)
    .slice(0, 3);

  return (
    <>
      {" "}
      {/** md:space-y-16 */}
      <section className="grid items-center max-w-6xl grid-cols-1 gap-10 mx-auto mt-4 lg:mt-30 md:gap-32 sm:mt-8 lg:grid-cols-2">
        <section className="grid items-center grid-cols-2 gap-10 md:grid-cols-3 sm:gap-5 md:gap-8 md:items-center lg:block">
          <Link
            href="/"
            className="block col-span-2 mx-auto mb-5 text-center auto-cols-auto sm:col-span-1 md:text-left"
          >
            <AvatarImage
              sizeClass={"w-52 h-52 md:w-48 md:h-48 lg:w-32 lg:h-32"}
            />
          </Link>

          <p className="col-span-2 text-2xl whitespace-pre-line sm:text-2xl sm:col-span-2">
            <span className="inline-block mb-5 text-3xl lg:mb-0 lg:text-2xl">
              Hi! I&apos;m Nick,
            </span>
            <br className="lg:hidden" /> a{" "}
            <Link
              href="https://github.com/nickfrosty"
              target="_blank"
              className="link-active"
              title="@nickfrosty on GitHub"
            >
              full stack developer
            </Link>{" "}
            and submarine veteran. In my free time, I write{" "}
            <Link
              href="/projects"
              className="link-active"
              title="View a list of my projects"
            >
              software
            </Link>{" "}
            and{" "}
            <Link
              href="/articles"
              className="link-active"
              title="View my technical articles"
            >
              technical articles
            </Link>
            .
          </p>

          {/* <div className="col-span-3 mt-5 space-x-5 text-center md:mt-10 lg:mt-5 lg:text-left">
            <SocialIcons />
          </div> */}

          <p className="col-span-2 space-y-5 text-lg font-medium text-center md:mt-10 xl:mt-14 lg:text-left">
            Here, you can find{" "}
            <Link href="/now" className="link-active">
              what I am working on now
            </Link>
            .
          </p>
        </section>

        <section className="grid gap-8 xl:gap-12">
          {projects && projects && (
            <div className="order-2 md:order-1">
              <hr className="mb-14 md:hidden" />

              <h2 className="my-10 text-3xl font-bold text-center lg:hidden">
                My Current Projects
              </h2>

              <div className="grid grid-cols-1 gap-8 mb-3 lg:block md:grid-cols-2">
                {projects.map((project) => (
                  <ProjectCard
                    key={project.title}
                    project={project}
                    showDateRange={false}
                  />
                ))}
              </div>

              <Link
                href="/projects"
                className="inline-flex ml-10 space-x-3 text-lg font-medium flexer link-active"
              >
                <span>View more projects</span>
                <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>
          )}
        </section>
      </section>
    </>
  );
}
