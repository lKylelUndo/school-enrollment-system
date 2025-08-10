"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function Programs() {
  const [selectedDepartment, setSelectedDepartment] =
    useState("Computer Studies");

  const allPrograms: Record<string, any[]> = {
    Education: [
      {
        title: "Bachelor of Education",
        description: "Prepares students for teaching in schools.",
        action: "Apply Now",
        content:
          "Covers pedagogy, curriculum development, and classroom management.",
        footer: "Duration: 4 years",
      },
      {
        title: "Early Childhood Education",
        description: "Focuses on development in early years.",
        action: "Learn More",
        content:
          "Learn child psychology, learning through play, and family engagement.",
        footer: "Duration: 3 years",
      },
    ],
    Engineering: [
      {
        title: "BSc in Civil Engineering",
        description: "Design and construct infrastructure.",
        action: "View Curriculum",
        content:
          "Covers structural analysis, soil mechanics, and construction management.",
        footer: "Duration: 4 years",
      },
      {
        title: "BSc in Electrical Engineering",
        description: "Work with electrical systems and power grids.",
        action: "Join Program",
        content: "Learn circuits, power systems, and renewable energy.",
        footer: "Duration: 4 years",
      },
    ],
    "Computer Studies": [
      {
        title: "BSc in Computer Science",
        description:
          "Foundational program in computing, algorithms, and data structures.",
        action: "Apply Now",
        content:
          "Covers programming, databases, AI, and systems design. Prepares students for software engineering roles.",
        footer: "Duration: 4 years",
      },
      {
        title: "BSc in Software Engineering",
        description:
          "Focused on the design, development, and maintenance of software systems.",
        action: "View Curriculum",
        content:
          "Includes agile development, testing, project management, and advanced programming courses.",
        footer: "Duration: 4 years",
      },
      {
        title: "BSc in Data Science",
        description:
          "Program integrating computer science with statistical methods.",
        action: "Enroll Today",
        content:
          "Learn machine learning, data visualization, and big data tools like Hadoop and Spark.",
        footer: "Duration: 4 years",
      },
      {
        title: "BSc in Cybersecurity",
        description:
          "Focuses on protecting systems and networks from digital attacks.",
        action: "Secure Your Future",
        content:
          "Topics include ethical hacking, cryptography, and network security practices.",
        footer: "Duration: 4 years",
      },
      {
        title: "BSc in Artificial Intelligence",
        description: "Specialized program in AI theory and application.",
        action: "Start AI Journey",
        content:
          "Explore neural networks, natural language processing, and robotics.",
        footer: "Duration: 4 years",
      },
      {
        title: "BSc in Information Technology",
        description:
          "Prepares students to manage and support IT infrastructure.",
        action: "Learn More",
        content:
          "Covers networking, cloud computing, system admin, and support services.",
        footer: "Duration: 3 years",
      },
      {
        title: "Diploma in Web Development",
        description:
          "Hands-on course for front-end and back-end web development.",
        action: "Register Now",
        content: "Covers HTML, CSS, JavaScript, React, Node.js, and databases.",
        footer: "Duration: 2 years",
      },
      {
        title: "Certificate in Game Development",
        description: "Introductory course for game design and programming.",
        action: "Join Program",
        content: "Learn Unity, C#, 2D/3D design, and interactive storytelling.",
        footer: "Duration: 1 year",
      },
    ],
  };

  const departmentNames = Object.keys(allPrograms);
  const filteredPrograms = allPrograms[selectedDepartment];

  return (
    <>
      <div className="bg-slate-900 h-[250px]">
        <div className="flex justify-center items-center h-full">
          <h1 className="text-gray-50 text-4xl font-semibold">Our Courses</h1>
        </div>
      </div>

      <div className="md:w-2/3  !mx-auto text-center !-mt-4">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <button className="!px-4 text-gray-50 !py-2 bg-green-700 rounded-lg">
              Programs
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="!p-4 w-80 flex flex-col gap-4">
            <DropdownMenuItem
              onClick={() => setSelectedDepartment("Education")}
            >
              Education
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setSelectedDepartment("Engineering")}
            >
              Engineering
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => setSelectedDepartment("Computer Studies")}
            >
              Computer Studies
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
        <hr className="!mt-4 bg-slate-200 h-px" />
      </div>

      <div className="md:w-[1100px] !mt-10 !mx-auto grid lg:grid-cols-3 gap-6">
        {filteredPrograms.map((program, index) => (
          <Card key={index} className="!p-6">
            <CardHeader>
              <CardTitle>{program.title}</CardTitle>
              <CardDescription>{program.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </div>
    </>
  );
}

export default Programs;
