"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { blogsData } from "@/lib/data";
import BlogPost from "./blog_post";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  const { ref } = useSectionInView("Projects", 0.5);

  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My Blog</SectionHeading>
      <div>
        {blogsData.map((blog, index) => (
          <React.Fragment key={index}>
            <BlogPost {...blog} />
          </React.Fragment>
        ))}
        In Progress!
      </div>
    </section>
  );
}