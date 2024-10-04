"use client";

import { projects } from '@/utils/data/projects-data';
import ProjectCard from './project-card';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import clsx from 'clsx';
import shopify from '/public/svg/skills/shopify.svg';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState("shopify");
  const [projectsData, setProjectsData] = useState<object[]>();

  useEffect(() => {
    handleClickCategory("shopify");
  }, []);

  const handleClickCategory = (id : string): void => {
    setActiveCategory(id);
    switch (id) {
      case 'shopify':
        setProjectsData(projects.shopify);
        break;
      case 'wordpress':
        setProjectsData(projects.wordpress);
        break;
      case 'nextjs':
        setProjectsData(projects.nextjs);
        break;
      case 'webgl':
        setProjectsData(projects.webgl);
        break;
      default:
        setProjectsData(projects.shopify);
        break;
    }
  }

  return (
    <div id='projects' className="relative z-50  my-12 lg:my-24">
      <div className="top-10">
        <div className="w-[80px] h-[80px] bg-violet-100 rounded-full absolute -top-3 left-0 translate-x-1/2 filter blur-3xl  opacity-30"></div>
        <div className="flex items-center justify-start relative">
          <span className="bg-[#1a1443]  w-fit text-white px-5 py-3 text-xl rounded-md">
            PROJECTS
          </span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
          <div className='cursor-pointer' onClick={() => handleClickCategory("shopify")}>
            <span className={clsx('bg-[#1a1443]', 'w-fit', 'text-white', 'px-5', 'py-3', 'text-x1', 'rounded-md', 'hover:bg-[#16f2b3]', 'hover:text-purple-700', activeCategory == "shopify" && 'bg-[#1a5243]')}>
              Shopify
            </span>
          </div>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
          <div className='cursor-pointer' onClick={() => handleClickCategory("wordpress")}>
            <span className={clsx('bg-[#1a1443]', 'w-fit', 'text-white', 'px-5', 'py-3', 'text-x1', 'rounded-md', 'hover:bg-[#16f2b3]', 'hover:text-purple-700', activeCategory == "wordpress" && 'bg-[#1a5243]')}>
              WordPress
            </span>
          </div>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
          <div className='cursor-pointer' onClick={() => handleClickCategory("nextjs")}>
            <span className={clsx('bg-[#1a1443]', 'w-fit', 'text-white', 'px-5', 'py-3', 'text-x1', 'rounded-md', 'hover:bg-[#16f2b3]', 'hover:text-purple-700', activeCategory == "nextjs" && 'bg-[#1a5243]')}>
              NextJs
            </span>
          </div>
          <span className="w-full h-[2px] bg-[#1a1443]"></span>
          <div className='cursor-pointer' onClick={() => handleClickCategory("webgl")}>
            <span className={clsx('bg-[#1a1443]', 'w-fit', 'text-white', 'px-5', 'py-3', 'text-x1', 'rounded-md', 'hover:bg-[#16f2b3]', 'hover:text-purple-700', activeCategory == "webgl" && 'bg-[#1a5243]')}>
              WebGL
            </span>
          </div>
        </div>
      </div>

      <div className="pt-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-6 md:px-12">
          {projectsData?.map((project, index) => (
            <div
              id={`sticky-card-${index + 1}`}
              key={index}
              className="sticky-card w-full mx-auto max-w-2xl"
            >
              <div className="box-border flex items-center justify-center rounded shadow-[0_0_30px_0_rgba(0,0,0,0.3)] transition-all duration-[0.5s]">
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;